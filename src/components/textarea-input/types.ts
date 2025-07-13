import type { TextareaHTMLAttributes, ReactNode } from 'react'

/**
 * Props for the TextAreaInput component
 */
export interface TextAreaInputProps
  extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'size'> {
  /**
   * Visual style variant supporting Versaur color system
   * Core variants: primary (coral), secondary (sage), tertiary (mist), ghost (slate), neutral (light gray)
   * Semantic variants: success, info, warning, danger
   * Each variant supports outline form for flexible design expression
   */
  variant?:
    | 'primary'
    | 'primary-outline'
    | 'secondary'
    | 'secondary-outline'
    | 'tertiary'
    | 'tertiary-outline'
    | 'ghost'
    | 'ghost-outline'
    | 'neutral'
    | 'neutral-outline'
    | 'success'
    | 'success-outline'
    | 'info'
    | 'info-outline'
    | 'warning'
    | 'warning-outline'
    | 'danger'
    | 'danger-outline'
  /**
   * Label text to display above the textarea
   */
  label: ReactNode
  /**
   * Helper text to display below the textarea
   */
  helperText?: ReactNode
  /**
   * Error message for invalid state
   */
  error?: ReactNode
  /**
   * Minimum number of rows for the textarea
   */
  minRows?: number
  /**
   * Maximum number of rows for the textarea
   * Only applies when fieldSizing is 'fixed'
   */
  maxRows?: number
  /**
   * Enable field-sizing CSS property for auto-resizing
   * 'content' - Auto-resize to fit content (ignores maxRows)
   * 'fixed' - Fixed size with manual resize handle (respects minRows/maxRows)
   */
  fieldSizing?: 'content' | 'fixed'
}
