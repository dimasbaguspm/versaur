import { createContext, useContext } from 'react'
import type { ChipSingleInputProps } from './types'

export interface ChipSingleInputContextValue {
  variant: ChipSingleInputProps['variant']
  shape?: ChipSingleInputProps['shape']
  size?: ChipSingleInputProps['size']
  disabled?: boolean
  error?: boolean
  name: string
  value?: string
  onChange?: (value: string) => void
}

export const ChipSingleInputContext =
  createContext<ChipSingleInputContextValue | null>(null)

export const useChipSingleInputContext = () => {
  const context = useContext(ChipSingleInputContext)
  if (!context) {
    throw new Error(
      'useChipSingleInputContext must be used within ChipSingleInputContext'
    )
  }
  return context
}
