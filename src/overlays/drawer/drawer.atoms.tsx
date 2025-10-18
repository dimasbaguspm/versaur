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
 * Provides a dark blurred background to help users focus on the drawer content
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
      aria-hidden='true'
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

DrawerOverlay.displayName = 'DrawerOverlay'

/**
 * DrawerHeader - Header section of the drawer
 * Uses semantic <header> element with proper ARIA labeling
 */
export const DrawerHeader = React.forwardRef<HTMLElement, DrawerHeaderProps>(
  ({ children, className, hasTab, ...props }, ref) => {
    return (
      <header
        ref={ref}
        className={cn(
          drawerHeaderVariants({ tab: Boolean(hasTab) }),
          className
        )}
        {...props}
      >
        {children}
      </header>
    )
  }
)

DrawerHeader.displayName = 'DrawerHeader'

/**
 * DrawerTitle - Title element for the drawer header
 * Automatically uses the titleId from context for ARIA labeling
 */
export const DrawerTitle = forwardRef<HTMLElement, TextProps>((props, ref) => {
  const { titleId } = useDrawerContext()

  return <Text {...props} ref={ref} as='h3' fontSize='lg' id={titleId} />
})

DrawerTitle.displayName = 'DrawerTitle'

/**
 * DrawerCloseButton - Close button for the drawer
 * Triggers the onClose callback when clicked
 */
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

DrawerCloseButton.displayName = 'DrawerCloseButton'

/**
 * DrawerTab - Container for tabbed navigation within drawer header
 */
export const DrawerTab = forwardRef<HTMLDivElement, DrawerHeaderTabProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn('[&>nav>div>ul]:px-6', className)}
        {...props}
      >
        {children}
      </div>
    )
  }
)

DrawerTab.displayName = 'DrawerTab'

/**
 * DrawerBody - Main content area of the drawer
 * Uses semantic <main> element and scrollable container
 */
export const DrawerBody = React.forwardRef<HTMLElement, DrawerBodyProps>(
  ({ children, className, ...props }, ref) => {
    const { descriptionId } = useDrawerContext()

    return (
      <main
        ref={ref}
        id={descriptionId}
        className={cn(drawerBodyVariants(), className)}
        {...props}
      >
        {children}
      </main>
    )
  }
)

DrawerBody.displayName = 'DrawerBody'

/**
 * DrawerFooter - Footer section of the drawer
 * Uses semantic <footer> element for action buttons
 */
export const DrawerFooter = React.forwardRef<HTMLElement, DrawerFooterProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <footer
        ref={ref}
        className={cn(drawerFooterVariants(), className)}
        {...props}
      >
        {children}
      </footer>
    )
  }
)

DrawerFooter.displayName = 'DrawerFooter'
