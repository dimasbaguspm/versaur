import React from 'react'
import { cn } from '@/utils/cn'
import { useDrawerContext } from './context'
import {
  drawerOverlayVariants,
  drawerHeaderVariants,
  drawerBodyVariants,
  drawerFooterVariants,
} from './helpers'
import type {
  DrawerHeaderProps,
  DrawerBodyProps,
  DrawerFooterProps,
  DrawerOverlayProps,
} from './types'

/**
 * DrawerOverlay - Background overlay that appears behind the drawer
 * Always provides a dark blurred background to help users focus on the drawer content
 */
export const DrawerOverlay = React.forwardRef<
  HTMLDivElement,
  DrawerOverlayProps
>(({ className, ...props }, ref) => {
  const { isOpen, onClose } = useDrawerContext()

  const handleClick = () => {
    onClose()
  }

  return (
    <div
      ref={ref}
      onClick={handleClick}
      className={cn(
        drawerOverlayVariants({
          state: isOpen ? 'open' : 'closed',
        }),
        className
      )}
      {...props}
    />
  )
})

/**
 * DrawerHeader - Header section of the drawer
 * Typically contains the title and close button
 */
export const DrawerHeader = React.forwardRef<HTMLDivElement, DrawerHeaderProps>(
  ({ children, className, ...props }, ref) => {
    const { variant } = useDrawerContext()

    return (
      <div
        ref={ref}
        className={cn(drawerHeaderVariants({ variant }), className)}
        {...props}
      >
        {children}
      </div>
    )
  }
)

/**
 * DrawerBody - Main content area of the drawer
 * Scrollable container for the drawer content
 */
export const DrawerBody = React.forwardRef<HTMLDivElement, DrawerBodyProps>(
  ({ children, className, ...props }, ref) => {
    const { variant } = useDrawerContext()

    return (
      <div
        ref={ref}
        className={cn(drawerBodyVariants({ variant }), className)}
        {...props}
      >
        {children}
      </div>
    )
  }
)

/**
 * DrawerFooter - Footer section of the drawer
 * Typically contains action buttons
 * Supports responsive flex behavior for optimal button layout across screen sizes
 */
export const DrawerFooter = React.forwardRef<HTMLDivElement, DrawerFooterProps>(
  ({ children, className, responsiveFlex = true, ...props }, ref) => {
    const { variant } = useDrawerContext()

    return (
      <div
        ref={ref}
        className={cn(
          drawerFooterVariants({ variant, responsiveFlex }),
          className
        )}
        {...props}
      >
        {children}
      </div>
    )
  }
)
