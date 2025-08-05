import React from 'react'
import { cn } from '@/utils/cn'
import { ModalContext, type ModalContextValue } from './context'
import {
  ModalHeader,
  ModalFooter,
  ModalOverlay,
  ModalBody,
} from './modal.atoms'
import { modalContentVariants } from './helpers'
import { useEscapeClose } from '@/utils/use-escape-close'
import type { ModalRootProps } from './types'

/**
 * ModalRoot - A controlled modal overlay component
 * Provides shared state and context for modal compound parts
 */
export const ModalRoot: React.FC<ModalRootProps> = ({
  isOpen,
  onClose,
  size = 'md',
  placement = 'center',
  children,
  ...props
}) => {
  const contextValue = {
    isOpen,
    onClose,
    size,
    placement,
  } satisfies ModalContextValue

  const modalContentRef = useEscapeClose(isOpen, onClose)

  return (
    <ModalContext.Provider value={contextValue}>
      <div
        className={cn(
          'fixed z-50 inset-0 pointer-events-none',
          isOpen && 'pointer-events-auto'
        )}
      >
        <ModalOverlay />
        <div
          ref={modalContentRef}
          className={cn(modalContentVariants({ size, placement, isOpen }))}
          role='dialog'
          tabIndex={-1}
          aria-hidden={!isOpen}
          {...props}
        >
          {children}
        </div>
      </div>
    </ModalContext.Provider>
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
