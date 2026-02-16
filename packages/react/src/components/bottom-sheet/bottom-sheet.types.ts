import type { DialogHTMLAttributes, ReactNode } from "react";

export type BottomSheetCloseReason =
  | "esc"
  | "backdrop"
  | "closeButton"
  | "programmatic";

export interface BottomSheetRootProps extends Omit<
  DialogHTMLAttributes<HTMLDialogElement>,
  "onClose"
> {
  /**
   * Whether the bottom sheet is open
   */
  open: boolean;

  /**
   * Callback when the bottom sheet closes
   * Includes the reason for closing
   */
  onClose: (reason: BottomSheetCloseReason) => void;

  children?: ReactNode;
}

export interface BottomSheetCloseButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
}
