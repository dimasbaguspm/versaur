import type { HTMLAttributes } from 'react'
import type { VariantProps } from 'class-variance-authority'
import type { tileVariants } from './helpers'

/**
 * Props for the Tile component
 */
export interface TileProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof tileVariants> {
  /**
   * Visual appearance variant
   * @default 'white'
   */
  variant?:
    | 'white'
    | 'neutral'
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'ghost'
    | 'success'
    | 'info'
    | 'warning'
    | 'danger'

  /**
   * Size variant affecting padding
   * @default 'md'
   */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'

  /**
   * Shape variant for border radius
   * @default 'rounded'
   */
  shape?: 'rounded' | 'square'
}
