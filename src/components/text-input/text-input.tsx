import React from 'react'
import { cn } from '@/utils/cn'
import { textInputVariants } from './helpers'
import type { TextInputProps } from './types'

/**
 * TextInput component for Versaur UI
 *
 * Provides a styled input field with semantic color, variant, error, and disabled support
 * Follows browser standards and accessibility best practices
 */
export const TextInput = React.forwardRef<HTMLInputElement, TextInputProps>(
  (
    {
      variant = 'primary',
      label,
      leftContent,
      rightContent,
      helperText,
      error,
      className,
      disabled,
      id,
      ...props
    },
    ref
  ) => {
    const generatedId = React.useId()
    const inputId = id || generatedId
    const hasError = Boolean(error)

    return (
      <div>
        {label && (
          <label
            htmlFor={inputId}
            className='block text-sm font-medium text-foreground mb-2'
          >
            {label}
          </label>
        )}
        <div className={cn('relative w-full', className)}>
          {leftContent && (
            <span
              className='absolute left-2.5 top-0 bottom-0 pointer-events-none text-gray-500 flex items-center justify-center w-5'
              data-testid='left-content'
            >
              {leftContent}
            </span>
          )}
          <input
            ref={ref}
            id={inputId}
            aria-invalid={hasError}
            aria-disabled={disabled}
            disabled={disabled}
            className={cn(
              textInputVariants({
                variant: hasError ? 'danger' : variant,
              }),
              leftContent ? 'pl-9' : 'pl-3',
              rightContent ? 'pr-9' : 'pr-3',
              'h-10'
            )}
            {...props}
          />
          {rightContent && (
            <span
              className='absolute right-2.5 top-0 bottom-0 pointer-events-none text-gray-500 flex items-center justify-center w-5'
              data-testid='right-content'
            >
              {rightContent}
            </span>
          )}
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

TextInput.displayName = 'TextInput'
