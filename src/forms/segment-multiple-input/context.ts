import { createContext, useContext } from 'react'
import type { SegmentMultipleInputProps } from './types'

export interface SegmentMultipleInputContextValue {
  variant: SegmentMultipleInputProps['variant']
  size: SegmentMultipleInputProps['size']
  disabled?: boolean
  error?: boolean
  name: string
  value?: string[]
  onChange?: (value: string[]) => void
}

export const SegmentMultipleInputContext =
  createContext<SegmentMultipleInputContextValue | null>(null)

export const useSegmentMultipleInputContext = () => {
  const context = useContext(SegmentMultipleInputContext)
  if (!context) {
    throw new Error(
      'useSegmentMultipleInputContext must be used within SegmentMultipleInputContext'
    )
  }
  return context
}
