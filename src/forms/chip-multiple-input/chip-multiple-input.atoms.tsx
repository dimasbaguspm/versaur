import React, { useId } from 'react'
import { cn } from '@/utils/cn'
import { chipMultipleInputOptionVariants } from './helpers'
import { useChipMultipleInputContext } from './context'
import type { ChipMultipleInputOptionProps } from './types'

/**
 * ChipMultipleInput.Option atom component
 *
 * Individual chip option for ChipMultipleInput
 * Uses checkbox input pattern for multiple selection
 * Supports text truncation with maxWidth and icon-only mode
 */
export const ChipMultipleInputOption = React.forwardRef<
  HTMLInputElement,
  ChipMultipleInputOptionProps
>(({ children, className, disabled, id, value, ...props }, ref) => {
  const { size = 'md', maxWidth, ...context } = useChipMultipleInputContext()
  const generatedId = useId()

  const inputId = id || generatedId

  const isDisabled = disabled || context.disabled
  const isReadOnly = context.readOnly

  const isChecked = context.value?.includes(value) ?? false

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!isDisabled && !isReadOnly) {
      const currentValues = context.value || []
      let newValues: string[]

      if (isChecked) {
        // Remove the value if it's already selected (unselect)
        newValues = currentValues.filter(v => v !== value)
      } else {
        // Add the value if it's not selected
        newValues = [...currentValues, value]
      }

      context.onChange?.(newValues)
    }
    props.onChange?.(event)
  }

  return (
    <>
      <input
        ref={ref}
        type='checkbox'
        id={inputId}
        name={`${context.name}[]`}
        value={value}
        checked={isChecked}
        disabled={isDisabled}
        readOnly={isReadOnly}
        onChange={handleChange}
        className='sr-only'
        {...props}
      />
      <label
        htmlFor={inputId}
        data-selected={isChecked}
        style={maxWidth ? { maxWidth } : undefined}
        className={cn(
          chipMultipleInputOptionVariants({
            size,
          }),
          isDisabled && 'opacity-50 cursor-not-allowed pointer-events-none',
          isReadOnly && 'cursor-default pointer-events-none',
          maxWidth && 'overflow-hidden',
          className
        )}
      >
        <span
          className={cn(
            'flex items-center gap-2',
            maxWidth && 'truncate min-w-0'
          )}
        >
          {children}
        </span>
      </label>
    </>
  )
})
