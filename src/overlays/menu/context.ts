import { createContext, useContext } from 'react'
import type { MenuSize } from './types'

export interface MenuContextValue {
  /** Whether the menu is open (controlled externally) */
  open: boolean
  /** Ref to the trigger button */
  triggerRef: React.RefObject<HTMLSpanElement | null>
  /** Ref to the menu content */
  contentRef: React.RefObject<HTMLDivElement | null>
  /** Menu size variant */
  size: MenuSize
}

export const MenuContext = createContext<MenuContextValue | null>(null)

export const useMenuContext = (): MenuContextValue => {
  const context = useContext(MenuContext)
  if (!context) {
    throw new Error('useMenuContext must be used within a Menu component')
  }
  return context
}
