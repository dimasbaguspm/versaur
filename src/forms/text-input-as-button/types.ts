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
   * Actual value to store in the hidden input (can be any serializable type)
   * Used for form submission when name is provided
   * This is NOT displayed to the user - use displayValue for that
   */
  value?: string | number | boolean | string[] | number[] | object
  /**
   * Display value to show in the button UI
   * This is what the user sees in the button
   * If not provided or empty, placeholder will be shown instead
   */
  displayValue?: string
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
