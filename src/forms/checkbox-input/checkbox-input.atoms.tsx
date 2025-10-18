import React from 'react'
import { cn } from '@/utils/cn'
import { checkboxVariants, checkboxLabelVariants } from './helpers'
import { useCheckboxContext } from './context'
import type { CheckboxOptionProps } from './types'

/**
 * CheckboxOption atom component
 *
 * Individual checkbox option that can be used within CheckboxInput
 * Features custom styling with ::after pseudo-element for checkmark
 */
export const CheckboxOption = React.forwardRef<
  HTMLInputElement,
  CheckboxOptionProps
>(({ children, description, className, disabled, id, ...props }, ref) => {
  const context = useCheckboxContext()
  const generatedId = React.useId()
  const inputId = id || generatedId

  const isDisabled = disabled || context.disabled

  return (
    <div className='flex items-start gap-2'>
      <div className='relative flex items-center mt-0.5'>
        <input
          ref={ref}
          type='checkbox'
          id={inputId}
          disabled={isDisabled}
          className={cn(
            checkboxVariants(),
            // Custom checkmark styling using ::after - centered positioning
            'after:content-[""] after:absolute after:left-1/2 after:top-[45%] after:-translate-x-1/2 after:-translate-y-1/2 after:border-b-2 after:border-r-2 after:border-white after:rotate-45 after:opacity-0 after:transition-opacity after:duration-200',
            // Checkmark dimensions for md size (default)
            'after:w-[4px] after:h-[8px]',
            'checked:after:opacity-100',
            className
          )}
          {...props}
        />
      </div>
      <div className='flex flex-col'>
        <label
          htmlFor={inputId}
          className={checkboxLabelVariants({
            disabled: isDisabled,
          })}
        >
          {children}
        </label>
        {description && (
          <div
            className={cn(
              'text-xs text-gray-600 mt-1',
              isDisabled && 'opacity-50'
            )}
          >
            {description}
          </div>
        )}
      </div>
    </div>
  )
})

CheckboxOption.displayName = 'CheckboxOption'
