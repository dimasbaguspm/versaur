import type { DialogHTMLAttributes, ReactNode } from "react";

export interface ModalRootProps extends Omit<DialogHTMLAttributes<HTMLDialogElement>, "onClose"> {
  /**
   * Whether the modal is open - controlled state
   */
  open: boolean;

  /**
   * Callback when modal closes
   */
  onOpenChange?: (open: boolean) => void;

  children?: ReactNode;
}

export interface ModalCloseButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
}
