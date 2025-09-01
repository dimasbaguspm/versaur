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

/**
 * Menu-specific escape close hook that doesn't disable body scrolling
 */
export function useMenuEscapeClose(isOpen: boolean, onClose: () => void) {
  useEffect(() => {
    if (!isOpen) return

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [isOpen, onClose])
}

interface MenuPosition {
  top?: number
  bottom?: number
  left?: number
  right?: number
  maxHeight?: number
  maxWidth?: number
}

export function useMenuPosition(
  isOpen: boolean,
  triggerRef: React.RefObject<HTMLElement | null>,
  contentRef: React.RefObject<HTMLDivElement | null>,
  placement: MenuPlacement = 'bottom-start',
  container?: HTMLElement | null
): MenuPosition {
  const [position, setPosition] = useState<MenuPosition>({})

  useEffect(() => {
    if (!isOpen || !triggerRef.current || !contentRef.current) {
      setPosition({})
      return
    }

    const trigger = triggerRef.current
    const content = contentRef.current
    const containerEl = container || document.documentElement

    // Get all the necessary measurements
    const triggerRect = trigger.getBoundingClientRect()
    const containerRect = containerEl.getBoundingClientRect()

    // Measure content size
    const originalVisibility = content.style.visibility
    const originalPosition = content.style.position
    content.style.visibility = 'hidden'
    content.style.position = 'absolute'
    const contentRect = content.getBoundingClientRect()
    content.style.visibility = originalVisibility
    content.style.position = originalPosition

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

    setPosition(newPosition)
  }, [isOpen, placement, container, triggerRef, contentRef])

  return position
}
