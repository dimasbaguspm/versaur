import type { InputHTMLAttributes, ReactNode } from 'react'

/**
 * Props for the CheckboxInput component
 */
export interface CheckboxInputProps
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
   * Size variant for the checkbox
   */
  size?: 'sm' | 'md' | 'lg'
  /**
   * Label text to display above the checkbox group
   */
  label?: ReactNode
  /**
   * Helper text to display below the checkbox group
   */
  helperText?: ReactNode
  /**
   * Error message for invalid state
   */
  error?: ReactNode
  /**
   * Direction of checkbox layout
   */
  direction?: 'horizontal' | 'vertical'
}

/**
 * Props for the CheckboxInput.Option component
 */
export interface CheckboxOptionProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  /**
   * The option label content
   */
  children: ReactNode
  /**
   * Description text below the option label
   */
  description?: ReactNode
}
