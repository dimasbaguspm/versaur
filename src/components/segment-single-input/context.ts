import { createContext, useContext } from 'react'
import type { SegmentSingleInputProps } from './types'

export interface SegmentSingleInputContextValue {
  variant: SegmentSingleInputProps['variant']
  size: SegmentSingleInputProps['size']
  disabled?: boolean
  error?: boolean
  name: string
  value?: string | null
  onChange?: (value: string | null) => void
}

export const SegmentSingleInputContext =
  createContext<SegmentSingleInputContextValue | null>(null)

export const useSegmentSingleInputContext = () => {
  const context = useContext(SegmentSingleInputContext)
  if (!context) {
    throw new Error(
      'useSegmentSingleInputContext must be used within SegmentSingleInputContext'
    )
  }
  return context
}
