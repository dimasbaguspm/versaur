import { useEffect, useState, useCallback, type RefObject } from 'react'
import type { MenuPlacement } from './types'
import {
  getScrollableAncestors,
  isTriggerVisible,
  calculateBestPlacement,
  calculateFixedPosition,
  calculateAbsolutePosition,
  applyContainerConstraints,
  applyViewportConstraints,
} from './helpers'

export function useMenuOutsideClick(
  isOpen: boolean,
  contentRef: React.RefObject<HTMLDivElement | null>,
  triggerRef: React.RefObject<HTMLButtonElement | null>,
  onOutsideClick: () => void
) {
  useEffect(() => {
    if (!isOpen) return

    function handleClick(e: MouseEvent) {
      if (
        !contentRef.current?.contains(e.target as Node) &&
        !triggerRef.current?.contains(e.target as Node)
      ) {
        onOutsideClick()
      }
    }

    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [isOpen, onOutsideClick, contentRef, triggerRef])
}

interface MenuPosition {
  top?: number
  bottom?: number
  left?: number
  right?: number
  maxHeight?: number
  maxWidth?: number
  position?: 'absolute' | 'fixed'
  isReady?: boolean
}

/**
 * Resolve container element from prop
 */
function resolveContainer(
  container: HTMLElement | RefObject<HTMLElement | null> | null
): HTMLElement | null {
  if (!container) return null
  if ('getBoundingClientRect' in container) {
    return container as HTMLElement
  }
  if ('current' in container) {
    return container.current
  }
  return null
}

/**
 * Get container bounds
 */
function getContainerBounds(containerEl: HTMLElement | null) {
  if (!containerEl || containerEl === document.documentElement) {
    return {
      top: 0,
      bottom: window.innerHeight,
      left: 0,
      right: window.innerWidth,
    }
  }
  return containerEl.getBoundingClientRect()
}

/**
 * Calculate available space around trigger
 */
function calculateAvailableSpace(
  triggerRect: DOMRect,
  containerRect: { top: number; bottom: number; left: number; right: number }
) {
  return {
    spaceBelow: containerRect.bottom - triggerRect.bottom - 8,
    spaceAbove: triggerRect.top - containerRect.top - 8,
    spaceRight: containerRect.right - triggerRect.left - 8,
    spaceLeft: triggerRect.right - containerRect.left - 8,
  }
}

/**
 * Measure content dimensions safely
 */
function measureContentDimensions(
  content: HTMLDivElement
): DOMRect | undefined {
  const originalVisibility = content.style.visibility
  const originalPosition = content.style.position
  const originalOpacity = content.style.opacity

  content.style.visibility = 'hidden'
  content.style.position = 'absolute'
  content.style.opacity = '0'

  const contentRect = content.getBoundingClientRect()

  content.style.visibility = originalVisibility
  content.style.position = originalPosition
  content.style.opacity = originalOpacity

  return contentRect
}

export function useMenuPosition(
  isOpen: boolean,
  triggerRef: React.RefObject<HTMLElement | null>,
  contentRef: React.RefObject<HTMLDivElement | null>,
  placement: MenuPlacement = 'bottom-start',
  container: HTMLElement | RefObject<HTMLElement | null> | null
): MenuPosition {
  const [position, setPosition] = useState<MenuPosition>({ isReady: false })

  const calculatePosition = useCallback(() => {
    if (!isOpen || !triggerRef.current) {
      setPosition({ isReady: false })
      return
    }

    if (!contentRef.current) {
      // Content not ready yet, wait for next render
      const timer = setTimeout(() => {
        setPosition({ isReady: false })
      }, 0)
      return () => clearTimeout(timer)
    }

    const trigger = triggerRef.current
    const content = contentRef.current

    // Check if trigger is visible
    const scrollableAncestors = getScrollableAncestors(trigger)
    if (!isTriggerVisible(trigger, scrollableAncestors)) {
      setPosition({ isReady: false })
      return
    }

    // Get measurements
    const triggerRect = trigger.getBoundingClientRect()
    const containerElement = resolveContainer(container)
    const containerRect = getContainerBounds(containerElement)
    const contentRect = measureContentDimensions(content)

    if (!contentRect) {
      setPosition({ isReady: false })
      return
    }

    // Calculate available space
    const { spaceBelow, spaceAbove, spaceRight, spaceLeft } =
      calculateAvailableSpace(triggerRect, containerRect)

    // Determine final placement
    const finalPlacement = calculateBestPlacement(
      placement,
      contentRect,
      spaceBelow,
      spaceAbove,
      spaceRight,
      spaceLeft
    )

    // Calculate position based on positioning mode
    const newPosition: MenuPosition = {}

    if (container) {
      // Fixed positioning mode
      newPosition.position = 'fixed'
      const coordinates = calculateFixedPosition(finalPlacement, triggerRect)
      Object.assign(newPosition, coordinates)

      // Apply container constraints
      const { position: constrainedPosition, maxHeight } =
        applyContainerConstraints(
          coordinates,
          finalPlacement,
          triggerRect,
          contentRect,
          containerRect
        )
      Object.assign(newPosition, constrainedPosition)
      if (maxHeight !== undefined) {
        newPosition.maxHeight = maxHeight
      }
    } else {
      // Absolute positioning mode
      newPosition.position = 'absolute'
      const coordinates = calculateAbsolutePosition(finalPlacement, triggerRect)
      Object.assign(newPosition, coordinates)

      // Apply basic viewport constraints
      const constrainedPosition = applyViewportConstraints(
        coordinates,
        finalPlacement,
        triggerRect,
        contentRect
      )
      Object.assign(newPosition, constrainedPosition)
    }

    // Mark position as ready
    newPosition.isReady = true
    setPosition(newPosition)
  }, [isOpen, placement, triggerRef, contentRef, container])

  // Initial position calculation
  useEffect(() => {
    calculatePosition()
  }, [calculatePosition])

  // Set up scroll listeners
  useEffect(() => {
    if (!isOpen || !triggerRef.current) return

    const trigger = triggerRef.current
    const scrollableAncestors = getScrollableAncestors(trigger)

    // Throttle scroll updates
    let ticking = false
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          calculatePosition()
          ticking = false
        })
        ticking = true
      }
    }

    // Add scroll listeners
    scrollableAncestors.forEach(ancestor => {
      if (ancestor === document.documentElement) {
        window.addEventListener('scroll', handleScroll, { passive: true })
        window.addEventListener('resize', handleScroll, { passive: true })
      } else {
        ancestor.addEventListener('scroll', handleScroll, { passive: true })
      }
    })

    return () => {
      scrollableAncestors.forEach(ancestor => {
        if (ancestor === document.documentElement) {
          window.removeEventListener('scroll', handleScroll)
          window.removeEventListener('resize', handleScroll)
        } else {
          ancestor.removeEventListener('scroll', handleScroll)
        }
      })
    }
  }, [isOpen, calculatePosition, triggerRef])

  return position
}
