import React from 'react'
import { cn } from '@/utils/cn'
import {
  textAreaInputVariants,
  getTextAreaState,
  handlePlainTextPaste,
} from './helpers'
import type { TextAreaInputProps } from './types'

/**
 * TextAreaInput component for Versaur UI
 *
 * Uses contentEditable div for robust multi-line text input with better control
 * Provides error states, disabled, and readOnly support
 * Follows browser standards and accessibility best practices
 */
export const TextAreaInput = React.forwardRef<
  HTMLDivElement,
  TextAreaInputProps
>(
  (
    {
      label,
      helperText,
      error,
      className,
      disabled,
      readOnly,
      id,
      value,
      defaultValue,
      onChange,
      placeholder,
      name,
      row = 3,
      required,
      onBlur,
      onFocus,
      onKeyDown,
      ...props
    },
    ref
  ) => {
    const generatedId = React.useId()
    const inputId = id || generatedId
    const hasError = Boolean(error)
    const internalRef = React.useRef<HTMLDivElement>(null)
    const [internalValue, setInternalValue] = React.useState(defaultValue || '')
    const isControlled = value !== undefined
    const currentValue = isControlled ? value : internalValue

    // Combine refs
    React.useImperativeHandle(ref, () => internalRef.current!)

    // Sync contentEditable with value prop
    React.useEffect(() => {
      if (
        internalRef.current &&
        internalRef.current.textContent !== currentValue
      ) {
        internalRef.current.textContent = currentValue
      }
    }, [currentValue])

    // Get the appropriate state variant
    const state = getTextAreaState(disabled, readOnly, hasError)

    // Handle placeholder visibility
    const showPlaceholder = !currentValue && placeholder

    const handleInput = (e: React.FormEvent<HTMLDivElement>) => {
      const newValue = e.currentTarget.textContent || ''

      if (!isControlled) {
        setInternalValue(newValue)
      }

      onChange?.(newValue)
    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
      // Prevent input when disabled or readOnly
      if (disabled || readOnly) {
        e.preventDefault()
        return
      }

      onKeyDown?.(e)
    }

    const handleLabelClick = () => {
      internalRef.current?.focus()
    }

    return (
      <div>
        {label && (
          <label
            htmlFor={inputId}
            className='block text-sm font-medium text-foreground mb-2 cursor-pointer'
            onClick={handleLabelClick}
          >
            {label}
            {required && (
              <span className='text-danger ml-1' aria-label='required'>
                *
              </span>
            )}
          </label>
        )}
        <div className={cn('relative w-full', className)}>
          <div
            ref={internalRef}
            id={inputId}
            role='textbox'
            aria-multiline='true'
            aria-invalid={hasError}
            aria-disabled={disabled}
            aria-readonly={readOnly}
            aria-required={required}
            aria-label={typeof label === 'string' ? label : undefined}
            contentEditable={!disabled && !readOnly}
            data-name={name}
            onInput={handleInput}
            onKeyDown={handleKeyDown}
            onPaste={e => handlePlainTextPaste(e, disabled, readOnly)}
            onBlur={onBlur}
            onFocus={onFocus}
            suppressContentEditableWarning
            style={{ minHeight: `${row * 1.5 + 1}rem` }}
            className={cn(
              textAreaInputVariants({ state }),
              'px-3 py-2',
              showPlaceholder &&
                'empty:before:content-[attr(data-placeholder)] empty:before:text-gray-400'
            )}
            data-placeholder={placeholder}
            {...props}
          />
        </div>
        {hasError && (
          <div className='mt-1 text-sm text-danger' role='alert'>
            {error}
          </div>
        )}
        {!hasError && helperText && (
          <div className='mt-1 text-sm text-gray-600'>{helperText}</div>
        )}
      </div>
    )
  }
)

TextAreaInput.displayName = 'TextAreaInput'
