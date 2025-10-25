/**
 * Context for SideBar state management
 */
import { createContext, useContext } from 'react'
import type { SideBarContextValue } from './types'

export const SideBarContext = createContext<SideBarContextValue | null>(null)

export const useSideBarContext = () => {
  const context = useContext(SideBarContext)
  if (!context) {
    throw new Error('SideBar compound components must be used within SideBar')
  }
  return context
}
