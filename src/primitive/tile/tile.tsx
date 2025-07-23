import { forwardRef } from 'react'
import { cn } from '@/utils'
import { tileVariants } from './helpers'
import type { TileProps } from './types'

/**
 * Tile component - A flexible box container with various styling options
 *
 * Features:
 * - Multiple color variants with soft backgrounds
 * - Configurable padding sizes
 * - Rounded or square shapes
 * - Accessible and semantic
 */
export const Tile = forwardRef<HTMLDivElement, TileProps>(
  (
    { variant = 'white', size = 'md', shape = 'rounded', className, ...props },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(tileVariants({ variant, size, shape }), className)}
        {...props}
      />
    )
  }
)
