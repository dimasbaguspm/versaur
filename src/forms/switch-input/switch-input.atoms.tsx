import React from 'react'
import { cn } from '@/utils/cn'
import { switchVariants, thumbVariants } from './helpers'
import type { SwitchInputProps } from './types'

/**
 * Track for SwitchInput
 * Renders the background track with color, size, and disabled state
 */
export const SwitchTrack: React.FC<
  Pick<SwitchInputProps, 'color' | 'size' | 'disabled'> & {
    className?: string
    checked?: boolean
  }
> = ({
  color = 'primary',
  size = 'md',
  disabled = false,
  className,
  checked,
}) => (
  <span
    className={cn(
      switchVariants({ color, size, disabled, checked }),
      'rounded-full pointer-events-none',
      className
    )}
    aria-hidden='true'
  />
)

/**
 * Thumb for SwitchInput
 * Renders the thumb with size and checked state
 */
export const SwitchThumb: React.FC<{
  size?: 'sm' | 'md' | 'lg'
  checked?: boolean
}> = ({ size = 'md', checked = false }) => (
  <span className={cn(thumbVariants({ size, checked }))} aria-hidden='true' />
)

/**
 * Label for SwitchInput
 * Renders the label with placement and disabled state
 */
export const SwitchLabel: React.FC<{
  label?: string
  htmlFor?: string
  placement?: 'top' | 'inline'
  disabled?: boolean
}> = ({ label, htmlFor, placement = 'top', disabled = false }) =>
  label ? (
    <label
      htmlFor={htmlFor}
      className={cn(
        'text-sm select-none font-medium text-foreground',
        placement === 'inline' ? 'ml-2 mb-0' : 'mb-1',
        disabled && 'opacity-50 cursor-not-allowed'
      )}
    >
      {label}
    </label>
  ) : null
