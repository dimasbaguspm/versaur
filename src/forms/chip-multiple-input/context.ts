import { createContext, useContext } from 'react'
import type { ChipMultipleInputProps } from './types'

export interface ChipMultipleInputContextValue {
  variant: ChipMultipleInputProps['variant']
  shape?: ChipMultipleInputProps['shape']
  size?: ChipMultipleInputProps['size']
  disabled?: boolean
  error?: boolean
  name: string
  value?: string[]
  onChange?: (value: string[]) => void
}

export const ChipMultipleInputContext =
  createContext<ChipMultipleInputContextValue | null>(null)

export const useChipMultipleInputContext = () => {
  const context = useContext(ChipMultipleInputContext)
  if (!context) {
    throw new Error(
      'useChipMultipleInputContext must be used within ChipMultipleInputContext'
    )
  }
  return context
}
