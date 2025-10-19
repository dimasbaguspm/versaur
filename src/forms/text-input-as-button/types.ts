import type { ButtonHTMLAttributes, ReactNode } from 'react'

/**
 * Props for the TextInputAsButton component
 */
export interface TextInputAsButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'value'> {
  /**
   * Label text to display above the button
   */
  label?: ReactNode
  /**
   * Optional content to display inside the button (left)
   */
  leftContent?: ReactNode
  /**
   * Optional content to display inside the button (right)
   */
  rightContent?: ReactNode
  /**
   * Helper text to display below the button
   */
  helperText?: ReactNode
  /**
   * Error message for invalid state
   */
  error?: ReactNode
  /**
   * Display value to show in the button
   */
  value?: string
  /**
   * Placeholder text when no value is present
   */
  placeholder?: string
  /**
   * Whether the field is required
   */
  required?: boolean
  /**
   * Name attribute for the hidden input
   */
  name?: string
  /**
   * ID for the component
   */
  id?: string
}
