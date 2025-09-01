import { forwardRef } from 'react'
import { cn } from '@/utils/cn'
import { hrVariants } from './helpers'
import type { HrProps } from './types'

/**
 * Hr component for creating a horizontal line separator with optional margin
 *
 * Follows the Regular Pattern - a simple styled wrapper that aligns with standard HTML behavior.
 * Creates a 1px height horizontal line with border color and optional bottom margin.
 *
 * @example
 * ```tsx
 * // Basic usage
 * <Hr />
 *
 * // With bottom margin
 * <Hr hasMargin />
 *
 * // With custom className
 * <Hr className="my-8" />
 * ```
 */
export const Hr = forwardRef<HTMLHRElement, HrProps>(
  ({ hasMargin = false, className, ...props }, ref) => {
    return (
      <hr
        ref={ref}
        className={cn(hrVariants({ hasMargin }), className)}
        {...props}
      />
    )
  }
)
