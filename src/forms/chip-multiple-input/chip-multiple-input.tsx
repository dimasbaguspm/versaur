import { forwardRef } from 'react'
import { cn } from '@/utils/cn'
import {
  ChipMultipleInputContext,
  type ChipMultipleInputContextValue,
} from './context'
import { ChipMultipleInputOption } from './chip-multiple-input.atoms'
import type { ChipMultipleInputProps } from './types'

/**
 * ChipMultipleInput component for Versaur UI
 *
 * Provides a group of checkbox chips for multiple selection
 * Controlled component pattern for React forms
 * Uses fieldset and legend for semantic HTML
 */
const ChipMultipleInputRoot = forwardRef<
  HTMLFieldSetElement,
  ChipMultipleInputProps
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
      value = [],
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
    } satisfies ChipMultipleInputContextValue

    return (
      <ChipMultipleInputContext.Provider value={contextValue}>
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
      </ChipMultipleInputContext.Provider>
    )
  }
)

export const ChipMultipleInput = Object.assign(ChipMultipleInputRoot, {
  Option: ChipMultipleInputOption,
})
