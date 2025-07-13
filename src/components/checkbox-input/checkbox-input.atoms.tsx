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
  const variant = context.error ? 'danger' : context.variant || 'primary'

  return (
    <div className='flex items-center gap-2'>
      <div className='relative flex items-center'>
        <input
          ref={ref}
          type='checkbox'
          id={inputId}
          disabled={isDisabled}
          className={cn(
            checkboxVariants({
              variant,
              size: context.size,
            }),
            // Custom checkmark styling using ::after - centered positioning with size variants
            'after:content-[""] after:absolute after:left-1/2 after:top-[45%] after:-translate-x-1/2 after:-translate-y-1/2 after:border-b-2 after:border-r-2 after:border-white after:rotate-45 after:opacity-0 after:transition-opacity after:duration-200',
            // Size-specific checkmark dimensions
            context.size === 'sm' && 'after:w-[3px] after:h-[6px]',
            context.size === 'md' && 'after:w-[4px] after:h-[8px]',
            context.size === 'lg' && 'after:w-[6px] after:h-[10px]',
            'checked:after:opacity-100',
            // Outline variants use colored checkmark
            variant?.includes('outline') && 'checked:after:border-current',
            className
          )}
          {...props}
        />
      </div>
      <div className='flex-1'>
        <label
          htmlFor={inputId}
          className={checkboxLabelVariants({
            size: context.size,
            disabled: isDisabled,
          })}
        >
          {children}
        </label>
        {description && (
          <div
            className={cn(
              'text-gray-600 mt-1',
              context.size === 'sm' && 'text-xs',
              context.size === 'md' && 'text-xs',
              context.size === 'lg' && 'text-sm',
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
