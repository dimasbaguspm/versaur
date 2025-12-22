import React from 'react'
import { cn } from '@/utils/cn'
import { ModalContext } from './context'
import { ModalHeader, ModalFooter, ModalBody } from './modal.atoms'
import { modalContentVariants } from './helpers'
import type { ModalContextValue, ModalRootProps } from './types'
import { OverlayPortal } from '@/utils/overlay-portal'
import { useDialogLifecycle } from '@/utils/use-dialog-lifecycle'
import { useBodyScrollLock } from '@/utils/use-body-scroll-lock'

/**
 * ModalRoot - A controlled modal overlay component
 * Provides shared state and context for modal compound parts
 */
export const ModalRoot: React.FC<ModalRootProps> = ({
  isOpen,
  onClose,
  size = 'md',
  placement = 'center',
  disableOverlayClickToClose = false,
  disableEscapeKeyDown = false,
  children,
  container,
  ...props
}) => {
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
    size,
    placement,
    disableOverlayClickToClose,
    disableEscapeKeyDown,
  } satisfies ModalContextValue

  return (
    <OverlayPortal container={container}>
      <ModalContext.Provider value={contextValue}>
        <dialog
          ref={dialogRef}
          role='dialog'
          aria-modal='true'
          aria-hidden={!isOpen}
          data-state={dataState}
          onCancel={handleCancel}
          onClick={handleClick}
          className={cn(
            modalContentVariants({ size, placement, isOpen }),
            props.className
          )}
          {...props}
        >
          {isOpen && children}
        </dialog>
      </ModalContext.Provider>
    </OverlayPortal>
  )
}

/**
 * Modal - Compound component with sub-components attached
 * Provides a convenient API for using the modal with all its parts
 */
export const Modal = Object.assign(ModalRoot, {
  Header: ModalHeader,
  Body: ModalBody,
  Footer: ModalFooter,
})
