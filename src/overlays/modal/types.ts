import type { HTMLAttributes } from 'react'

/**
 * Modal component prop types
 */
export type ModalSize = 'sm' | 'md' | 'lg' | 'fit-content'
export type ModalPlacement = 'top' | 'center'

/**
 * Modal compound root
 */

export interface ModalRootProps {
  /** Controls whether the modal is open */
  isOpen: boolean
  /** Called when modal requests to close (ESC, overlay click) */
  onOpenChange?: (open: boolean) => void
  /** Modal size variant */
  size?: ModalSize
  /** Modal placement variant */
  placement?: ModalPlacement
  /** Children (Modal compound parts) */
  children: React.ReactNode
  /** Optional: disables closing on overlay click */
  disableOverlayClose?: boolean
  /** Optional: disables closing on ESC key */
  disableEscClose?: boolean
  /** Optional: ARIA label for dialog */
  'aria-label'?: string
  /** Optional: ARIA labelledby for dialog */
  'aria-labelledby'?: string
  /** Optional: ARIA describedby for dialog */
  'aria-describedby'?: string
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

export interface ModalOverlayProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  placement?: string
  onOverlayClick?: (e: React.MouseEvent<HTMLDivElement>) => void
}
