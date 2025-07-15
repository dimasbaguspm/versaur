import React from 'react'
import { cn } from '@/utils/cn'
import { barVariants, spinnerVariants, getBarBgClass } from './helpers'
import type { LoadingIndicatorProps } from './types'

/**
 * SpinnerAtom - circular loading indicator
 */
export const SpinnerAtom = React.forwardRef<
  HTMLDivElement,
  LoadingIndicatorProps
>(
  (
    {
      color = 'primary',
      size = 'md',
      ariaLabel = 'Loading',
      className,
      ...props
    },
    ref
  ) => (
    <div
      ref={ref}
      role='status'
      aria-label={ariaLabel}
      className={cn(spinnerVariants({ color, size }), className)}
      {...props}
    />
  )
)

/**
 * BarAtom - linear loading indicator
 */
export const BarAtom = React.forwardRef<HTMLDivElement, LoadingIndicatorProps>(
  (
    {
      color = 'primary',
      size = 'md',
      ariaLabel = 'Loading',
      className,
      ...props
    },
    ref
  ) => (
    <div
      ref={ref}
      role='progressbar'
      aria-label={ariaLabel}
      className={cn(
        barVariants({ color, size }),
        'bg-neutral/40 relative overflow-hidden',
        className
      )}
      {...props}
    >
      <div
        className={cn(
          'absolute left-0 top-0 w-full h-full rounded bg-neutral/40 pointer-events-none'
        )}
        aria-hidden='true'
      />
      <div
        className={cn(
          'absolute left-0 top-0 h-full w-1/3 animate-loading-bar rounded-full',
          getBarBgClass(color)
        )}
        aria-hidden='true'
      />
    </div>
  )
)
