import { createContext, useContext } from 'react'
import type { CheckboxInputProps } from './types'

interface CheckboxContextValue {
  variant: CheckboxInputProps['variant']
  size: CheckboxInputProps['size']
  disabled?: boolean
  error?: boolean
}

export const CheckboxContext = createContext<CheckboxContextValue | null>(null)

export const useCheckboxContext = () => {
  const context = useContext(CheckboxContext)
  if (!context) {
    throw new Error('CheckboxOption must be used within CheckboxInput')
  }
  return context
}
