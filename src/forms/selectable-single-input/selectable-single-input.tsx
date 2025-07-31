import { forwardRef, useId } from 'react'
import type { SelectableSingleInputProps } from './types'
import { cn } from '@/utils/cn'
import { Icon } from '@/primitive/icon'
import { Check } from 'lucide-react'
import { selectableBoxClass, selectableSingleInputRootClass } from './helpers'

/**
 * SelectableSingleInput is a radio input with a custom label and checked icon
 * @see https://www.w3.org/WAI/ARIA/apg/patterns/radio/
 */
export const SelectableSingleInput = forwardRef<
  HTMLInputElement,
  SelectableSingleInputProps
>(({ value, label, checked, id, className, disabled, ...props }, ref) => {
  const computedId = useId()
  const inputId = id || computedId

  return (
    <label
      htmlFor={inputId}
      className={cn(
        selectableSingleInputRootClass({
          checked: !!checked,
          disabled: !!disabled,
        }),
        className
      )}
      aria-checked={checked}
      role='radio'
      aria-label={`Select ${value}`}
      tabIndex={disabled ? -1 : 0}
    >
      <input
        ref={ref}
        id={inputId}
        type='radio'
        value={value}
        checked={checked}
        disabled={disabled}
        className='sr-only'
        aria-hidden
        aria-checked={checked}
        {...props}
      />
      <span
        className={selectableBoxClass({
          checked: !!checked,
          disabled: !!disabled,
        })}
        aria-hidden='true'
      >
        {checked ? <Icon as={Check} color='neutral' size='md' /> : null}
      </span>
      <span className='flex-1 min-w-0 text-base text-foreground'>{label}</span>
    </label>
  )
})
