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
 * Uses fieldset/legend structure for proper semantics
 * Uses custom ::after pseudo-element for checkmark styling instead of browser defaults
 */
const CheckboxInputRoot = React.forwardRef<
  HTMLFieldSetElement,
  CheckboxInputProps
>(
  (
    {
      label,
      helperText,
      error,
      direction = 'vertical',
      className,
      disabled,
      required,
      children,
      ...props
    },
    ref
  ) => {
    const hasError = Boolean(error)

    const contextValue = {
      disabled,
    }

    return (
      <CheckboxContext.Provider value={contextValue}>
        <fieldset
          ref={ref}
          disabled={disabled}
          className={cn('w-full border-0 p-0 m-0', className)}
          {...props}
        >
          {label && (
            <legend className='block text-sm font-medium text-foreground mb-3'>
              {label}
              {required && (
                <span className='text-danger ml-1' aria-label='required'>
                  *
                </span>
              )}
            </legend>
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
        </fieldset>
      </CheckboxContext.Provider>
    )
  }
)

CheckboxInputRoot.displayName = 'CheckboxInput'

export const CheckboxInput = Object.assign(CheckboxInputRoot, {
  Option: CheckboxOption,
})
