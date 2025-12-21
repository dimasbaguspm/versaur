import React, { forwardRef } from 'react'
import { cn } from '@/utils'
import { tileVariants } from './helpers'
import type { TileProps } from './types'

type TileComponent = React.ForwardRefExoticComponent<
  TileProps & React.RefAttributes<HTMLDivElement>
> & {
  /** Props type alias exposed as Tile.Props */
  Props: TileProps
}

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
    {
      as: Component = 'div',
      variant = 'white',
      size = 'md',
      shape = 'rounded',
      className,
      ...props
    },
    ref
  ) => {
    return (
      <Component
        ref={ref}
        className={cn(tileVariants({ variant, size, shape }), className)}
        {...props}
      />
    )
  }
) as TileComponent
