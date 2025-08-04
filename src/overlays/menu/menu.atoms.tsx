/**
 * Menu atoms for Versaur
 */
import { forwardRef } from 'react'
import type { MenuContentProps, MenuItemProps } from './types'
import { cn } from '@/utils/cn'
import { menuItemVariants } from './helpers'

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
  ({ className, ...props }, ref) => {
    return (
      <li ref={ref}>
        <button
          className={cn(menuItemVariants(), className)}
          tabIndex={-1}
          role='menuitem'
          {...props}
        />
      </li>
    )
  }
)
