import type { OverlayPortalProps } from '@/utils/overlay-portal'
import type { HTMLAttributes, ReactNode } from 'react'

/**
 * Modal component prop types
 */
export type ModalSize = 'sm' | 'md' | 'lg' | 'fit-content'
export type ModalPlacement = 'top' | 'center'

/**
 * Context for the Modal compound component
 * Provides shared state and functions across all modal sub-components
 */
export interface ModalContextValue {
  /** Controls whether the modal is open */
  isOpen: boolean
  /** Function to close the modal */
  onClose: () => void
  /** Modal size variant */
  size: ModalSize
  /** Modal placement variant */
  placement: ModalPlacement
  /** Whether to disable overlay click to close */
  disableOverlayClickToClose: boolean
  /** Whether to disable escape key down */
  disableEscapeKeyDown: boolean
}

/**
 * Modal compound root
 */

export interface ModalRootProps
  extends Omit<HTMLAttributes<HTMLDialogElement>, 'onClose' | 'children'>,
    OverlayPortalProps,
    Partial<Omit<ModalContextValue, 'isOpen' | 'onClose'>>,
    Pick<ModalContextValue, 'isOpen' | 'onClose'> {
  /** Children (Modal compound parts) */
  children: ReactNode
}

/**
 * Props for Modal.Header, Modal.Footer
 */
export interface ModalHeaderProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}
export interface ModalFooterProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}
export interface ModalBodyProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}
