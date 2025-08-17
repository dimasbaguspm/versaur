import { useEffect, useRef } from 'react'

/**
 * useEscapeClose - Generic hook for handling Escape key to close overlays
 * Only triggers callback if the overlay is open and the ref element is focused/active
 *
 * @param isOpen - Whether the overlay is open
 * @param onClose - Callback to close the overlay
 * @param disabled - If true, disables Escape close
 * @returns overlayEl - ref to be attached to the overlay root
 */
export function useEscapeClose(
  isOpen: boolean,
  onClose: () => void,
  disabled?: boolean
) {
  const overlayEl = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (overlayEl.current) {
      overlayEl.current.focus()
    }
  }, [])

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (
        event.key === 'Escape' &&
        isOpen &&
        overlayEl.current &&
        overlayEl.current.contains(document.activeElement) &&
        !disabled
      ) {
        onClose()
      }
    }
    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose, disabled, overlayEl])

  return overlayEl
}
