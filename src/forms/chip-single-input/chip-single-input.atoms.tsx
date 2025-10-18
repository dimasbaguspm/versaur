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
 * Supports text truncation with maxWidth and icon-only mode
 */
export const ChipSingleInputOption = React.forwardRef<
  HTMLInputElement,
  ChipSingleInputOptionProps
>(({ children, className, disabled, id, value, ...props }, ref) => {
  const { size = 'md', maxWidth, ...context } = useChipSingleInputContext()
  const generatedId = useId()

  const inputId = id || generatedId

  const isDisabled = disabled || context.disabled
  const isReadOnly = context.readOnly

  const isChecked = context.value === value

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!isDisabled && !isReadOnly) {
      context.onChange?.(value)
    }
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
          chipSingleInputOptionVariants({
            size,
          }),
          isDisabled && 'opacity-50 cursor-not-allowed pointer-events-none',
          isReadOnly && 'cursor-default pointer-events-none',
          className
        )}
      >
        <span
          className={cn(
            'flex items-center gap-2',
            maxWidth && 'truncate text-ellipsis overflow-hidden w-full'
          )}
        >
          {children}
        </span>
      </label>
    </>
  )
})
