import { forwardRef, useId } from 'react'
import type { SelectableSingleInputProps } from './types'
import { cn } from '@/utils/cn'
import { selectableBoxClass, selectableSingleInputRootClass } from './helpers'

/**
 * SelectableSingleInput is a radio input with custom content and optional checkbox indicator
 * @see https://www.w3.org/WAI/ARIA/apg/patterns/radio/
 */
export const SelectableSingleInput = forwardRef<
  HTMLInputElement,
  SelectableSingleInputProps
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
          selectableSingleInputRootClass({
            checked: !!checked,
            disabled: !!disabled,
            checkboxPlacement,
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

SelectableSingleInput.displayName = 'SelectableSingleInput'
