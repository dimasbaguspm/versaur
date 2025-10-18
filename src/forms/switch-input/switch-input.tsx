import React from 'react'
import { SwitchTrack, SwitchThumb, SwitchLabel } from './switch-input.atoms'
import type { SwitchInputProps } from './types'
import { cn } from '@/utils/cn'

/**
 * SwitchInput component for Versaur UI
 *
 * A controlled switch input component for boolean toggles that aligns with native HTML input element
 * Follows browser standards and accessibility best practices with proper ARIA attributes
 * Always uses inline label placement for consistent layout
 */
export const SwitchInput = React.forwardRef<HTMLInputElement, SwitchInputProps>(
  (
    {
      value,
      onChange,
      label,
      disabled = false,
      required = false,
      className,
      id,
      ariaLabel,
      ...props
    },
    ref
  ) => {
    const generatedId = React.useId()
    const inputId = id || generatedId
    const isChecked = value ?? false

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange?.(e.target.checked)
    }

    return (
      <div className={cn('inline-flex items-center gap-2', className)}>
        <span className='relative inline-flex items-center'>
          <input
            ref={ref}
            type='checkbox'
            role='switch'
            id={inputId}
            aria-label={ariaLabel || label}
            aria-checked={isChecked}
            checked={isChecked}
            disabled={disabled}
            required={required}
            onChange={handleChange}
            className='absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10 disabled:cursor-not-allowed'
            {...props}
          />
          <SwitchTrack disabled={disabled} checked={isChecked} />
          <SwitchThumb checked={isChecked} />
        </span>

        <SwitchLabel
          label={label}
          htmlFor={inputId}
          disabled={disabled}
          required={required}
        />
      </div>
    )
  }
)
SwitchInput.displayName = 'SwitchInput'
