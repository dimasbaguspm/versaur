import { createContext, useContext } from 'react'
import type { RadioInputProps } from './types'

interface RadioInputContextValue {
  variant: RadioInputProps['variant']
  size: RadioInputProps['size']
  disabled?: boolean
  error?: boolean
  name: string
}

export const RadioInputContext = createContext<RadioInputContextValue | null>(
  null
)

export const useRadioInputContext = () => {
  const context = useContext(RadioInputContext)
  if (!context) {
    throw new Error(
      'useRadioInputContext must be used within RadioInputContext'
    )
  }
  return context
}
