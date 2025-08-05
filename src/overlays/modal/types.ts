import type { OverlayPortalProps } from '@/utils/overlay-portal'
import type { HTMLAttributes, ReactNode } from 'react'

/**
 * Modal component prop types
 */
export type ModalSize = 'sm' | 'md' | 'lg' | 'fit-content'
export type ModalPlacement = 'top' | 'center'

/**
 * Modal compound root
 */

export interface ModalRootProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'children'>,
    OverlayPortalProps {
  /** Controls whether the modal is open */
  isOpen: boolean
  /** Function to close the modal */
  onClose: () => void
  /** Modal size variant */
  size?: ModalSize
  /** Modal placement variant */
  placement?: ModalPlacement
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

export type ModalOverlayProps = Omit<HTMLAttributes<HTMLDivElement>, 'children'>
