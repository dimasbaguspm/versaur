import { useCallback, useEffect, useState } from "react"

/**
 * Manages ComboboxInput state: value, open state, and option registry
 */
export function useComboboxInputState(externalValue: string[]) {
  const [internalValue, setInternalValue] = useState<string[]>(externalValue)
  const [isOpen, setIsOpen] = useState(false)
  const [optionRegistry, setOptionRegistry] = useState(() => new Map<string, string>())

  // Sync external value to internal state
  useEffect(() => {
    setInternalValue(externalValue)
  }, [externalValue])

  const toggleOpen = useCallback(() => {
    setIsOpen((prev) => !prev)
  }, [])

  const closeListbox = useCallback(() => {
    setIsOpen(false)
  }, [])

  const registerOption = useCallback((val: string, label: string) => {
    setOptionRegistry((prev) => {
      const next = new Map(prev)
      next.set(val, label)
      return next
    })
  }, [])

  const unregisterOption = useCallback((val: string) => {
    setOptionRegistry((prev) => {
      const next = new Map(prev)
      next.delete(val)
      return next
    })
  }, [])

  return {
    internalValue,
    setInternalValue,
    isOpen,
    toggleOpen,
    closeListbox,
    optionRegistry,
    registerOption,
    unregisterOption,
  }
}
