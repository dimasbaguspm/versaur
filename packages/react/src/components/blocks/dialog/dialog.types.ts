/**
 * Props for the Dialog root component
 */
export interface DialogRootProps extends React.DialogHTMLAttributes<HTMLDialogElement> {
  /** Controlled open state */
  isOpen: boolean
  /** Called when dialog should close (e.g., ESC key) */
  onOpenChange?: (isOpen: boolean) => void
  /** Dialog content */
  children: React.ReactNode
}
