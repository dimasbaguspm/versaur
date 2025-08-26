import React, { useId } from 'react'
import { cn } from '@/utils/cn'
import { chipSingleInputOptionVariants } from './helpers'
import { useChipSingleInputContext } from './context'
import type { ChipSingleInputOptionProps } from './types'

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
>(({ children, className, disabled, id, value, ...props }, ref) => {
  const {
    variant = 'primary',
    shape = 'circle',
    size = 'sm',

    ...context
  } = useChipSingleInputContext()
  const generatedId = useId()

  const inputId = id || generatedId

  const isDisabled = disabled || context.disabled

  const isChecked = context.value === value

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!isDisabled) {
      // Only one value can be selected
      context.onChange?.(value)
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
        data-selected={isChecked}
        className={cn(
          chipSingleInputOptionVariants({
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
