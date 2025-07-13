import React from 'react'
import { cn } from '@/utils/cn'
import { radioGroupVariants } from './helpers'
import { RadioInputContext } from './context'
import { RadioOption } from './radio-input.atoms'
import type { RadioInputProps } from './types'

/**
 * RadioInput component for Versaur UI
 *
 * Provides a compound radio input with customizable styling and accessibility
 * Follows browser standards and supports single selection patterns
 * Uses custom ::before pseudo-element for radio dot styling instead of browser defaults
 */
const RadioInputRoot = React.forwardRef<HTMLDivElement, RadioInputProps>(
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
      name,
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
      name,
    }

    return (
      <RadioInputContext.Provider value={contextValue}>
        <div ref={ref} className={cn('w-full', className)} {...props}>
          {label && (
            <div className='block text-sm font-medium text-foreground mb-3'>
              {label}
            </div>
          )}
          <div className={radioGroupVariants({ direction })}>{children}</div>
          {hasError && (
            <div className='mt-2 text-sm text-danger' role='alert'>
              {error}
            </div>
          )}
          {!hasError && helperText && (
            <div className='mt-2 text-sm text-gray-600'>{helperText}</div>
          )}
        </div>
      </RadioInputContext.Provider>
    )
  }
)

export const RadioInput = Object.assign(RadioInputRoot, {
  Option: RadioOption,
})
