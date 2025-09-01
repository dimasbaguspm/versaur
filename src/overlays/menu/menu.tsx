import React, { useRef, useId, cloneElement } from 'react'

import { cn } from '@/utils/cn'
import { menuVariants } from './helpers'
import type { MenuProps } from './types'
import {
  useMenuOutsideClick,
  useMenuPosition,
  useMenuEscapeClose,
} from './use-menu'
import { MenuContent, MenuItem } from './menu.atoms'

const MenuRoot: React.FC<MenuProps> = ({
  isOpen,
  onOutsideClick,
  size = 'md',
  content,
  children,
  placement = 'bottom-start',
  container,
}) => {
  const triggerRef = useRef<HTMLButtonElement | null>(null)
  const contentRef = useRef<HTMLDivElement | null>(null)
  const menuId = useId()

  useMenuOutsideClick(isOpen, contentRef, triggerRef, onOutsideClick)
  useMenuEscapeClose(isOpen, onOutsideClick)

  const position = useMenuPosition(
    isOpen,
    triggerRef,
    contentRef,
    placement,
    container
  )

  const positionStyles: React.CSSProperties = {
    ...position,
    overflowY: position.maxHeight ? 'auto' : undefined,
    overflowX: position.maxWidth ? 'auto' : undefined,
  }

  return (
    <div className='relative w-fit'>
      {cloneElement(children as React.ReactElement, {
        // @ts-expect-error: ref is valid for button or forwardRef components
        ref: triggerRef,
        'aria-haspopup': 'menu',
        'aria-expanded': isOpen,
        'aria-controls': menuId,
      })}
      {isOpen && (
        <div
          id={menuId}
          ref={contentRef}
          className={cn(menuVariants({ size, open: isOpen }))}
          style={positionStyles}
          role='menu'
          aria-hidden={!isOpen}
        >
          {content}
        </div>
      )}
    </div>
  )
}

export const Menu = Object.assign(MenuRoot, {
  Content: MenuContent,
  Item: MenuItem,
})
