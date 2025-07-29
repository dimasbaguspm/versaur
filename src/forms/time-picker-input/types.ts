import type { TextInputProps } from '../text-input'

/**
 * Props for the TimePickerInput component
 */
export interface TimePickerInputProps
  extends Omit<TextInputProps, 'type' | 'value' | 'onChange'> {
  value: string
  /**
   * Called when the time value changes
   */
  onChange: (value: string) => void
}
