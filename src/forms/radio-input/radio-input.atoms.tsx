import React from 'react'
import { cn } from '@/utils/cn'
import { radioOptionVariants, radioLabelVariants } from './helpers'
import { useRadioInputContext } from './context'
import type { RadioOptionProps } from './types'

/**
 * RadioInput.Option atom component
 *
 * Individual radio option that can be used within RadioInput
 * Features custom styling with ::before pseudo-element for radio dot
 */
export const RadioOption = React.forwardRef<HTMLInputElement, RadioOptionProps>(
  (
    { children, description, className, disabled, id, value, ...props },
    ref
  ) => {
    const context = useRadioInputContext()
    const generatedId = React.useId()
    const inputId = id || generatedId

    const isDisabled = disabled || context.disabled
    const variant = context.error ? 'danger' : context.variant || 'primary'

    return (
      <div className='flex items-center gap-2'>
        <div className='relative flex items-center'>
          <input
            ref={ref}
            type='radio'
            id={inputId}
            name={context.name}
            value={value}
            disabled={isDisabled}
            className={cn(
              radioOptionVariants({
                variant,
                size: context.size,
              }),
              // Custom radio dot styling using ::before - centered positioning with size variants
              'before:content-[""] before:absolute before:left-1/2 before:top-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-full before:bg-white before:opacity-0 before:transition-opacity before:duration-200',
              // Size-specific radio dot dimensions
              context.size === 'sm' && 'before:w-[6px] before:h-[6px]',
              context.size === 'md' && 'before:w-[8px] before:h-[8px]',
              context.size === 'lg' && 'before:w-[10px] before:h-[10px]',
              'checked:before:opacity-100',
              // Outline variants use colored radio dot
              variant?.includes('outline') && 'checked:before:bg-current',
              className
            )}
            {...props}
          />
        </div>
        <div className='flex-1'>
          <label
            htmlFor={inputId}
            className={radioLabelVariants({
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
  }
)
