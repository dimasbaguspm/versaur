import { createContext, useContext } from 'react'
import type { ModalContextValue } from './types'

export const ModalContext = createContext<ModalContextValue | null>(null)

/**
 * Hook to access modal context
 * Throws an error if used outside of a ModalRoot component
 */
export function useModalContext(): ModalContextValue {
  const context = useContext(ModalContext)
  if (!context) {
    throw new Error(
      'Modal components must be used within a ModalRoot component'
    )
  }
  return context
}
