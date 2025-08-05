import { createContext, useContext } from 'react'
import type { ModalRootProps } from './types'

/**
 * Context for the Modal compound component
 * Provides shared state and functions across all modal sub-components
 */
export interface ModalContextValue {
  isOpen: boolean
  onClose: () => void
  size?: ModalRootProps['size']
  placement?: ModalRootProps['placement']
}

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
