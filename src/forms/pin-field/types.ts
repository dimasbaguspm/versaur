import type { ReactNode } from 'react'

/**
 * Props for the PinField component
 */
export interface PinFieldProps {
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
   * Label text to display above the pin field
   */
  label?: ReactNode
  /**
   * Helper text to display below the pin field
   */
  helperText?: ReactNode
  /**
   * Error message for invalid state
   */
  error?: ReactNode
  /**
   * Whether the component is disabled
   */
  disabled?: boolean
  /**
   * Current value of the pin field (6 digits)
   */
  value?: string
  /**
   * Default value for uncontrolled usage
   */
  defaultValue?: string
  /**
   * Callback fired when the pin value changes
   */
  onChange?: (value: string) => void
  /**
   * Callback fired when the pin field is completed (all 6 digits entered)
   */
  onComplete?: (value: string) => void
  /**
   * Whether to automatically submit when complete
   */
  autoSubmit?: boolean
  /**
   * Custom className for styling
   */
  className?: string
  /**
   * ID for the pin field group
   */
  id?: string
  /**
   * Name attribute for form submission
   */
  name?: string
  /**
   * Whether the pin field is required
   */
  required?: boolean
  /**
   * Whether to show the pin values as dots/asterisks for security
   */
  secure?: boolean
}

/**
 * Props for individual pin input
 */
export interface PinInputProps {
  value: string
  onChange: (value: string) => void
  onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void
  onFocus: () => void
  onPaste: (e: React.ClipboardEvent<HTMLInputElement>) => void
  disabled?: boolean
  error?: boolean
  variant: PinFieldProps['variant']
  secure?: boolean
  inputRef: (el: HTMLInputElement | null) => void
  index: number
  id: string
}
