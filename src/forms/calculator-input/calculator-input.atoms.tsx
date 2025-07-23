import { forwardRef } from 'react'
import type { CalculatorInputProps } from './types'
import { calculatorInputVariants } from './helpers'

/**
 * CalculatorInputField is the input field for CalculatorInput
 */
export interface CalculatorInputFieldProps
  extends Omit<CalculatorInputProps, 'onChange'> {
  onChange: (value: number | '') => void
  onClick?: React.MouseEventHandler<HTMLInputElement>
  onFocus?: React.FocusEventHandler<HTMLInputElement>
  readOnly?: boolean
}

export const CalculatorInputField = forwardRef<
  HTMLInputElement,
  CalculatorInputFieldProps
>(function CalculatorInputField(
  { value, onChange, placeholder, disabled, onClick, onFocus, ...props },
  ref
) {
  return (
    <input
      ref={ref}
      type='text'
      inputMode='decimal'
      className={calculatorInputVariants({ disabled })}
      value={value === '' ? '' : value}
      onChange={e => {
        const val = e.target.value
        if (val === '') onChange('')
        else if (/^-?\d*(\.|,)?\d*$/.test(val)) {
          onChange(Number(val.replace(',', '.')))
        }
      }}
      placeholder={placeholder}
      disabled={disabled}
      aria-disabled={disabled}
      onClick={onClick}
      onFocus={onFocus}
      {...props}
    />
  )
})
