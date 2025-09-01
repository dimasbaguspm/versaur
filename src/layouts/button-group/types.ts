import type { HTMLAttributes, ReactNode } from 'react'
import type { VariantProps } from '@/utils/variants'
import type { buttonGroupVariants } from './helpers'

/**
 * Props for the ButtonGroup component
 */
export interface ButtonGroupProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof buttonGroupVariants> {
  /**
   * Children (should be Button components)
   */
  children: ReactNode

  /**
   * Alignment of buttons within the group
   * @default 'start'
   */
  alignment?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly'

  /**
   * Whether buttons should be fluid (full width)
   * @default false
   */
  fluid?: boolean

  /**
   * Orientation of the button group
   * @default 'horizontal'
   */
  orientation?: 'horizontal' | 'vertical'

  /**
   * Size of the gap between buttons
   * @default 'md'
   */
  gap?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'

  /**
   * Whether the badge group has bottom margin
   * @default false
   */
  hasMargin?: boolean
}
