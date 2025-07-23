import React, { useId, useState } from 'react'
import { SwitchTrack, SwitchThumb, SwitchLabel } from './switch-input.atoms'
import type { SwitchInputProps } from './types'
import { cn } from '@/utils/cn'

/**
 * SwitchInput component for toggling boolean state
 */
export const SwitchInput = React.forwardRef<HTMLInputElement, SwitchInputProps>(
  (
    {
      checked,
      defaultChecked,
      onCheckedChange,
      color = 'primary',
      size = 'md',
      label,
      labelPlacement = 'top',
      disabled = false,
      className,
      id,
      ariaLabel,
      ...props
    },
    ref
  ) => {
    const [internalChecked, setInternalChecked] = useState(
      defaultChecked ?? false
    )
    const generatedId = useId()

    const inputId = id || generatedId
    const isControlled = typeof checked === 'boolean'
    const isChecked = isControlled ? checked : internalChecked

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (!isControlled) setInternalChecked(e.target.checked)
      onCheckedChange?.(e.target.checked)
    }

    return (
      <div
        className={cn(
          'flex flex-col',
          labelPlacement === 'inline' && 'flex-row items-center',
          className
        )}
      >
        <SwitchLabel
          label={label}
          htmlFor={inputId}
          placement={labelPlacement}
          disabled={disabled}
        />

        <span
          className={cn(
            'relative flex items-center',
            labelPlacement === 'inline' && 'ml-2'
          )}
        >
          <input
            ref={ref}
            type='checkbox'
            id={inputId}
            aria-label={ariaLabel || label}
            checked={isChecked}
            disabled={disabled}
            onChange={handleChange}
            className='absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10'
            {...props}
          />
          <SwitchTrack
            color={color}
            size={size}
            disabled={disabled}
            checked={isChecked}
          />
          <SwitchThumb size={size} checked={isChecked} />
        </span>
      </div>
    )
  }
)
SwitchInput.displayName = 'SwitchInput'
