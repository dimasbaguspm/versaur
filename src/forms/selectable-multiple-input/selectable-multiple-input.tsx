import { forwardRef, useId } from 'react'
import type { SelectableMultipleInputProps } from './types'
import { cn } from '@/utils/cn'
import { Icon } from '@/primitive/icon'
import { Check } from 'lucide-react'
import { selectableBoxClass, selectableMultipleInputRootClass } from './helpers'

/**
 * SelectableMultipleInput is a checkbox input with a custom label and checked icon
 * @see https://www.w3.org/WAI/ARIA/apg/patterns/checkbox/
 */
export const SelectableMultipleInput = forwardRef<
  HTMLInputElement,
  SelectableMultipleInputProps
>(({ value, label, checked, id, className, disabled, ...props }, ref) => {
  const computedId = useId()
  const inputId = id || computedId

  return (
    <label
      htmlFor={inputId}
      className={cn(
        selectableMultipleInputRootClass({
          checked: !!checked,
          disabled: !!disabled,
        }),
        className
      )}
      aria-checked={checked}
      role='checkbox'
      aria-label={`Select ${value}`}
      tabIndex={disabled ? -1 : 0}
    >
      <input
        ref={ref}
        id={inputId}
        type='checkbox'
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
