import React from 'react'
import { cn } from '@/utils/cn'
import { textInputVariants } from './helpers'
import type { TextInputProps } from './types'

/**
 * TextInput component for Versaur UI
 *
 * A simple, accessible text input that aligns with native HTML input element
 * Follows browser standards and accessibility best practices with proper ARIA attributes
 */
export const TextInput = React.forwardRef<HTMLInputElement, TextInputProps>(
  (
    {
      label,
      leftContent,
      rightContent,
      helperText,
      error,
      className,
      disabled,
      readOnly,
      id,
      required,
      ...props
    },
    ref
  ) => {
    const generatedId = React.useId()
    const inputId = id || generatedId
    const helperTextId = `${inputId}-helper`
    const errorId = `${inputId}-error`
    const hasError = Boolean(error)

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
            htmlFor={inputId}
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
              className='absolute left-2.5 top-0 bottom-0 pointer-events-none text-gray-500 flex items-center justify-center w-5'
              aria-hidden='true'
              data-testid='left-content'
            >
              {leftContent}
            </span>
          )}
          <input
            ref={ref}
            id={inputId}
            required={required}
            disabled={disabled}
            readOnly={readOnly}
            aria-invalid={hasError}
            aria-describedby={ariaDescribedBy}
            aria-errormessage={hasError ? errorId : undefined}
            className={cn(
              textInputVariants({
                state: hasError ? 'error' : readOnly ? 'readOnly' : 'default',
              }),
              leftContent ? 'pl-9' : 'pl-3',
              rightContent ? 'pr-9' : 'pr-3',
              'h-9'
            )}
            {...props}
          />
          {rightContent && (
            <span
              className='absolute right-2.5 top-0 bottom-0 pointer-events-none text-gray-500 flex items-center justify-center w-5'
              aria-hidden='true'
              data-testid='right-content'
            >
              {rightContent}
            </span>
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

TextInput.displayName = 'TextInput'
