/**
 * Menu component (Compound + Context Pattern)
 * Follows Material Design menu principles
 */
import React, { useRef } from 'react'
import { MenuContext } from './context'
import type { MenuRootProps } from './types'
import { MenuTrigger, MenuContent, MenuItem } from './menu.atoms'
import {
  useMenuOutsideClick,
  useMenuFocusFirstItem,
  useMenuKeyboardNavigation,
} from './use-menu'

const MenuRoot: React.FC<MenuRootProps> = ({
  children,
  isOpen,
  onOutsideClick,
  size = 'md',
}) => {
  const triggerRef = useRef<HTMLButtonElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useMenuOutsideClick(isOpen, contentRef, triggerRef, onOutsideClick)
  useMenuFocusFirstItem(isOpen, contentRef)
  useMenuKeyboardNavigation(isOpen, contentRef, triggerRef, onOutsideClick)

  return (
    <MenuContext.Provider
      value={{ open: isOpen, triggerRef, contentRef, size }}
    >
      {children}
    </MenuContext.Provider>
  )
}

export const Menu = Object.assign(MenuRoot, {
  Trigger: MenuTrigger,
  Content: MenuContent,
  Item: MenuItem,
})
