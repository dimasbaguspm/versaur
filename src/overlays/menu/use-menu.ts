import { useEffect, useState } from 'react'
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

export function useMenuPosition(
  isOpen: boolean,
  triggerRef: React.RefObject<HTMLElement | null>,
  contentRef: React.RefObject<HTMLDivElement | null>,
  placement: MenuPlacement = 'bottom-start',
  container?: HTMLElement | null
): MenuPosition {
  const [position, setPosition] = useState<MenuPosition>({ isReady: false })

  useEffect(() => {
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
    const containerEl = container || document.documentElement

    // Get all the necessary measurements
    const triggerRect = trigger.getBoundingClientRect()
    const containerRect = containerEl.getBoundingClientRect()

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

    // Calculate available space in each direction
    const spaceBelow = containerRect.bottom - triggerRect.bottom - 8
    const spaceAbove = triggerRect.top - containerRect.top - 8
    const spaceRight = containerRect.right - triggerRect.left - 8
    const spaceLeft = triggerRect.right - containerRect.left - 8

    // Determine final placement
    let finalPlacement = placement
    if (placement === 'auto') {
      if (spaceBelow >= contentRect.height && spaceRight >= contentRect.width) {
        finalPlacement = 'bottom-start'
      } else if (
        spaceBelow >= contentRect.height &&
        spaceLeft >= contentRect.width
      ) {
        finalPlacement = 'bottom-end'
      } else if (
        spaceAbove >= contentRect.height &&
        spaceRight >= contentRect.width
      ) {
        finalPlacement = 'top-start'
      } else if (
        spaceAbove >= contentRect.height &&
        spaceLeft >= contentRect.width
      ) {
        finalPlacement = 'top-end'
      } else {
        finalPlacement = spaceBelow >= spaceAbove ? 'bottom-start' : 'top-start'
      }
    }

    // Simple positioning relative to trigger
    const newPosition: MenuPosition = {}

    // Use fixed positioning when container constraints are provided
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

    // Apply container constraints if provided
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
    }

    // Mark position as ready
    newPosition.isReady = true
    setPosition(newPosition)
  }, [isOpen, placement, container, triggerRef, contentRef])

  return position
}
