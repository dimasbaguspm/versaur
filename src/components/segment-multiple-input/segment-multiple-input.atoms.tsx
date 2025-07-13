import React from 'react'
import { cn } from '@/utils/cn'
import { segmentOptionVariants, getSegmentSelectedClasses } from './helpers'
import { useSegmentMultipleInputContext } from './context'
import type { SegmentMultipleInputOptionProps } from './types'

/**
 * SegmentMultipleInput.Option atom component
 *
 * Individual segment option that can be used within SegmentMultipleInput
 * Features tab-like styling with seamless connections between segments
 * Uses checkbox input pattern for multiple selection
 */
export const SegmentOption = React.forwardRef<
  HTMLInputElement,
  SegmentMultipleInputOptionProps & {
    position?: 'first' | 'middle' | 'last' | 'single'
  }
>(
  (
    { children, className, disabled, id, value, position = 'middle', ...props },
    ref
  ) => {
    const context = useSegmentMultipleInputContext()
    const generatedId = React.useId()
    const inputId = id || generatedId
    const isDisabled = disabled || context.disabled
    const variant = context.error ? 'danger' : context.variant || 'primary'

    // Check if this option is selected
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
          className={cn(
            segmentOptionVariants({
              variant,
              size: context.size,
              rounded: position,
            }),
            // Apply selected state styling
            isChecked && getSegmentSelectedClasses(variant),
            isChecked && 'relative z-10',
            // Apply disabled styling directly since labels don't support disabled attribute
            isDisabled && 'opacity-50 cursor-not-allowed pointer-events-none',
            className
          )}
        >
          {children}
        </label>
      </>
    )
  }
)

SegmentOption.displayName = 'SegmentOption'
