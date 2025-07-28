import React from 'react'
import { cn } from '@/utils/cn'
import { chipOptionVariants } from './helpers'
import { useChipMultipleInputContext } from './context'
import type { ChipMultipleInputOptionProps } from './types'
import { Check } from 'lucide-react'

/**
 * ChipMultipleInput.Option atom component
 *
 * Individual chip option for ChipMultipleInput
 * Uses checkbox input pattern for multiple selection
 * Supports leading icon and animated tick/check
 */
export const ChipMultipleOption = React.forwardRef<
  HTMLInputElement,
  ChipMultipleInputOptionProps
>(
  (
    {
      children,
      className,
      disabled,
      id,
      value,
      check,
      defaultCheck = false,
      ...props
    },
    ref
  ) => {
    const context = useChipMultipleInputContext()
    const generatedId = React.useId()
    const inputId = id || generatedId
    const isDisabled = disabled || context.disabled
    const variant = context.error ? 'danger' : context.variant || 'primary'
    const shape = context.shape || 'circle'
    const size = context.size || 'sm'

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

    // Icon size map for each chip size
    const iconSize = size === 'lg' ? 20 : size === 'md' ? 18 : 16

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
              shape,
              size,
            }),
            isDisabled && 'opacity-50 cursor-not-allowed pointer-events-none',
            className
          )}
        >
          <span className='flex items-center'>
            {/* Custom check, default check, or nothing */}
            {(check || defaultCheck) && (
              <span
                className={cn(
                  'flex items-center',
                  'transition-transform transition-opacity duration-200',
                  isChecked
                    ? 'opacity-100 scale-100 mr-1'
                    : 'opacity-0 scale-75'
                )}
                aria-hidden='true'
              >
                {isChecked &&
                  (check ? (
                    check
                  ) : (
                    <Check
                      size={iconSize}
                      className={
                        variant === 'primary'
                          ? 'text-primary'
                          : variant === 'secondary'
                            ? 'text-secondary'
                            : variant === 'tertiary'
                              ? 'text-tertiary'
                              : variant === 'ghost'
                                ? 'text-ghost'
                                : variant === 'success'
                                  ? 'text-success'
                                  : variant === 'info'
                                    ? 'text-info'
                                    : variant === 'warning'
                                      ? 'text-warning'
                                      : variant === 'danger'
                                        ? 'text-danger'
                                        : 'text-primary'
                      }
                    />
                  ))}
              </span>
            )}
            {children}
          </span>
        </label>
      </>
    )
  }
)

ChipMultipleOption.displayName = 'ChipMultipleOption'
