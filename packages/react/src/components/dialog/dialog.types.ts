/**
 * Props for the Dialog root component
 */
export interface DialogRootProps {
  /** Unique identifier for the dialog */
  id: string;
  /** Controlled open state */
  isOpen: boolean;
  /** Called when dialog should close (e.g., ESC key) */
  onOpenChange?: (isOpen: boolean) => void;
  /** Dialog content */
  children: React.ReactNode;
  /** Optional additional dialog HTML attributes */
  dialogProps?: React.DialogHTMLAttributes<HTMLDialogElement>;
}

/**
 * Props for dialog trigger elements (buttons that open dialogs)
 */
export interface DialogTriggerProps {
  /** Dialog ID to open */
  "data-dialog-id"?: string;
  /** Type of button */
  type: "button";
  onClick: () => void;
}
