import { createContext, useContext } from 'react'
import type { DrawerContextValue } from './types'

/**
 * Context for the Drawer compound component
 * Provides shared state and functions across all drawer sub-components
 */
export const DrawerContext = createContext<DrawerContextValue | null>(null)

/**
 * Hook to access drawer context
 * Throws an error if used outside of a DrawerRoot component
 */
export function useDrawerContext(): DrawerContextValue {
  const context = useContext(DrawerContext)

  if (!context) {
    throw new Error(
      'Drawer components must be used within a DrawerRoot component'
    )
  }

  return context
}
