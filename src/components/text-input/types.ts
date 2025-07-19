import type { InputHTMLAttributes, ReactNode } from 'react'

/**
 * Props for the TextInput component
 */
export interface TextInputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
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
   * Label text to display above the input
   */
  label?: ReactNode
  /**
   * Optional content to display inside the input (left)
   */
  leftContent?: ReactNode
  /**
   * Optional content to display inside the input (right)
   */
  rightContent?: ReactNode
  /**
   * Helper text to display below the input
   */
  helperText?: ReactNode
  /**
   * Error message for invalid state
   */
  error?: ReactNode
}
