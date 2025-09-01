import { useEffect, useState, useCallback, type RefObject } from 'react'
import type { MenuPlacement } from './types'

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
 * Get all scrollable ancestors of an element
 */
function getScrollableAncestors(element: HTMLElement): HTMLElement[] {
  const scrollableAncestors: HTMLElement[] = []
  let parent = element.parentElement

  while (parent && parent !== document.documentElement) {
    const style = getComputedStyle(parent)
    if (
      style.overflow === 'auto' ||
      style.overflow === 'scroll' ||
      style.overflowY === 'auto' ||
      style.overflowY === 'scroll' ||
      style.overflowX === 'auto' ||
      style.overflowX === 'scroll'
    ) {
      scrollableAncestors.push(parent)
    }
    parent = parent.parentElement
  }

  // Always include window for viewport scrolling
  scrollableAncestors.push(document.documentElement)
  return scrollableAncestors
}

/**
 * Check if trigger element is visible within scrollable containers
 */
function isTriggerVisible(
  trigger: HTMLElement,
  scrollableAncestors: HTMLElement[]
): boolean {
  const triggerRect = trigger.getBoundingClientRect()

  // Check if trigger is within viewport
  if (
    triggerRect.bottom < 0 ||
    triggerRect.top > window.innerHeight ||
    triggerRect.right < 0 ||
    triggerRect.left > window.innerWidth
  ) {
    return false
  }

  // Check if trigger is within all scrollable ancestors
  for (const ancestor of scrollableAncestors) {
    if (ancestor === document.documentElement) continue

    const ancestorRect = ancestor.getBoundingClientRect()
    if (
      triggerRect.bottom < ancestorRect.top ||
      triggerRect.top > ancestorRect.bottom ||
      triggerRect.right < ancestorRect.left ||
      triggerRect.left > ancestorRect.right
    ) {
      return false
    }
  }

  return true
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

    // Check if trigger is still visible in scrollable containers
    const scrollableAncestors = getScrollableAncestors(trigger)
    if (!isTriggerVisible(trigger, scrollableAncestors)) {
      // Hide menu when trigger is not visible
      setPosition({ isReady: false })
      return
    }

    // Get all the necessary measurements
    const triggerRect = trigger.getBoundingClientRect()
    const viewportWidth = window.innerWidth
    const viewportHeight = window.innerHeight

    // Resolve container element (handle both HTMLElement and RefObject)
    let containerElement: HTMLElement | null = null
    if (container) {
      if ('getBoundingClientRect' in container) {
        containerElement = container as HTMLElement
      } else if ('current' in container) {
        containerElement = container.current
      }
    }

    // Determine the constraining container
    const containerEl = containerElement || document.documentElement
    const containerRect =
      containerEl === document.documentElement
        ? { top: 0, bottom: viewportHeight, left: 0, right: viewportWidth }
        : containerEl.getBoundingClientRect()

    // Measure content size by temporarily making it invisible but measurable
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

    // Calculate available space in each direction relative to container
    const spaceBelow = containerRect.bottom - triggerRect.bottom - 8
    const spaceAbove = triggerRect.top - containerRect.top - 8
    const spaceRight = containerRect.right - triggerRect.left - 8
    const spaceLeft = triggerRect.right - containerRect.left - 8

    // Determine final placement
    let finalPlacement = placement
    if (placement === 'auto') {
      // Calculate if each placement would fit within container bounds
      const placements = [
        {
          name: 'bottom-start' as MenuPlacement,
          fits:
            spaceBelow >= contentRect.height && spaceRight >= contentRect.width,
          spaceUsed: spaceBelow,
          priority: 1, // Prefer bottom-start as default
        },
        {
          name: 'bottom-end' as MenuPlacement,
          fits:
            spaceBelow >= contentRect.height && spaceLeft >= contentRect.width,
          spaceUsed: spaceBelow,
          priority: 2,
        },
        {
          name: 'top-start' as MenuPlacement,
          fits:
            spaceAbove >= contentRect.height && spaceRight >= contentRect.width,
          spaceUsed: spaceAbove,
          priority: 3,
        },
        {
          name: 'top-end' as MenuPlacement,
          fits:
            spaceAbove >= contentRect.height && spaceLeft >= contentRect.width,
          spaceUsed: spaceAbove,
          priority: 4,
        },
      ]

      // First, try to find a placement that fits completely
      const fittingPlacements = placements.filter(p => p.fits)

      if (fittingPlacements.length > 0) {
        // Choose the fitting placement with highest priority (lowest priority number)
        finalPlacement = fittingPlacements.sort(
          (a, b) => a.priority - b.priority
        )[0].name
      } else {
        // If nothing fits perfectly, choose based on available space
        // Prefer vertical placement over horizontal (bottom over top)
        if (spaceBelow >= spaceAbove) {
          // Choose bottom placement - prefer start if there's more right space
          finalPlacement =
            spaceRight >= spaceLeft ? 'bottom-start' : 'bottom-end'
        } else {
          // Choose top placement - prefer start if there's more right space
          finalPlacement = spaceRight >= spaceLeft ? 'top-start' : 'top-end'
        }
      }
    }

    // Simple positioning relative to trigger
    const newPosition: MenuPosition = {}

    // Use fixed positioning when container constraints are provided or for better scroll handling
    if (container) {
      newPosition.position = 'fixed'

      switch (finalPlacement) {
        case 'bottom-start':
          newPosition.top = triggerRect.bottom + 4
          newPosition.left = triggerRect.left
          break
        case 'bottom-end':
          newPosition.top = triggerRect.bottom + 4
          newPosition.right = window.innerWidth - triggerRect.right
          break
        case 'top-start':
          newPosition.bottom = window.innerHeight - triggerRect.top + 4
          newPosition.left = triggerRect.left
          break
        case 'top-end':
          newPosition.bottom = window.innerHeight - triggerRect.top + 4
          newPosition.right = window.innerWidth - triggerRect.right
          break
      }
    } else {
      // Use absolute positioning relative to trigger (default behavior)
      newPosition.position = 'absolute'

      switch (finalPlacement) {
        case 'bottom-start':
          newPosition.top = triggerRect.height + 4
          newPosition.left = 0
          break
        case 'bottom-end':
          newPosition.top = triggerRect.height + 4
          newPosition.right = 0
          break
        case 'top-start':
          newPosition.bottom = triggerRect.height + 4
          newPosition.left = 0
          break
        case 'top-end':
          newPosition.bottom = triggerRect.height + 4
          newPosition.right = 0
          break
      }
    }

    // Apply container/viewport constraints
    if (container) {
      // Get position of menu relative to container for boundary checking
      const menuRect = {
        top: finalPlacement.startsWith('bottom')
          ? triggerRect.bottom + 4
          : triggerRect.top - contentRect.height - 4,
        left: finalPlacement.endsWith('start')
          ? triggerRect.left
          : triggerRect.right - contentRect.width,
        width: contentRect.width,
        height: contentRect.height,
      }

      // Horizontal constraints
      if (menuRect.left < containerRect.left + 8) {
        const shift = containerRect.left + 8 - menuRect.left
        if (finalPlacement.endsWith('start')) {
          newPosition.left = (newPosition.left || 0) + shift
        } else {
          newPosition.right = (newPosition.right || 0) - shift
        }
      } else if (menuRect.left + menuRect.width > containerRect.right - 8) {
        const shift = menuRect.left + menuRect.width - (containerRect.right - 8)
        if (finalPlacement.endsWith('start')) {
          newPosition.left = (newPosition.left || 0) - shift
        } else {
          newPosition.right = (newPosition.right || 0) + shift
        }
      }

      // Vertical constraints and max height
      if (finalPlacement.startsWith('bottom')) {
        const availableHeight = Math.max(
          50,
          containerRect.bottom - triggerRect.bottom - 16
        )
        if (contentRect.height > availableHeight) {
          newPosition.maxHeight = availableHeight
        }
      } else {
        const availableHeight = Math.max(
          50,
          triggerRect.top - containerRect.top - 16
        )
        if (contentRect.height > availableHeight) {
          newPosition.maxHeight = availableHeight
        }
      }
    } else {
      // No container constraints, just apply basic viewport boundary checks
      // for absolute positioned menus (mainly for edge cases)

      // Get position of menu relative to trigger for boundary checking
      const menuRect = {
        top: finalPlacement.startsWith('bottom')
          ? triggerRect.height + 4
          : -contentRect.height - 4,
        left: finalPlacement.endsWith('start') ? 0 : -contentRect.width,
        width: contentRect.width,
        height: contentRect.height,
      }

      // Basic overflow prevention - adjust if menu would go outside viewport
      const triggerInViewport = {
        left: triggerRect.left,
        right: triggerRect.right,
        top: triggerRect.top,
        bottom: triggerRect.bottom,
      }

      // Horizontal viewport overflow check
      if (triggerInViewport.left + menuRect.left < 8) {
        const shift = 8 - (triggerInViewport.left + menuRect.left)
        if (finalPlacement.endsWith('start')) {
          newPosition.left = (newPosition.left || 0) + shift
        } else {
          newPosition.right = (newPosition.right || 0) - shift
        }
      } else if (
        triggerInViewport.left + menuRect.left + menuRect.width >
        viewportWidth - 8
      ) {
        const shift =
          triggerInViewport.left +
          menuRect.left +
          menuRect.width -
          (viewportWidth - 8)
        if (finalPlacement.endsWith('start')) {
          newPosition.left = (newPosition.left || 0) - shift
        } else {
          newPosition.right = (newPosition.right || 0) + shift
        }
      }
    }

    // Mark position as ready
    newPosition.isReady = true
    setPosition(newPosition)
  }, [isOpen, placement, triggerRef, contentRef, container])

  // Initial position calculation
  useEffect(() => {
    calculatePosition()
  }, [calculatePosition])

  // Set up scroll listeners for all scrollable ancestors
  useEffect(() => {
    if (!isOpen || !triggerRef.current) return

    const trigger = triggerRef.current
    const scrollableAncestors = getScrollableAncestors(trigger)

    // Throttle scroll updates to prevent excessive recalculations
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

    // Add scroll listeners to all scrollable ancestors
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
