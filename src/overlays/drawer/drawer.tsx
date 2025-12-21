import React, { useId } from 'react'
import { cn } from '@/utils/cn'
import { DrawerContext } from './context'
import {
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  DrawerTab,
  DrawerCloseButton,
  DrawerTitle,
} from './drawer.atoms'
import { drawerVariants } from './helpers'
import type { DrawerProps, DrawerContextValue } from './types'
import { OverlayPortal } from '@/utils/overlay-portal'
import { useBodyScrollLock } from './use-body-scroll-lock'
import { useDialogLifecycle } from './use-dialog-lifecycle'

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
  disableOverlayClickToClose = false,
  disableEscapeKeyDown = false,
  className,
  ...props
}) => {
  const titleId = useId()
  const descriptionId = useId()
  const { dialogRef, dataState } = useDialogLifecycle({ isOpen })
  useBodyScrollLock(isOpen)

  const handleDialogClose = () => {
    const dialogEl = dialogRef.current
    if (dialogEl?.open) {
      dialogEl.close()
    }
    onClose()
  }

  const handleCancel: React.DialogHTMLAttributes<HTMLDialogElement>['onCancel'] =
    event => {
      event.preventDefault()
      if (disableEscapeKeyDown) return
      handleDialogClose()
    }

  const handleClick: React.MouseEventHandler<HTMLDialogElement> = event => {
    if (event.target !== event.currentTarget) return
    if (disableOverlayClickToClose) return
    handleDialogClose()
  }

  const contextValue = {
    isOpen,
    onClose: handleDialogClose,
    position,
    size,
    disableOverlayClickToClose,
    disableEscapeKeyDown,
    titleId,
    descriptionId,
  } satisfies DrawerContextValue

  return (
    <OverlayPortal container={container}>
      <DrawerContext.Provider value={contextValue}>
        <dialog
          ref={dialogRef}
          role='dialog'
          aria-modal='true'
          aria-labelledby={titleId}
          aria-describedby={descriptionId}
          aria-hidden={!isOpen}
          data-state={dataState}
          onCancel={handleCancel}
          onClick={handleClick}
          className={cn(
            drawerVariants({
              position,
              size,
            }),
            className
          )}
          {...props}
        >
          {isOpen && children}
        </dialog>
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
