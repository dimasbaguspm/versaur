import type { InputHTMLAttributes, ReactNode } from 'react'

/**
 * Props for the SegmentSingleInput component
 */
export interface SegmentSingleInputProps
  extends Omit<
    InputHTMLAttributes<HTMLInputElement>,
    'type' | 'size' | 'onChange' | 'value'
  > {
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
   * Size variant for the segment inputs
   */
  size?: 'sm' | 'md' | 'lg'
  /**
   * If true, the segment group and its options will fill the parent width
   */
  fullWidth?: boolean
  /**
   * Label text to display above the segment group
   */
  label?: ReactNode
  /**
   * Helper text to display below the segment group
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
   * Use null to indicate no selection
   */
  value?: string | null
  /**
   * Callback when value changes
   */
  onChange?: (value: string | null) => void
}

/**
 * Props for the SegmentSingleInput.Option component
 */
export interface SegmentSingleInputOptionProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'name'> {
  /**
   * The option label content
   */
  children: ReactNode
  /**
   * The value for this segment option
   */
  value: string
}
