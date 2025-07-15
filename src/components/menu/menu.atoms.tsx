/**
 * Menu compound atoms
 * Implements ARIA, context, and strict typing for Versaur Menu
 */
import React, { forwardRef, useId } from 'react'
import { useMenuContext } from './context'
import type { MenuTriggerProps, MenuContentProps, MenuItemProps } from './types'
import { cn } from '@/utils/cn'
import { menuVariants, menuItemVariants } from './helpers'

/**
 * MenuTrigger: Button to open/close menu
 */
export const MenuTrigger = forwardRef<HTMLButtonElement, MenuTriggerProps>(
  ({ children, ...props }, ref) => {
    const { open, triggerRef } = useMenuContext()
    return (
      <button
        ref={node => {
          triggerRef.current = node as HTMLButtonElement | null
          if (typeof ref === 'function') ref(node)
          else if (ref)
            (ref as React.MutableRefObject<HTMLButtonElement | null>).current =
              node
        }}
        aria-haspopup='menu'
        aria-expanded={open}
        aria-controls='menu-content'
        type='button'
        {...props}
      >
        {children}
      </button>
    )
  }
)

/**
 * MenuContent: Menu popup, positioned below trigger
 */
export const MenuContent = forwardRef<HTMLDivElement, MenuContentProps>(
  ({ children, className, ...props }, ref) => {
    const { open, contentRef, triggerRef, size } = useMenuContext()
    const menuId = useId()

    // Calculate position below trigger
    let top = 0
    let left = 0
    if (triggerRef.current) {
      const rect = triggerRef.current.getBoundingClientRect()
      top = rect.bottom + window.scrollY + 4 // Add 4px gap from the top
      left = rect.left + window.scrollX
    }

    return (
      <div
        ref={node => {
          contentRef.current = node as HTMLDivElement | null
          if (typeof ref === 'function') ref(node)
          else if (ref)
            (ref as React.MutableRefObject<HTMLDivElement | null>).current =
              node
        }}
        id={`menu-content-${menuId}`}
        role='menu'
        tabIndex={-1}
        aria-hidden={!open}
        className={cn(
          menuVariants({
            size,
          }),
          'absolute z-50 transition-opacity duration-150 ease-out',
          open ? 'opacity-100' : 'opacity-0',
          className
        )}
        style={{
          minWidth: triggerRef.current?.offsetWidth,
          top,
          left,
        }}
        {...props}
      >
        {open && children}
      </div>
    )
  }
)

/**
 * MenuItem: Single menu option
 */
export const MenuItem = forwardRef<HTMLButtonElement, MenuItemProps>(
  ({ children, disabled, className, ...props }, ref) => {
    const { size } = useMenuContext()
    return (
      <button
        ref={ref}
        role='menuitem'
        tabIndex={0} // Make menu items tabbable for native Tab navigation
        disabled={disabled}
        aria-disabled={disabled}
        className={cn(
          menuItemVariants({
            size,
          }),
          className
        )}
        {...props}
      >
        {children}
      </button>
    )
  }
)
