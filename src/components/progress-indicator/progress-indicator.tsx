import { forwardRef } from 'react'
import { cn } from '@/utils/cn'
import type { ProgressIndicatorProps } from './types'
import { progressIndicatorLine } from './helpers'

/**
 * ProgressIndicator — Versaur UI
 *
 * A linear progress indicator for loading states
 */
export const ProgressIndicator = forwardRef<
  HTMLDivElement,
  ProgressIndicatorProps
>(({ value, max = 100, color = 'primary', className, ...props }, ref) => {
  const percentValue = Math.max(0, Math.min(value, max))
  return (
    <div
      ref={ref}
      role='progressbar'
      aria-valuenow={percentValue}
      aria-valuemin={0}
      aria-valuemax={max}
      className={cn(
        'relative h-0.5 w-full overflow-hidden bg-neutral-soft', // thinner bar
        className
      )}
      {...props}
    >
      <div
        className={progressIndicatorLine({ color, indeterminate: false })}
        style={{
          width: `${(percentValue / max) * 100}%`,
          transition: 'width 0.4s cubic-bezier(0.4,0,0.2,1)',
        }}
      />
    </div>
  )
})
