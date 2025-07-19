import React from 'react'
import { cn } from '@/utils/cn'
import { textAreaInputVariants } from './helpers'
import type { TextAreaInputProps } from './types'

/**
 * TextAreaInput component for Versaur UI
 *
 * Provides a styled textarea field with semantic color, variant, error, and disabled support
 * Supports field-sizing for auto-resizing and configurable rows
 * Follows browser standards and accessibility best practices
 */
export const TextAreaInput = React.forwardRef<
  HTMLTextAreaElement,
  TextAreaInputProps
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
      minRows = 3,
      maxRows,
      fieldSizing = 'fixed',
      style,
      rows,
      ...props
    },
    ref
  ) => {
    const generatedId = React.useId()
    const inputId = id || generatedId
    const hasError = Boolean(error)

    // Calculate rows based on fieldSizing
    const effectiveRows =
      rows || (fieldSizing === 'content' ? minRows : minRows)
    const effectiveMaxRows = fieldSizing === 'content' ? undefined : maxRows

    // Combine custom styles with component styles
    const combinedStyle = {
      ...(fieldSizing === 'content' && { fieldSizing: 'content' }),
      ...(effectiveMaxRows && {
        maxHeight: `${effectiveMaxRows * 1.5}rem`, // Approximate line height
      }),
      ...style,
    }

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
          <textarea
            ref={ref}
            id={inputId}
            rows={effectiveRows}
            aria-invalid={hasError}
            aria-disabled={disabled}
            disabled={disabled}
            style={combinedStyle}
            className={cn(
              textAreaInputVariants({
                variant: hasError ? 'danger' : variant,
                fieldSizing,
              }),
              'px-3 py-2'
            )}
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
