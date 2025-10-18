import type { ReactNode } from 'react'

/**
 * Props for the PinField component
 */
export interface PinFieldProps {
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
   * Current value of the pin field (controlled)
   */
  value: string
  /**
   * Callback fired when the pin value changes
   */
  onChange: (value: string) => void
  /**
   * Callback fired when the pin field is completed (all digits entered)
   */
  onComplete?: (value: string) => void
  /**
   * Number of digits for the PIN (default: 6)
   */
  digits?: number
  /**
   * Whether the pin field is required
   */
  required?: boolean
  /**
   * Whether to show the pin values as dots for security
   */
  secure?: boolean
  /**
   * Additional CSS classes
   */
  className?: string
  /**
   * ID attribute for the field
   */
  id?: string
  /**
   * Name attribute for form submission
   */
  name?: string
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
  secure?: boolean
  inputRef: (el: HTMLInputElement | null) => void
  index: number
  id: string
}
