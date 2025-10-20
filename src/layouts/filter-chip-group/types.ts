import type { HTMLAttributes, ReactNode } from 'react'
import type { VariantProps } from '@/utils/variants'
import type { filterChipGroupVariants } from './helpers'

/**
 * Props for the FilterChipGroup component
 */
export interface FilterChipGroupProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof filterChipGroupVariants> {
  /**
   * Children (should be FilterChip components)
   */
  children: ReactNode

  /**
   * Alignment of filter chips within the group
   * @default 'start'
   */
  alignment?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly'

  /**
   * Whether filter chips should be fluid (full width)
   * @default false
   */
  fluid?: boolean

  /**
   * Orientation of the filter chip group
   * @default 'horizontal'
   */
  orientation?: 'horizontal' | 'vertical'

  /**
   * Size of the gap between filter chips
   * @default 'md'
   */
  gap?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'

  /**
   * Whether the badge group has bottom margin
   * @default false
   */
  hasMargin?: boolean

  /**
   * Whether items should overlay in single line without wrapping
   * @default false
   */
  overlay?: boolean
}
