import type { InputHTMLAttributes, ReactNode } from 'react'

/**
 * Props for the ChipInput component
 */
export interface ChipInputProps
  extends Omit<
    InputHTMLAttributes<HTMLInputElement>,
    'type' | 'size' | 'onChange' | 'value'
  > {
  /**
   * The shape of the chip: 'circle' (default) or 'rounded'
   */
  shape?: 'circle' | 'rounded'
  /**
   * The size of the chip: 'sm' (default), 'md', or 'lg'
   */
  size?: 'sm' | 'md' | 'lg'
  /**
   * Visual style variant supporting Versaur color system
   * Core variants: primary (coral), secondary (sage), tertiary (mist), ghost (slate), neutral (light gray)
   * Semantic variants: success, info, warning, danger
   * Each variant supports outline form for flexible design expression
   */
  variant?:
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'ghost'
    | 'neutral'
    | 'success'
    | 'info'
    | 'warning'
    | 'danger'
  /**
   * Label text to display above the chip group
   */
  label?: ReactNode
  /**
   * Helper text to display below the chip group
   */
  helperText?: ReactNode
  /**
   * Error message for invalid state
   */
  error?: ReactNode
  /**
   * The name attribute for the checkbox group - required for checkbox functionality
   */
  name: string
  /**
   * Current selected values (controlled component)
   * Array of strings representing selected option values
   */
  value?: string[]
  /**
   * Callback when value changes
   */
  onChange?: (value: string[]) => void
}

/**
 * Props for the ChipInput.Option component
 */
export interface ChipInputOptionProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'name'> {
  /**
   * The option label content
   */
  children: ReactNode
  /**
   * The value for this chip option
   */
  value: string
  /**
   * Custom check icon or element. If not provided, no check is rendered unless defaultCheck is true
   */
  check?: React.ReactNode
  /**
   * Show the default check icon if true (default: false). If both check and defaultCheck are provided, check takes precedence
   */
  defaultCheck?: boolean
}
