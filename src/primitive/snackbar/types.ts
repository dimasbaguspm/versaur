import type { ReactNode, HTMLAttributes } from 'react'

/**
 * SnackbarTextProps: Props for SnackbarText atom
 */
export interface SnackbarTextProps extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode
}

/**
 * SnackbarActionProps: Props for SnackbarAction atom
 */
export interface SnackbarActionProps extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode
}

/**
 * SnackbarProps defines the props for the Snackbar component
 * @property children - Message content for the snackbar
 * @property action - Optional action element (e.g., button)
 * @property onClose - Handler for closing the snackbar
 * @property color - Color variant based on Versaur color system
 * @property className - Additional CSS classes
 */
export interface SnackbarProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Message content for the snackbar
   */
  children: ReactNode
  /**
   * Optional action element (e.g., button)
   */
  action?: ReactNode
  /**
   * Handler for closing the snackbar
   */
  onClose?: () => void
  /**
   * Color variant based on Versaur color system
   * -  success, info, warning, danger
   */
  color?: 'success' | 'info' | 'warning' | 'danger'
}
