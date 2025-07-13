import React, { useCallback, useEffect } from 'react'
import { cn } from '@/utils/cn'
import { DrawerContext } from './context'
import {
  DrawerOverlay,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
} from './drawer.atoms'
import { drawerVariants } from './helpers'
import type { DrawerProps, DrawerContextValue } from './types'

/**
 * Drawer - A controlled sliding drawer overlay component
 * Provides additional space for content with positioning, sizing, and glass variant options
 */
export const DrawerRoot: React.FC<DrawerProps> = ({
  children,
  isOpen,
  onClose,
  position = 'right',
  size = 'md',
  variant = 'default',
  className,
  ...props
}) => {
  const handleClose = useCallback(() => {
    onClose(false)
  }, [onClose])

  const contextValue: DrawerContextValue = {
    isOpen,
    onClose: handleClose,
    position,
    size,
    variant,
  }

  // Handle escape key to close drawer
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        handleClose()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, handleClose])

  return (
    <DrawerContext.Provider value={contextValue}>
      <div
        className={cn(
          'fixed z-50 inset-0 pointer-events-none',
          isOpen && 'pointer-events-auto'
        )}
      >
        <DrawerOverlay />
        <div
          role={isOpen ? 'dialog' : undefined}
          aria-modal={isOpen ? 'true' : undefined}
          className={cn(
            drawerVariants({
              position,
              size,
              variant,
            }),
            // Apply closed transform when not open
            !isOpen && position === 'left' && '-translate-x-full',
            !isOpen && position === 'right' && 'translate-x-full',
            className
          )}
          {...props}
        >
          {isOpen && children}
        </div>
      </div>
    </DrawerContext.Provider>
  )
}

/**
 * Drawer - Compound component with sub-components attached
 * Provides a convenient API for using the drawer with all its parts
 */
export const Drawer = Object.assign(DrawerRoot, {
  Header: DrawerHeader,
  Body: DrawerBody,
  Footer: DrawerFooter,
})
