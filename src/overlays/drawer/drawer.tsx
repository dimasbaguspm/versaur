import React, { useId } from 'react'
import { cn } from '@/utils/cn'
import { DrawerContext } from './context'
import {
  DrawerOverlay,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  DrawerTab,
  DrawerCloseButton,
  DrawerTitle,
} from './drawer.atoms'
import { drawerVariants } from './helpers'
import { useEscapeClose } from '@/utils/use-escape-close'
import type { DrawerProps, DrawerContextValue } from './types'
import { OverlayPortal } from '@/utils/overlay-portal'

/**
 * DrawerRoot - A controlled sliding drawer overlay component
 * Provides additional space for content with positioning and sizing options
 */
export const DrawerRoot: React.FC<DrawerProps> = ({
  container,
  children,
  isOpen,
  onClose,
  position = 'right',
  size = 'md',
  transitionType = 'slide',
  disableOverlayClickToClose = false,
  disableEscapeKeyDown = false,
  className,
  ...props
}) => {
  const titleId = useId()
  const descriptionId = useId()

  const contextValue = {
    isOpen,
    onClose,
    position,
    size,
    transitionType,
    disableOverlayClickToClose,
    disableEscapeKeyDown,
    titleId,
    descriptionId,
  } satisfies DrawerContextValue

  const drawerRef = useEscapeClose(isOpen, onClose, disableEscapeKeyDown)

  return (
    <OverlayPortal container={container}>
      <DrawerContext.Provider value={contextValue}>
        <div
          className={cn(
            'fixed z-50 inset-0 pointer-events-none',
            isOpen && 'pointer-events-auto'
          )}
        >
          <DrawerOverlay />
          <div
            ref={drawerRef}
            role='dialog'
            tabIndex={-1}
            aria-modal='true'
            aria-labelledby={titleId}
            aria-describedby={descriptionId}
            aria-hidden={!isOpen}
            className={cn(
              drawerVariants({
                position,
                size,
                transitionType,
              }),
              transitionType === 'slide'
                ? [
                    !isOpen && position === 'left' && '-translate-x-full',
                    !isOpen && position === 'right' && 'translate-x-full',
                  ]
                : [
                    'left-0 right-0 top-0 bottom-0',
                    isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none',
                  ],
              className
            )}
            {...props}
          >
            {isOpen && children}
          </div>
        </div>
      </DrawerContext.Provider>
    </OverlayPortal>
  )
}

/**
 * Drawer - Compound component with sub-components attached
 * Provides a convenient API for using the drawer with all its parts
 */
export const Drawer = Object.assign(DrawerRoot, {
  Header: DrawerHeader,
  Title: DrawerTitle,
  CloseButton: DrawerCloseButton,
  Tab: DrawerTab,
  Body: DrawerBody,
  Footer: DrawerFooter,
})
