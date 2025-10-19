/**
 * Props for DateSinglePickerInput
 */

import type { TextInputAsButtonProps } from '../text-input-as-button/types'

/**
 * Props for DateSinglePickerInput
 * Extends TextInputAsButtonProps for button-styled input behavior
 */
export interface DateSinglePickerInputProps
  extends Omit<TextInputAsButtonProps, 'value' | 'onClick' | 'onChange'> {
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
  /**
   * Minimum date allowed (ISO date string: YYYY-MM-DD)
   * Uses native HTML validation
   */
  min?: string
  /**
   * Maximum date allowed (ISO date string: YYYY-MM-DD)
   * Uses native HTML validation
   */
  max?: string
}
