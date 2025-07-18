import * as React from 'react'
import { cn } from '@/utils/cn'
import { skeletonVariants } from './helpers'
import type { SkeletonProps } from './types'

/**
 * Skeleton is a placeholder loading component that supports shape, size, color, and rows variations
 */
export const Skeleton = React.forwardRef<HTMLDivElement, SkeletonProps>(
  function Skeleton(
    { shape = 'rounded', size = 'md', height, className, style, ...props },
    ref
  ) {
    const allowedSizes = ['sm', 'md', 'lg', 'xl'] as const
    type AllowedSize = (typeof allowedSizes)[number]
    const resolvedSize: AllowedSize = allowedSizes.includes(size as AllowedSize)
      ? (size as AllowedSize)
      : 'md'

    const mergedStyle = height
      ? {
          ...style,
          height: typeof height === 'number' ? `${height}px` : height,
        }
      : style

    return (
      <div
        ref={ref}
        role='presentation'
        className={cn(
          'relative',
          skeletonVariants({ shape, size: resolvedSize }),
          className
        )}
        style={mergedStyle}
        aria-hidden={'true'}
        {...props}
      >
        <span
          className={[
            'absolute inset-0 block w-full h-full',
            'animate-loading-bar',
            'bg-gradient-to-r from-transparent via-white/60 to-transparent pointer-events-none',
          ].join(' ')}
          aria-hidden={'true'}
        />
      </div>
    )
  }
)
