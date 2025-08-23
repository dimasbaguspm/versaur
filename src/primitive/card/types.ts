import type { HTMLAttributes, ReactNode } from 'react'
import type { VariantProps } from 'class-variance-authority'
import type { cardVariants } from './helpers'

/**
 * Props for the Card component
 */
export interface CardProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'title' | 'children'>,
    VariantProps<typeof cardVariants> {
  /**
   * Size variant affecting padding
   * @default 'md'
   */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'

  /**
   * Shape variant affecting border radius
   * @default 'rounded'
   */
  shape?: 'rounded' | 'square'

  /**
   * Avatar element to display on the left side
   */
  avatar?: ReactNode

  /**
   * Main title text
   */
  title: ReactNode

  /**
   * Subtitle or description text
   */
  subtitle?: ReactNode

  /**
   * Badge element to display in the header area
   */
  badge?: ReactNode

  /**
   * Supplementary information to display on the right side
   * Usually used for amounts, status, or additional info
   */
  supplementaryInfo?: ReactNode
}
