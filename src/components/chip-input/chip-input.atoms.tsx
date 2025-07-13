import React from 'react'
import { cn } from '@/utils/cn'
import { chipOptionVariants } from './helpers'
import { useChipInputContext } from './context'
import type { ChipInputOptionProps } from './types'
import { X } from 'lucide-react'

/**
 * ChipInput.Option atom component
 *
 * Individual chip option for ChipInput
 * Uses checkbox input pattern for multiple selection
 */
export const ChipOption = React.forwardRef<
  HTMLInputElement,
  ChipInputOptionProps
>(({ children, className, disabled, id, value, ...props }, ref) => {
  const context = useChipInputContext()
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
          chipOptionVariants({
            variant,
            selected: isChecked,
          }),
          isDisabled && 'opacity-50 cursor-not-allowed pointer-events-none',
          className
        )}
      >
        <span className='flex items-center gap-1'>
          {children}
          {isChecked && (
            <button
              type='button'
              aria-label={`Remove ${children}`}
              tabIndex={isDisabled ? -1 : 0}
              className={cn(
                'ml-1 p-0.5 rounded-full hover:bg-slate-100',
                isDisabled && 'opacity-50 pointer-events-none'
              )}
              disabled={isDisabled}
            >
              <X size={16} aria-hidden='true' />
            </button>
          )}
        </span>
      </label>
    </>
  )
})

ChipOption.displayName = 'ChipOption'
