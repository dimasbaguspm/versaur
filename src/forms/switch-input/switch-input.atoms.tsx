import React from 'react'
import { cn } from '@/utils/cn'
import { switchVariants, thumbVariants } from './helpers'

/**
 * Track for SwitchInput
 * Renders the background track with disabled and checked state
 */
export const SwitchTrack: React.FC<{
  disabled?: boolean
  checked?: boolean
  className?: string
}> = ({ disabled = false, checked = false, className }) => (
  <span
    className={cn(
      switchVariants({ disabled, checked }),
      'pointer-events-none',
      className
    )}
    aria-hidden='true'
  />
)

/**
 * Thumb for SwitchInput
 * Renders the thumb with checked state
 */
export const SwitchThumb: React.FC<{
  checked?: boolean
}> = ({ checked = false }) => (
  <span className={cn(thumbVariants({ checked }))} aria-hidden='true' />
)

/**
 * Label for SwitchInput
 * Renders the label inline with required asterisk support
 */
export const SwitchLabel: React.FC<{
  label?: string
  htmlFor?: string
  disabled?: boolean
  required?: boolean
}> = ({ label, htmlFor, disabled = false, required = false }) =>
  label ? (
    <label
      htmlFor={htmlFor}
      className={cn(
        'text-sm select-none font-medium text-foreground',
        disabled && 'opacity-50 cursor-not-allowed'
      )}
    >
      {label}
      {required && (
        <span className='text-danger ml-1' aria-label='required'>
          *
        </span>
      )}
    </label>
  ) : null
