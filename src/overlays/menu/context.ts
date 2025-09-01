import { createContext, useContext } from 'react'

interface MenuContextModel {
  preserve: boolean
  onClose: VoidFunction
}

const MenuContext = createContext<MenuContextModel | undefined>(undefined)

export const MenuProvider = MenuContext.Provider

export const useMenuProvider = () => {
  const context = useContext(MenuContext)
  if (!context) {
    throw new Error('useMenuProvider must be used within a MenuProvider')
  }
  return context
}
