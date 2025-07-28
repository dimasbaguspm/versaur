import React from 'react'
import { cn } from '@/utils/cn'
import {
  ChipSingleInputContext,
  type ChipSingleInputContextValue,
} from './context'
import { ChipSingleInputOption } from './chip-single-input.atoms'
import type { ChipSingleInputProps } from './types'

/**
 * ChipSingleInput component for Versaur UI
 *
 * Provides a group of checkbox chips for multiple selection
 * Controlled component pattern for React forms
 */
const ChipSingleInputRoot = React.forwardRef<
  HTMLDivElement,
  ChipSingleInputProps
>(
  (
    {
      variant = 'primary',
      shape = 'circle',
      size = 'sm',
      label,
      helperText,
      error,
      className,
      disabled,
      name,
      value,
      onChange,
      children,
      ...props
    },
    ref
  ) => {
    const hasError = Boolean(error)

    const contextValue = {
      variant,
      shape,
      size,
      disabled,
      error: hasError,
      name,
      value,
      onChange,
    } satisfies ChipSingleInputContextValue

    return (
      <ChipSingleInputContext.Provider value={contextValue}>
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
      </ChipSingleInputContext.Provider>
    )
  }
)

export const ChipSingleInput = Object.assign(ChipSingleInputRoot, {
  Option: ChipSingleInputOption,
})
