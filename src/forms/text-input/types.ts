import type { InputHTMLAttributes, ReactNode } from 'react'

/**
 * Props for the TextInput component
 */
export interface TextInputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
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
