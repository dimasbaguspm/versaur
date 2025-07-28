import React from 'react'
import { cn } from '@/utils/cn'
import { chipSingleInputOptionVariants } from './helpers'
import { useChipSingleInputContext } from './context'
import type { ChipSingleInputOptionProps } from './types'
import { Check } from 'lucide-react'

/**
 * ChipSingleInput.Option atom component
 *
 * Individual chip option for ChipSingleInput
 * Uses radio input pattern for single selection
 * Supports leading icon and animated tick/check
 */
export const ChipSingleInputOption = React.forwardRef<
  HTMLInputElement,
  ChipSingleInputOptionProps
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
    const context = useChipSingleInputContext()
    const generatedId = React.useId()
    const inputId = id || generatedId
    const isDisabled = disabled || context.disabled
    // Only use supported variants for styling
    const supportedVariants = [
      'primary',
      'secondary',
      'tertiary',
      'ghost',
      'neutral',
    ] as const
    type SupportedVariant = (typeof supportedVariants)[number]
    const variant: SupportedVariant = supportedVariants.includes(
      context.variant as SupportedVariant
    )
      ? (context.variant as SupportedVariant)
      : 'primary'
    const shape = context.shape || 'circle'
    const size = context.size || 'sm'

    // Check if this option is selected
    const isChecked = context.value === value

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      if (!isDisabled) {
        // Only one value can be selected
        context.onChange?.(value)
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
          data-selected={isChecked}
          className={cn(
            chipSingleInputOptionVariants({
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
                                : variant === 'neutral'
                                  ? 'text-neutral'
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
