import { forwardRef } from 'react'
import { cn } from '@/utils/cn'
import {
  ChipMultipleInputContext,
  type ChipMultipleInputContextValue,
} from './context'
import { ChipMultipleOption } from './chip-multiple-input.atoms'
import type { ChipMultipleInputProps } from './types'

/**
 * ChipMultipleInput component for Versaur UI
 *
 * Provides a group of checkbox chips for multiple selection
 * Controlled component pattern for React forms
 */
const ChipMultipleInputRoot = forwardRef<
  HTMLDivElement,
  ChipMultipleInputProps
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
      shape,
      size,
      disabled,
      error: hasError,
      name,
      value,
      onChange,
    } satisfies ChipMultipleInputContextValue

    return (
      <ChipMultipleInputContext.Provider value={contextValue}>
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
      </ChipMultipleInputContext.Provider>
    )
  }
)

export const ChipMultipleInput = Object.assign(ChipMultipleInputRoot, {
  Option: ChipMultipleOption,
})
