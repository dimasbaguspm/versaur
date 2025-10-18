import React from 'react'
import { cn } from '@/utils/cn'
import {
  pinInputClassName,
  pinInputErrorClassName,
  isDigit,
  formatPinValue,
} from './helpers'
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
        type='text'
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
        className={error ? pinInputErrorClassName : pinInputClassName}
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
 * A fully controlled PIN input field with configurable digit length
 * Ensures only numeric input with automatic focus management
 */
export const PinField = React.forwardRef<HTMLDivElement, PinFieldProps>(
  (
    {
      label,
      helperText,
      error,
      disabled,
      value,
      onChange,
      onComplete,
      digits = 6,
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

    // Format and ensure value is valid
    const currentValue = formatPinValue(value, digits)
    const digitArray = currentValue
      .split('')
      .concat(Array(digits - currentValue.length).fill(''))

    const handleValueChange = React.useCallback(
      (newValue: string) => {
        const formattedValue = formatPinValue(newValue, digits)
        onChange(formattedValue)

        if (formattedValue.length === digits) {
          onComplete?.(formattedValue)
        }
      },
      [onChange, onComplete, digits]
    )

    const handleInputChange = React.useCallback(
      (index: number, inputValue: string) => {
        // Create new value by replacing character at index
        const newDigits = [...digitArray]
        newDigits[index] = inputValue

        // Join and remove trailing empty strings
        const newValue = newDigits.join('').replace(/\s+$/, '')
        handleValueChange(newValue)

        // Auto-focus next input if digit entered and not last input
        if (inputValue && index < digits - 1) {
          inputRefs.current[index + 1]?.focus()
        }
      },
      [digitArray, handleValueChange, digits]
    )

    const handleKeyDown = React.useCallback(
      (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Backspace') {
          if (!digitArray[index] && index > 0) {
            // If current input is empty and backspace is pressed, move to previous
            e.preventDefault()
            const newDigits = [...digitArray]
            newDigits[index - 1] = ''
            const newValue = newDigits.join('').replace(/\s+$/, '')
            handleValueChange(newValue)
            inputRefs.current[index - 1]?.focus()
          } else if (digitArray[index]) {
            // Clear current digit
            e.preventDefault()
            const newDigits = [...digitArray]
            newDigits[index] = ''
            const newValue = newDigits.join('').replace(/\s+$/, '')
            handleValueChange(newValue)
          }
        } else if (e.key === 'ArrowLeft' && index > 0) {
          e.preventDefault()
          inputRefs.current[index - 1]?.focus()
        } else if (e.key === 'ArrowRight' && index < digits - 1) {
          e.preventDefault()
          inputRefs.current[index + 1]?.focus()
        }
      },
      [digitArray, handleValueChange, digits]
    )

    const handlePaste = React.useCallback(
      (e: React.ClipboardEvent<HTMLInputElement>) => {
        e.preventDefault()
        const pastedData = e.clipboardData.getData('text')
        const formattedData = formatPinValue(pastedData, digits)

        if (formattedData.length > 0) {
          handleValueChange(formattedData)
          // Focus the next empty input or last input
          const nextIndex = Math.min(formattedData.length, digits - 1)
          inputRefs.current[nextIndex]?.focus()
        }
      },
      [handleValueChange, digits]
    )

    return (
      <div ref={ref} className={cn('w-full', className)} {...props}>
        {label && (
          <label
            htmlFor={`${fieldId}-0`}
            className='block text-sm font-medium text-foreground mb-2'
          >
            {label}
            {required && (
              <span className='text-danger ml-1' aria-label='required'>
                *
              </span>
            )}
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
          {digitArray.map((digit, index) => (
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
