import { useRef, useEffect, useState, useCallback } from 'react'
import type { UsePopoverReturn } from './types'

/**
 * usePopover - Hook for managing popover state and interactions
 *
 * @param id - Unique identifier for the popover
 * @param isOpen - Controlled open state (optional)
 * @param onOpen - Callback when popover opens
 * @param onClose - Callback when popover closes
 * @returns Popover utilities and state
 */
export function usePopover(
  id: string,
  isOpen?: boolean,
  onOpen?: () => void,
  onClose?: () => void
): UsePopoverReturn {
  const popoverRef = useRef<HTMLDivElement>(null)
  const [internalIsOpen, setInternalIsOpen] = useState(false)

  // Use controlled state if provided, otherwise use internal state
  const isControlled = isOpen !== undefined
  const open = isControlled ? isOpen : internalIsOpen

  const show = useCallback(() => {
    if (popoverRef.current) {
      popoverRef.current.showPopover?.()
    }
  }, [])

  const hide = useCallback(() => {
    if (popoverRef.current) {
      popoverRef.current.hidePopover?.()
    }
  }, [])

  const toggle = useCallback(() => {
    if (popoverRef.current) {
      popoverRef.current.togglePopover?.()
    }
  }, [])

  const getTriggerProps = useCallback(
    (action: 'toggle' | 'show' | 'hide' = 'toggle') => ({
      popoverTarget: id,
      popoverTargetAction: action,
    }),
    [id]
  )

  // Listen to popover toggle events
  useEffect(() => {
    const popover = popoverRef.current
    if (!popover) return

    const handleToggle = (event: Event) => {
      const toggleEvent = event as ToggleEvent
      const newOpenState = toggleEvent.newState === 'open'

      if (!isControlled) {
        setInternalIsOpen(newOpenState)
      }

      if (newOpenState && onOpen) {
        onOpen()
      } else if (!newOpenState && onClose) {
        onClose()
      }
    }

    popover.addEventListener('toggle', handleToggle)
    return () => {
      popover.removeEventListener('toggle', handleToggle)
    }
  }, [isControlled, onOpen, onClose])

  // Sync controlled state with popover element
  useEffect(() => {
    if (!isControlled || !popoverRef.current) return

    const popover = popoverRef.current

    // Check if popover API is supported (may not be in test environments)
    if (!popover.showPopover || !popover.hidePopover) return

    // Try to check if popover is open using matches
    // In test environments, this might fail, so we wrap in try-catch
    let matches = false
    try {
      matches = popover.matches(':popover-open')
    } catch {
      // In environments without :popover-open support (like jsdom),
      // we can't reliably check the state, so we'll just attempt to sync
      // This is acceptable for testing purposes
    }

    if (isOpen && !matches) {
      show()
    } else if (!isOpen && matches) {
      hide()
    }
  }, [isOpen, isControlled, show, hide])

  return {
    getTriggerProps,
    show,
    hide,
    toggle,
    isOpen: open,
    popoverRef,
  }
}
