import React from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/utils/cn'
import { Icon } from '@/primitive/icon'
import { selectInputVariants } from './helpers'
import { SelectOption, SelectOptionGroup } from './select-input.atoms'
import type { SelectInputProps } from './types'

/**
 * SelectInput component for Versaur UI
 *
 * A simple, accessible select dropdown that aligns with native HTML select element
 * Follows browser standards and accessibility best practices with proper ARIA attributes
 */
const SelectInputRoot = React.forwardRef<HTMLSelectElement, SelectInputProps>(
  (
    {
      label,
      helperText,
      error,
      className,
      disabled,
      readOnly,
      id,
      required,
      placeholder,
      children,
      onChange,
      ...props
    },
    ref
  ) => {
    const generatedId = React.useId()
    const selectId = id || generatedId
    const helperTextId = `${selectId}-helper`
    const errorId = `${selectId}-error`
    const hasError = Boolean(error)

    // Build aria-describedby based on what's present
    const ariaDescribedBy = React.useMemo(() => {
      const ids: string[] = []
      if (hasError) {
        ids.push(errorId)
      } else if (helperText) {
        ids.push(helperTextId)
      }
      return ids.length > 0 ? ids.join(' ') : undefined
    }, [hasError, helperText, errorId, helperTextId])

    return (
      <div className={cn('w-full', className)}>
        {label && (
          <label
            htmlFor={selectId}
            className='block text-sm font-medium text-foreground mb-2'
          >
            {label}
            {required && (
              <span className='text-danger ml-1' aria-label='required'>
                *
              </span>
            )}
          </label>
        )}
        <div className='relative w-full'>
          <select
            ref={ref}
            id={selectId}
            required={required}
            disabled={disabled || readOnly}
            aria-invalid={hasError}
            aria-describedby={ariaDescribedBy}
            aria-errormessage={hasError ? errorId : undefined}
            onChange={onChange}
            className={cn(
              selectInputVariants({
                state: hasError ? 'error' : readOnly ? 'readOnly' : 'default',
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
          {/* Custom dropdown arrow with flip transition */}
          <div
            className={cn(
              'absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none transition-transform duration-200'
            )}
          >
            <Icon as={ChevronDown} size='sm' color='gray' aria-hidden='true' />
          </div>
        </div>
        {hasError && (
          <div
            id={errorId}
            className='mt-1 text-sm text-danger'
            role='alert'
            aria-live='polite'
          >
            {error}
          </div>
        )}
        {!hasError && helperText && (
          <div id={helperTextId} className='mt-1 text-sm text-gray-600'>
            {helperText}
          </div>
        )}
      </div>
    )
  }
)

SelectInputRoot.displayName = 'SelectInput'

export const SelectInput = Object.assign(SelectInputRoot, {
  Option: SelectOption,
  OptionGroup: SelectOptionGroup,
})
