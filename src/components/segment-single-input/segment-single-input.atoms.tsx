import React from 'react'
import { cn } from '@/utils/cn'
import { segmentOptionVariants, getSegmentSelectedClasses } from './helpers'
import { useSegmentSingleInputContext } from './context'
import type { SegmentSingleInputOptionProps } from './types'

/**
 * SegmentSingleInput.Option atom component
 *
 * Individual segment option that can be used within SegmentSingleInput
 * Features tab-like styling with seamless connections between segments
 */
export const SegmentOption = React.forwardRef<
  HTMLInputElement,
  SegmentSingleInputOptionProps & {
    position?: 'first' | 'middle' | 'last' | 'single'
  }
>(
  (
    { children, className, disabled, id, value, position = 'middle', ...props },
    ref
  ) => {
    const context = useSegmentSingleInputContext()
    const generatedId = React.useId()
    const inputId = id || generatedId
    const isDisabled = disabled || context.disabled
    const variant = context.error ? 'danger' : context.variant || 'primary'

    // Check if this option is selected
    const isChecked = context.value === value

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      if (!isDisabled) {
        // If clicking the same option that's already selected, unselect it (set to null)
        const newValue = context.value === value ? null : value
        context.onChange?.(newValue)
      }
      // Always call the original onChange prop if provided
      props.onChange?.(event)
    }

    return (
      <>
        <input
          ref={ref}
          type='radio'
          id={inputId}
          name={context.name}
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
