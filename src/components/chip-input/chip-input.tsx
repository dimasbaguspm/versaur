import React from 'react'
import { cn } from '@/utils/cn'
import { ChipInputContext, type ChipInputContextValue } from './context'
import { ChipOption } from './chip-input.atoms'
import type { ChipInputProps } from './types'

/**
 * ChipInput component for Versaur UI
 *
 * Provides a group of checkbox chips for multiple selection
 * Controlled component pattern for React forms
 */
const ChipInputRoot = React.forwardRef<HTMLDivElement, ChipInputProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      label,
      helperText,
      error,
      className,
      disabled,
      name,
      value = [],
      onChange,
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
      value,
      onChange,
    } satisfies ChipInputContextValue

    return (
      <ChipInputContext.Provider value={contextValue}>
        <div ref={ref} className={cn('w-full', className)} {...props}>
          {label && (
            <div className='block text-sm font-medium text-foreground mb-3'>
              {label}
            </div>
          )}
          <div className='flex flex-wrap gap-2'>{children}</div>
          {hasError && (
            <div className='mt-2 text-sm text-danger' role='alert'>
              {error}
            </div>
          )}
          {!hasError && helperText && (
            <div className='mt-2 text-sm text-gray-600'>{helperText}</div>
          )}
        </div>
      </ChipInputContext.Provider>
    )
  }
)

export const ChipInput = Object.assign(ChipInputRoot, {
  Option: ChipOption,
})
