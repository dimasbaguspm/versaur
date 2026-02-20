import type { Modal as ModalCore } from "@versaur/core/blocks"
import type { DialogHTMLAttributes, ReactNode } from "react"

export interface ModalRootProps extends Omit<DialogHTMLAttributes<HTMLDialogElement>, "onClose"> {
  /**
   * Whether the modal is open - controlled state
   */
  open: boolean

  /**
   * Callback when modal closes
   */
  onOpenChange?: (open: boolean) => void

  /**
   * Width preset
   * @default undefined — uses base 600px width
   */
  size?: ModalCore.Size

  /**
   * Vertical position within the viewport
   * @default 'center'
   */
  position?: ModalCore.Position

  children?: ReactNode
}

export interface ModalHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Optional action element (e.g., close button) to display in header
   */
  action?: ReactNode
  children?: ReactNode
}

export interface ModalFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Footer content alignment
   * @default 'end'
   */
  align?: "start" | "center" | "end"
  children?: ReactNode
}

export interface ModalCloseButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode
}
