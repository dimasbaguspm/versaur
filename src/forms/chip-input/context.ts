import { createContext, useContext } from 'react'
import type { ChipInputProps } from './types'

export interface ChipInputContextValue {
  variant: ChipInputProps['variant']
  disabled?: boolean
  error?: boolean
  name: string
  value?: string[]
  onChange?: (value: string[]) => void
}

export const ChipInputContext = createContext<ChipInputContextValue | null>(
  null
)

export const useChipInputContext = () => {
  const context = useContext(ChipInputContext)
  if (!context) {
    throw new Error('useChipInputContext must be used within ChipInputContext')
  }
  return context
}
