import React, { forwardRef, type MouseEventHandler } from 'react'
import { XIcon } from 'lucide-react'
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
  DrawerHeaderTabProps,
} from './types'
import {
  ButtonIcon,
  Text,
  type ButtonIconProps,
  type TextProps,
} from '@/primitive'

/**
 * DrawerOverlay - Background overlay that appears behind the drawer
 * Always provides a dark blurred background to help users focus on the drawer content
 */
export const DrawerOverlay = React.forwardRef<
  HTMLDivElement,
  DrawerOverlayProps
>(({ className, ...props }, ref) => {
  const { isOpen, disableOverlayClickToClose, onClose } = useDrawerContext()

  const handleClick = () => {
    if (disableOverlayClickToClose) return
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
  ({ children, className, hasTab, ...props }, ref) => {
    const { variant } = useDrawerContext()

    return (
      <div
        ref={ref}
        className={cn(
          drawerHeaderVariants({ variant, tab: Boolean(hasTab) }),
          className
        )}
        {...props}
      >
        {children}
      </div>
    )
  }
)

export const DrawerTitle = forwardRef<HTMLElement, TextProps>((props, ref) => {
  return <Text {...props} ref={ref} as='h3' fontSize='lg' />
})

export const DrawerCloseButton = forwardRef<
  HTMLButtonElement,
  Partial<ButtonIconProps>
>(({ onClick, ...props }, ref) => {
  const { onClose } = useDrawerContext()

  const handleOnClick: MouseEventHandler<HTMLButtonElement> = ev => {
    onClose()
    onClick?.(ev)
  }

  return (
    <ButtonIcon
      aria-label='Close drawer'
      {...props}
      onClick={handleOnClick}
      variant='ghost'
      size='sm'
      as={XIcon}
      ref={ref}
    />
  )
})

export const DrawerTab = forwardRef<HTMLDivElement, DrawerHeaderTabProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <div ref={ref} className={cn('[&>div]:px-6', className)} {...props}>
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
  ({ children, className, ...props }, ref) => {
    const { variant } = useDrawerContext()

    return (
      <div
        ref={ref}
        className={cn(drawerFooterVariants({ variant }), className)}
        {...props}
      >
        {children}
      </div>
    )
  }
)
