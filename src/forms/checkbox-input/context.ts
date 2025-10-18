import { createContext, useContext } from 'react'

interface CheckboxContextValue {
  disabled?: boolean
}

export const CheckboxContext = createContext<CheckboxContextValue | null>(null)

export const useCheckboxContext = () => {
  const context = useContext(CheckboxContext)
  if (!context) {
    throw new Error('CheckboxOption must be used within CheckboxInput')
  }
  return context
}
