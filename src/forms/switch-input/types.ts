import type { InputHTMLAttributes } from 'react'

/**
 * Props for SwitchInput component
 */
export interface SwitchInputProps
  extends Omit<
    InputHTMLAttributes<HTMLInputElement>,
    'type' | 'value' | 'onChange' | 'size'
  > {
  /**
   * Controlled value state (checked or unchecked)
   */
  value?: boolean
  /**
   * Callback when value changes
   */
  onChange?: (value: boolean) => void
  /**
   * Label text displayed inline with the switch
   */
  label?: string
  /**
   * Whether the field is required
   */
  required?: boolean
  /**
   * aria-label for accessibility when no label is provided
   */
  ariaLabel?: string
}
