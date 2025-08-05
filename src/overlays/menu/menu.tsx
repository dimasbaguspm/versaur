import React, { useRef, useId, cloneElement } from 'react'

import { cn } from '@/utils/cn'
import { menuVariants } from './helpers'
import type { MenuProps } from './types'
import { useMenuFocusFirstItem, useMenuOutsideClick } from './use-menu'

export const Menu: React.FC<MenuProps> = ({
  isOpen,
  onOutsideClick,
  size = 'md',
  content,
  children,
}) => {
  const triggerRef = useRef<HTMLButtonElement | null>(null)
  const contentRef = useRef<HTMLDivElement | null>(null)
  const menuId = useId()

  useMenuOutsideClick(isOpen, contentRef, triggerRef, onOutsideClick)
  useMenuFocusFirstItem(isOpen, contentRef)

  return (
    <div className='relative w-fit'>
      {cloneElement(children as React.ReactElement, {
        // @ts-expect-error: ref is valid for button or forwardRef components
        ref: triggerRef,
        'aria-haspopup': 'menu',
        'aria-expanded': isOpen,
        'aria-controls': menuId,
        tabIndex: 0,
      })}
      <div
        id={menuId}
        ref={contentRef}
        className={cn(menuVariants({ size, open: isOpen }))}
        role='menu'
        aria-hidden={!isOpen}
      >
        {content}
      </div>
    </div>
  )
}
