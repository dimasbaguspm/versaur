import React from 'react'
import { cn } from '@/utils/cn'
import { chipOptionVariants } from './helpers'
import { useChipInputContext } from './context'
import type { ChipInputOptionProps } from './types'
import { Check } from 'lucide-react'

/**
 * ChipInput.Option atom component
 *
 * Individual chip option for ChipInput
 * Uses checkbox input pattern for multiple selection
 * Supports leading icon and animated tick/check
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
        data-selected={isChecked}
        className={cn(
          chipOptionVariants({
            variant,
            selected: isChecked,
          }),
          isDisabled && 'opacity-50 cursor-not-allowed pointer-events-none',
          className
        )}
      >
        <span className='flex items-center'>
          {/* Check icon color matches variant */}
          <span
            className={cn(
              'flex items-center',
              'transition-transform transition-opacity duration-200',
              isChecked ? 'opacity-100 scale-100 mr-1' : 'opacity-0 scale-75'
            )}
            aria-hidden='true'
          >
            {isChecked && (
              <Check
                size={16}
                className={
                  variant === 'primary'
                    ? 'text-coral'
                    : variant === 'secondary'
                      ? 'text-sage'
                      : variant === 'tertiary'
                        ? 'text-mist'
                        : variant === 'ghost'
                          ? 'text-slate'
                          : variant === 'success'
                            ? 'text-success'
                            : variant === 'info'
                              ? 'text-info'
                              : variant === 'warning'
                                ? 'text-warning'
                                : variant === 'danger'
                                  ? 'text-danger'
                                  : 'text-coral'
                }
              />
            )}
          </span>

          {children}
        </span>
      </label>
    </>
  )
})

ChipOption.displayName = 'ChipOption'
