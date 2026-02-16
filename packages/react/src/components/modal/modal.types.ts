import type { DialogHTMLAttributes, ReactNode } from "react";

export type ModalCloseReason =
  | "esc"
  | "backdrop"
  | "closeButton"
  | "programmatic";

export interface ModalRootProps extends Omit<
  DialogHTMLAttributes<HTMLDialogElement>,
  "onClose"
> {
  /**
   * Whether the modal is open
   */
  open: boolean;

  /**
   * Callback when the modal closes
   * Includes the reason for closing
   */
  onClose: (reason: ModalCloseReason) => void;

  children?: ReactNode;
}

export interface ModalCloseButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
}
