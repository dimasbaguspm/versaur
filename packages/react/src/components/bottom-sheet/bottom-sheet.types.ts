import type { DialogHTMLAttributes, ReactNode } from "react"

export interface BottomSheetRootProps extends Omit<DialogHTMLAttributes<HTMLDialogElement>, "onClose"> {
  /**
   * Whether the bottom sheet is open - controlled state
   */
  open: boolean

  /**
   * Callback when bottom sheet closes
   */
  onOpenChange?: (open: boolean) => void

  children?: ReactNode
}

export interface BottomSheetCloseButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode
}
