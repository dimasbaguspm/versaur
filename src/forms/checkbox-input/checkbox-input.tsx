import React from 'react'
import { cn } from '@/utils/cn'
import { checkboxGroupVariants } from './helpers'
import { CheckboxContext } from './context'
import { CheckboxOption } from './checkbox-input.atoms'
import type { CheckboxInputProps } from './types'

/**
 * CheckboxInput component for Versaur UI
 *
 * Provides a compound checkbox input with customizable styling and accessibility
 * Follows browser standards and supports multiple selection patterns
 * Uses custom ::after pseudo-element for checkmark styling instead of browser defaults
 */
const CheckboxInputRoot = React.forwardRef<HTMLDivElement, CheckboxInputProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      label,
      helperText,
      error,
      direction = 'vertical',
      className,
      disabled,
      children,
      ...props
    },
    ref
  ) => {
    const hasError = Boolean(error)

    const contextValue = {
      variant,
      size,
      disabled,
      error: hasError,
    }

    return (
      <CheckboxContext.Provider value={contextValue}>
        <div ref={ref} className={cn('w-full', className)} {...props}>
          {label && (
            <div className='block text-sm font-medium text-foreground mb-3'>
              {label}
            </div>
          )}
          <div className={checkboxGroupVariants({ direction })}>{children}</div>
          {hasError && (
            <div className='mt-2 text-sm text-danger' role='alert'>
              {error}
            </div>
          )}
          {!hasError && helperText && (
            <div className='mt-2 text-sm text-gray-600'>{helperText}</div>
          )}
        </div>
      </CheckboxContext.Provider>
    )
  }
)

CheckboxInputRoot.displayName = 'CheckboxInput'

export const CheckboxInput = Object.assign(CheckboxInputRoot, {
  Option: CheckboxOption,
})
