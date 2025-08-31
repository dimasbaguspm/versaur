import React from 'react'
import { cn } from '@/utils/cn'
import { selectInputVariants } from './helpers'
import type { SelectInputProps } from './types'

/**
 * SelectInput component for Versaur UI
 *
 * Provides a styled select dropdown with semantic color, variant, error, and disabled support
 * Follows browser standards and accessibility best practices
 */
export const SelectInput = React.forwardRef<
  HTMLSelectElement,
  SelectInputProps
>(
  (
    {
      variant = 'primary',
      label,
      helperText,
      error,
      className,
      disabled,
      id,
      placeholder,
      children,
      ...props
    },
    ref
  ) => {
    const generatedId = React.useId()
    const selectId = id || generatedId
    const hasError = Boolean(error)

    return (
      <div>
        <label
          htmlFor={selectId}
          className='block text-sm font-medium text-foreground mb-2'
        >
          {label}
        </label>
        <div className={cn('relative w-full', className)}>
          <select
            ref={ref}
            id={selectId}
            aria-invalid={hasError}
            aria-disabled={disabled}
            disabled={disabled}
            className={cn(
              selectInputVariants({
                variant: hasError ? 'danger' : variant,
              }),
              'h-9 pl-3'
            )}
            {...props}
          >
            {placeholder && (
              <option value='' disabled hidden>
                {placeholder}
              </option>
            )}
            {children}
          </select>
          {/* Custom dropdown arrow */}
          <div className='absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none'>
            <svg
              className='w-5 h-5 text-gray-400'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 20 20'
              fill='currentColor'
              aria-hidden='true'
            >
              <path
                fillRule='evenodd'
                d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
                clipRule='evenodd'
              />
            </svg>
          </div>
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

SelectInput.displayName = 'SelectInput'
