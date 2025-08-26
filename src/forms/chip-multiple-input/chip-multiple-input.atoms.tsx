import React, { forwardRef } from 'react'
import { cn } from '@/utils/cn'
import { chipOptionVariants } from './helpers'
import { useChipMultipleInputContext } from './context'
import type { ChipMultipleInputOptionProps } from './types'

/**
 * ChipMultipleInput.Option atom component
 *
 * Individual chip option for ChipMultipleInput
 * Uses checkbox input pattern for multiple selection
 * Supports leading icon and animated tick/check
 */
export const ChipMultipleOption = forwardRef<
  HTMLInputElement,
  ChipMultipleInputOptionProps
>(({ children, className, disabled, id, value, ...props }, ref) => {
  const {
    variant = 'primary',
    shape = 'circle',
    size = 'sm',
    ...context
  } = useChipMultipleInputContext()
  const generatedId = React.useId()
  const inputId = id || generatedId
  const isDisabled = disabled || context.disabled

  // check if this option is selected
  const isChecked = context.value?.includes(value) ?? false

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!isDisabled) {
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
    // Always call the original onChange prop if provided
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
        onChange={handleChange}
        className='sr-only'
        {...props}
      />
      <label
        htmlFor={inputId}
        data-selected={isChecked}
        className={cn(
          chipOptionVariants({
            variant,
            shape,
            size,
          }),
          isDisabled && 'opacity-50 cursor-not-allowed pointer-events-none',
          className
        )}
      >
        <span className='flex items-center gap-2'>{children}</span>
      </label>
    </>
  )
})

ChipMultipleOption.displayName = 'ChipMultipleOption'
