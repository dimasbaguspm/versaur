import type { InputHTMLAttributes } from 'react'
import type { TextInputProps } from '@/forms/text-input/types'

/**
 * Props for PriceInput component
 * @property value - The price value as a string (raw, unformatted)
 * @property onChange - Called when the value changes (returns raw string)
 * @property allowNegative - Optional: allow negative values (default: false)
 * @property inputProps - Optional: custom input attributes
 */
export interface PriceInputProps
  extends Omit<TextInputProps, 'type' | 'value' | 'onChange'> {
  value: string
  onChange: (value: string) => void
  allowNegative?: boolean
  inputProps?: InputHTMLAttributes<HTMLInputElement>
}
