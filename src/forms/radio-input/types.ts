import type { InputHTMLAttributes, ReactNode } from 'react'

/**
 * Props for the RadioInput component
 */
export interface RadioInputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'> {
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
   * Size variant for the radio inputs
   */
  size?: 'sm' | 'md' | 'lg'
  /**
   * Label text to display above the radio group
   */
  label?: ReactNode
  /**
   * Helper text to display below the radio group
   */
  helperText?: ReactNode
  /**
   * Error message for invalid state
   */
  error?: ReactNode
  /**
   * Direction of radio layout
   */
  direction?: 'horizontal' | 'vertical'
  /**
   * The name attribute for the radio group - required for radio functionality
   */
  name: string
}

/**
 * Props for the RadioInput.Option component
 */
export interface RadioOptionProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'name'> {
  /**
   * The option label content
   */
  children: ReactNode
  /**
   * Description text below the option label
   */
  description?: ReactNode
  /**
   * The value for this radio option
   */
  value: string
}
