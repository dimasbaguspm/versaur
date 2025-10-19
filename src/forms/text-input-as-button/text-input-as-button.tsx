import React from 'react'
import { cn } from '@/utils/cn'
import { textInputAsButtonVariants } from './helpers'
import type { TextInputAsButtonProps } from './types'

/**
 * TextInputAsButton component for Versaur UI
 *
 * A button that mimics the style of TextInput, useful for triggering modals, pickers, or custom inputs
 * Renders as a button with the same visual style as TextInput, with a hidden input for form submission
 * Follows browser standards and accessibility best practices with proper ARIA attributes
 */
export const TextInputAsButton = React.forwardRef<
  HTMLButtonElement,
  TextInputAsButtonProps
>(
  (
    {
      label,
      leftContent,
      rightContent,
      helperText,
      error,
      className,
      disabled,
      id,
      required,
      value,
      displayValue,
      placeholder = '',
      name,
      ...props
    },
    ref
  ) => {
    const generatedId = React.useId()
    const buttonId = id || generatedId
    const helperTextId = `${buttonId}-helper`
    const errorId = `${buttonId}-error`
    const hasError = Boolean(error)

    // Determine the display text for the button
    const displayText = React.useMemo(() => {
      if (displayValue) return displayValue
      if (value !== undefined && value !== null && value !== '') {
        // Stringify value for display if displayValue is not provided
        if (typeof value === 'string') return value
        if (typeof value === 'number' || typeof value === 'boolean')
          return String(value)
        if (Array.isArray(value)) return value.join(', ')
        if (typeof value === 'object') return JSON.stringify(value)
      }
      return placeholder
    }, [value, displayValue, placeholder])

    // Serialize value for hidden input
    const serializedValue = React.useMemo(() => {
      if (value === undefined || value === null) return ''
      if (typeof value === 'string' || typeof value === 'number')
        return String(value)
      if (typeof value === 'boolean') return String(value)
      if (Array.isArray(value) || typeof value === 'object')
        return JSON.stringify(value)
      return String(value)
    }, [value])

    const hasValue =
      value !== undefined &&
      value !== null &&
      value !== '' &&
      displayText !== placeholder

    // Build aria-describedby based on what's present
    const ariaDescribedBy = React.useMemo(() => {
      const ids: string[] = []
      if (hasError) {
        ids.push(errorId)
      } else if (helperText) {
        ids.push(helperTextId)
      }
      return ids.length > 0 ? ids.join(' ') : undefined
    }, [hasError, helperText, errorId, helperTextId])

    return (
      <div className={cn('w-full', className)}>
        {label && (
          <label
            htmlFor={buttonId}
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
        <div className='relative w-full'>
          {leftContent && (
            <span
              className='absolute left-2.5 top-0 bottom-0 pointer-events-none text-gray-500 flex items-center justify-center w-5 z-10'
              aria-hidden='true'
              data-testid='left-content'
            >
              {leftContent}
            </span>
          )}
          <button
            ref={ref}
            id={buttonId}
            type='button'
            disabled={disabled}
            aria-invalid={hasError || undefined}
            aria-describedby={ariaDescribedBy}
            aria-errormessage={hasError ? errorId : undefined}
            aria-required={required || undefined}
            className={cn(
              textInputAsButtonVariants({
                state: hasError ? 'error' : 'default',
              }),
              leftContent ? 'pl-9' : 'pl-3',
              rightContent ? 'pr-9' : 'pr-3',
              'h-9',
              !hasValue && 'text-gray-400'
            )}
            {...props}
          >
            {displayText}
          </button>
          {rightContent && (
            <span
              className='absolute right-2.5 top-0 bottom-0 pointer-events-none text-gray-500 flex items-center justify-center w-5 z-10'
              aria-hidden='true'
              data-testid='right-content'
            >
              {rightContent}
            </span>
          )}
          {/* Hidden input for form submission */}
          {name && (
            <input
              type='hidden'
              name={name}
              value={serializedValue}
              readOnly
              data-testid='hidden-input'
            />
          )}
        </div>
        {hasError && (
          <div
            id={errorId}
            className='mt-1 text-sm text-danger'
            role='alert'
            aria-live='polite'
          >
            {error}
          </div>
        )}
        {!hasError && helperText && (
          <div id={helperTextId} className='mt-1 text-sm text-gray-600'>
            {helperText}
          </div>
        )}
      </div>
    )
  }
)

TextInputAsButton.displayName = 'TextInputAsButton'
