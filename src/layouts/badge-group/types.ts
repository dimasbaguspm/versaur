import type { HTMLAttributes, ReactNode } from 'react'
import type { VariantProps } from '@/utils/variants'
import type { badgeGroupVariants } from './helpers'

/**
 * Props for the BadgeGroup component
 */
export interface BadgeGroupProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeGroupVariants> {
  /**
   * Children (should be Badge components)
   */
  children: ReactNode

  /**
   * Alignment of badges within the group
   * @default 'start'
   */
  alignment?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly'

  /**
   * Whether badges should be fluid (full width)
   * @default false
   */
  fluid?: boolean

  /**
   * Orientation of the badge group
   * @default 'horizontal'
   */
  orientation?: 'horizontal' | 'vertical'

  /**
   * Size of the gap between badges
   * @default 'md'
   */
  gap?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'

  /**
   * Whether the badge group has bottom margin
   * @default false
   */
  hasMargin?: boolean
}
