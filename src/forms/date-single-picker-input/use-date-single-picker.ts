/**
 * useDateSinglePicker - hook for managing open state and focus for DateSinglePickerInput
 */
import { useState, useRef, useId, useCallback } from 'react'

export function useDateSinglePicker({ id }: { id?: string }) {
  const [open, setOpen] = useState(false)
  const generatedId = useId()
  const inputId = id || generatedId
  const buttonRef = useRef<HTMLButtonElement>(null)

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLButtonElement>) => {
      if (e.key === 'ArrowDown' || e.key === 'Enter' || e.key === ' ') {
        setOpen(true)
      }
    },
    []
  )

  const handleMenuClose = useCallback(() => {
    setOpen(false)
    buttonRef.current?.focus()
  }, [])

  return {
    open,
    setOpen,
    inputId,
    buttonRef,
    handleKeyDown,
    handleMenuClose,
  }
}
