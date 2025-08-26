import type { InputHTMLAttributes, ReactNode } from 'react'

/**
 * Props for the ChipSingleInput component
 */
export interface ChipSingleInputProps
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
  variant?: 'primary' | 'secondary' | 'tertiary' | 'ghost'
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
   * The name attribute for the radio group - required for radio functionality
   */
  name: string
  /**
   * Current selected value (controlled component)
   * String representing selected option value
   */
  value?: string
  /**
   * Callback when value changes
   */
  onChange?: (value: string) => void
}

/**
 * Props for the ChipSingleInput.Option component
 */
export interface ChipSingleInputOptionProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'name'> {
  /**
   * The option label content
   */
  children: ReactNode
  /**
   * The value for this chip option
   */
  value: string
}
