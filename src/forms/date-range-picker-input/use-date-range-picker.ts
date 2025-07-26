import { useId, useRef, useState } from 'react'

/**
 * Hook for managing open/close state and focus for DateRangePickerInput
 */
export function useDateRangePicker({ id }: { id?: string }) {
  const [open, setOpen] = useState(false)
  const buttonRef = useRef<HTMLButtonElement | null>(null)
  const defaultId = useId()

  const inputId = id || `date-range-picker-input-${defaultId}`

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') setOpen(false)
  }
  const handleMenuClose = () => setOpen(false)

  return {
    open,
    setOpen,
    inputId,
    buttonRef,
    handleKeyDown,
    handleMenuClose,
  }
}
