import { createContext, useContext } from "react"

/**
 * Context type for ComboboxInput state management
 */
export interface ComboboxInputContextType {
  value: string[]
  onChange: (value: string[]) => void
  isOpen: boolean
  toggleOpen: () => void
  closeListbox: () => void
  variant: "popup" | "drawer"
  anchorName: string
  optionRegistry: Map<string, string>
  registerOption: (value: string, label: string) => void
  unregisterOption: (value: string) => void
  disabled?: boolean
  searchQuery?: string
  setSearchQuery?: (query: string) => void
}

/**
 * Private context for managing combobox input state
 */
export const ComboboxInputContext = createContext<ComboboxInputContextType | undefined>(undefined)

/**
 * Hook to access combobox context
 */
export function useComboboxInputContext(): ComboboxInputContextType {
  const context = useContext(ComboboxInputContext)
  if (!context) {
    throw new Error("ComboboxInput subcomponents must be used within ComboboxInput")
  }
  return context
}
