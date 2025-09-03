import { useRef, useState } from 'react'
import type { ChangeEvent, FC } from 'react'
import { TextInput } from '@/forms/text-input'
import type { PriceInputProps } from './types'
import { Icon } from '@/primitive/icon'
import { usePriceInputSync } from './use-price-input'
import { sanitizeRupiahInput, isValidRupiahFormat } from './helpers'
import { Banknote } from 'lucide-react'

/**
 * PriceInput is a specialized input component for Indonesian Rupiah (IDR) currency.
 * It enforces proper Rupiah formatting with thousands separators (dots) and decimal separators (commas).
 * Valid formats: 10000, 10.000, 10.000,50, 1.000.000,99
 * Invalid formats are automatically prevented: 10...1, 10,1,1, 10,,1, 10.000.00
 */
export const PriceInput: FC<PriceInputProps> = ({
  value,
  onChange,
  allowNegative = false,
  inputProps,
  label,
  helperText,
  error,
  variant,
  ...rest
}) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const [rawValue, setRawValue] = useState<string>(
    value === '' ? '' : String(value)
  )
  usePriceInputSync(value, setRawValue)

  // Handle input change: validate and sanitize Rupiah format
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value

    // First sanitize the input to remove obviously invalid characters
    const sanitized = sanitizeRupiahInput(inputValue, allowNegative)

    // Then validate if the sanitized input follows Rupiah format
    if (isValidRupiahFormat(sanitized, allowNegative)) {
      setRawValue(sanitized)
      onChange(sanitized)
    } else {
      // If invalid, keep the previous valid value
      // This prevents invalid states from being entered
      e.preventDefault()
    }
  }

  return (
    <TextInput
      ref={inputRef}
      type='text'
      label={label}
      value={rawValue}
      onChange={handleInputChange}
      error={error}
      helperText={helperText}
      placeholder={rest.placeholder}
      leftContent={<Icon as={Banknote} color='inherit' size='sm' />}
      variant={variant}
      inputMode='numeric'
      autoComplete='off'
      pattern='[0-9.,-]*'
      {...inputProps}
      {...rest}
    />
  )
}
