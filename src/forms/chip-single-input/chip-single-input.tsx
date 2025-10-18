import { forwardRef } from 'react'
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
 * Provides a group of radio chips for single selection
 * Controlled component pattern for React forms
 * Uses fieldset and legend for semantic HTML
 */
const ChipSingleInputRoot = forwardRef<
  HTMLFieldSetElement,
  ChipSingleInputProps
>(
  (
    {
      size = 'md',
      label,
      required,
      helperText,
      error,
      className,
      disabled,
      readOnly,
      maxWidth,
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
      size,
      disabled,
      readOnly,
      error: hasError,
      name,
      value,
      maxWidth,
      onChange,
    } satisfies ChipSingleInputContextValue

    return (
      <ChipSingleInputContext.Provider value={contextValue}>
        <fieldset
          ref={ref}
          className={cn('w-full border-0 p-0 m-0', className)}
          disabled={disabled}
          {...props}
        >
          {label && (
            <legend className='block text-sm font-medium text-foreground mb-3 float-none w-auto'>
              {label}
              {required && (
                <span className='text-danger ml-1' aria-label='required'>
                  *
                </span>
              )}
            </legend>
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
        </fieldset>
      </ChipSingleInputContext.Provider>
    )
  }
)

export const ChipSingleInput = Object.assign(ChipSingleInputRoot, {
  Option: ChipSingleInputOption,
})
