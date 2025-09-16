import React from 'react'
import { cn } from '@/utils/cn'
import { pinFieldVariants, isDigit, formatPinValue } from './helpers'
import type { PinFieldProps, PinInputProps } from './types'

/**
 * Individual PIN input component
 */
const PinInput = React.forwardRef<HTMLInputElement, PinInputProps>(
  (
    {
      value,
      onChange,
      onKeyDown,
      onFocus,
      onPaste,
      disabled,
      error,
      variant,
      secure,
      inputRef,
      index,
      id,
    },
    _ref
  ) => {
    return (
      <input
        ref={inputRef}
        id={id}
        type={secure ? 'password' : 'text'}
        inputMode='numeric'
        pattern='[0-9]*'
        maxLength={1}
        value={secure ? (value ? '•' : '') : value}
        onChange={e => {
          const inputValue = e.target.value
          if (inputValue === '' || isDigit(inputValue)) {
            onChange(inputValue)
          }
        }}
        onKeyDown={onKeyDown}
        onFocus={onFocus}
        onPaste={onPaste}
        disabled={disabled}
        aria-invalid={error}
        aria-disabled={disabled}
        className={cn(
          pinFieldVariants({
            variant: error ? 'danger' : variant,
          })
        )}
        autoComplete='one-time-code'
        data-testid={`pin-input-${index}`}
      />
    )
  }
)

PinInput.displayName = 'PinInput'

/**
 * PinField component for Versaur UI
 *
 * Provides a 6-digit PIN input field with automatic focus management
 * Ensures only numeric input and follows accessibility best practices
 */
export const PinField = React.forwardRef<HTMLDivElement, PinFieldProps>(
  (
    {
      variant = 'primary',
      label,
      helperText,
      error,
      disabled,
      value,
      defaultValue,
      onChange,
      onComplete,
      autoSubmit = false,
      className,
      id,
      name,
      required,
      secure = false,
      ...props
    },
    ref
  ) => {
    const generatedId = React.useId()
    const fieldId = id || generatedId
    const hasError = Boolean(error)

    // Create refs for each input
    const inputRefs = React.useRef<(HTMLInputElement | null)[]>([])
    const [internalValue, setInternalValue] = React.useState(() =>
      formatPinValue(defaultValue || '')
    )

    // Use controlled or uncontrolled value
    const currentValue =
      value !== undefined ? formatPinValue(value) : internalValue
    const digits = currentValue
      .split('')
      .concat(Array(6 - currentValue.length).fill(''))

    const handleValueChange = React.useCallback(
      (newValue: string) => {
        const formattedValue = formatPinValue(newValue)

        if (value === undefined) {
          setInternalValue(formattedValue)
        }

        onChange?.(formattedValue)

        if (formattedValue.length === 6) {
          onComplete?.(formattedValue)
          if (autoSubmit) {
            // Find the closest form and submit it
            const form = inputRefs.current[0]?.closest('form')
            if (form) {
              form.requestSubmit()
            }
          }
        }
      },
      [value, onChange, onComplete, autoSubmit]
    )

    const handleInputChange = React.useCallback(
      (index: number, inputValue: string) => {
        const newDigits = [...digits]
        newDigits[index] = inputValue

        // Remove empty strings from the end
        const newValue = newDigits.join('').replace(/\s+$/, '')
        handleValueChange(newValue)

        // Auto-focus next input
        if (inputValue && index < 5) {
          inputRefs.current[index + 1]?.focus()
        }
      },
      [digits, handleValueChange]
    )

    const handleKeyDown = React.useCallback(
      (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Backspace' && !digits[index] && index > 0) {
          // Focus previous input on backspace when current is empty
          inputRefs.current[index - 1]?.focus()
        } else if (e.key === 'ArrowLeft' && index > 0) {
          inputRefs.current[index - 1]?.focus()
        } else if (e.key === 'ArrowRight' && index < 5) {
          inputRefs.current[index + 1]?.focus()
        }
      },
      [digits]
    )

    const handlePaste = React.useCallback(
      (e: React.ClipboardEvent<HTMLInputElement>) => {
        e.preventDefault()
        const pastedData = e.clipboardData.getData('text')
        const formattedData = formatPinValue(pastedData)

        if (formattedData.length > 0) {
          handleValueChange(formattedData)
          // Focus the next empty input or last input
          const nextIndex = Math.min(formattedData.length, 5)
          inputRefs.current[nextIndex]?.focus()
        }
      },
      [handleValueChange]
    )

    return (
      <div ref={ref} className={cn('w-full', className)} {...props}>
        {label && (
          <label
            htmlFor={`${fieldId}-0`}
            className='block text-sm font-medium text-foreground mb-2'
          >
            {label}
            {required && <span className='text-danger ml-1'>*</span>}
          </label>
        )}

        <div
          className='flex gap-2 justify-center'
          role='group'
          aria-labelledby={label ? `${fieldId}-label` : undefined}
          aria-describedby={
            hasError
              ? `${fieldId}-error`
              : helperText
                ? `${fieldId}-helper`
                : undefined
          }
        >
          {digits.map((digit, index) => (
            <PinInput
              key={index}
              value={digit}
              onChange={inputValue => handleInputChange(index, inputValue)}
              onKeyDown={e => handleKeyDown(index, e)}
              onFocus={() => {
                // Select all text when focused
                const input = inputRefs.current[index]
                if (input) {
                  input.select()
                }
              }}
              onPaste={handlePaste}
              disabled={disabled}
              error={hasError}
              variant={variant}
              secure={secure}
              inputRef={el => {
                inputRefs.current[index] = el
              }}
              index={index}
              id={`${fieldId}-${index}`}
            />
          ))}
        </div>

        {/* Hidden input for form submission */}
        {name && (
          <input
            type='hidden'
            name={name}
            value={currentValue}
            required={required}
          />
        )}

        {hasError && (
          <div
            id={`${fieldId}-error`}
            className='mt-2 text-sm text-danger'
            role='alert'
          >
            {error}
          </div>
        )}

        {!hasError && helperText && (
          <div id={`${fieldId}-helper`} className='mt-2 text-sm text-gray-600'>
            {helperText}
          </div>
        )}
      </div>
    )
  }
)

PinField.displayName = 'PinField'
