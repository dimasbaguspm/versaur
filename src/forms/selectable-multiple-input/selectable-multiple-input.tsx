import { forwardRef, useId } from 'react'
import type { SelectableMultipleInputProps } from './types'
import { cn } from '@/utils/cn'
import { selectableBoxClass, selectableMultipleInputRootClass } from './helpers'

/**
 * SelectableMultipleInput is a checkbox input with custom content and optional checkbox indicator
 * @see https://www.w3.org/WAI/ARIA/apg/patterns/checkbox/
 */
export const SelectableMultipleInput = forwardRef<
  HTMLInputElement,
  SelectableMultipleInputProps
>(
  (
    {
      value,
      children,
      checked,
      id,
      className,
      disabled,
      checkboxPlacement = 'center',
      hideCheckbox = false,
      ...props
    },
    ref
  ) => {
    const computedId = useId()
    const inputId = id || computedId

    // Resolve children - can be a ReactNode or a function
    const content =
      typeof children === 'function' ? children(checked) : children

    return (
      <label
        htmlFor={inputId}
        className={cn(
          selectableMultipleInputRootClass({
            checked: !!checked,
            disabled: !!disabled,
            checkboxPlacement,
            hideCheckbox,
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
        {!hideCheckbox && (
          <span
            className={cn(
              selectableBoxClass({
                checked: !!checked,
                disabled: !!disabled,
              }),
              // Custom checkmark styling using ::after - centered positioning
              'after:content-[""] after:absolute after:left-1/2 after:top-[45%] after:-translate-x-1/2 after:-translate-y-1/2 after:border-b-2 after:border-r-2 after:border-white after:rotate-45 after:opacity-0 after:transition-opacity after:duration-200',
              // Checkmark dimensions scaled up for h-6 w-6 size
              'after:w-[6px] after:h-[12px]',
              checked && 'after:opacity-100'
            )}
            aria-hidden='true'
          />
        )}
        <span className='flex-1 min-w-0 text-base text-foreground'>
          {content}
        </span>
      </label>
    )
  }
)

SelectableMultipleInput.displayName = 'SelectableMultipleInput'
