import React, { useRef, useId, cloneElement } from 'react'

import { cn } from '@/utils/cn'
import { Popover } from '@/utils/popover'
import { menuVariants } from './helpers'
import type { MenuProps } from './types'
import { MenuContent, MenuItem } from './menu.atoms'
import { MenuProvider } from './context'

const MenuRoot: React.FC<MenuProps> = ({
  isOpen,
  onClose,
  size = 'md',
  content,
  children,
  placement = 'bottom',
  gap = 4,
  preserve,
}) => {
  const triggerRef = useRef<HTMLElement | null>(null)
  const menuId = useId()

  return (
    <MenuProvider value={{ onClose, preserve: Boolean(preserve) }}>
      <div className='relative w-fit'>
        {cloneElement(children as React.ReactElement, {
          // @ts-expect-error: ref is valid for button or forwardRef components
          ref: triggerRef,
        })}
        <Popover
          id={menuId}
          triggerRef={triggerRef}
          isOpen={isOpen}
          onClose={onClose}
          placement={placement}
          gap={gap}
          maxWidth='sm'
          className={cn(menuVariants({ size, open: isOpen }))}
        >
          {content}
        </Popover>
      </div>
    </MenuProvider>
  )
}

export const Menu = Object.assign(MenuRoot, {
  Content: MenuContent,
  Item: MenuItem,
})
