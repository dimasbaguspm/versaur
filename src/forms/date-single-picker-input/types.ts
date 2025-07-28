/**
 * Props for DateSinglePickerInput
 */

import type { TextInputProps } from '../text-input/types'

/**
 * Props for DateSinglePickerInput
 * Extends TextInputProps, but restricts type to 'date' and value to string
 */
export interface DateSinglePickerInputProps
  extends Omit<TextInputProps, 'type' | 'value' | 'onChange'> {
  /**
   * The value of the input (ISO date string: YYYY-MM-DD)
   */
  value: string
  /**
   * Called when the value changes
   */
  onChange: (value: string) => void
  /**
   * Optional custom formatter for displaying the date value
   * @param value ISO date string
   * @returns formatted string for display
   */
  formatter?: (value: string) => string
}
