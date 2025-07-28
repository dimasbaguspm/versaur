import { useRef, useState } from 'react'
import type { ChangeEvent, FC } from 'react'
import { TextInput } from '@/forms/text-input'
import type { PriceInputProps } from './types'
import { Icon } from '@/primitive/icon'
import { usePriceInputSync } from './use-price-input'
import { Banknote } from 'lucide-react'

/**
 * PriceInput is a styled input for IDR currency, handling comma formatting and standard input attributes
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

  // Handle input change: allow only digits, comma, dot, and minus (if allowed)
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    let raw = e.target.value.replace(/[^\d.,-]/g, '')
    if (!allowNegative) raw = raw.replace(/-/g, '')
    setRawValue(raw)
    onChange(raw)
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
      pattern={allowNegative ? '^-?[\\d,.]*$' : '^[\\d,.]*$'}
      {...inputProps}
      {...rest}
    />
  )
}
