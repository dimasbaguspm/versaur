/**
 * Menu atoms for Versaur
 */
import { forwardRef } from 'react'
import type { MenuContentProps, MenuItemProps } from './types'

import { Button } from '@/primitive/button'
import { cn } from '@/utils'

/**
 * MenuContent: Wraps menu items
 */
export const MenuContent = forwardRef<HTMLUListElement, MenuContentProps>(
  ({ children }, ref) => {
    return (
      <ul ref={ref} className='flex flex-col gap-1'>
        {children}
      </ul>
    )
  }
)

/**
 * MenuItem: Single menu item
 */
export const MenuItem = forwardRef<HTMLLIElement, MenuItemProps>(
  ({ children, disabled, ...props }, ref) => {
    return (
      <li ref={ref} {...props}>
        <Button
          variant='ghost'
          className={cn('block text-left w-full')}
          disabled={disabled}
        >
          {children}
        </Button>
      </li>
    )
  }
)
