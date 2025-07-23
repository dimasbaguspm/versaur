// Tabs context for compound/context pattern
import { createContext, useContext } from 'react'
import type { TabsContextValue } from './types'

export const TabsContext = createContext<TabsContextValue | null>(null)

export const useTabsContext = () => {
  const context = useContext(TabsContext)
  if (!context) {
    throw new Error('useTabsContext must be used within a TabsProvider')
  }
  return context
}
