import type { ButtonHTMLAttributes, ReactNode } from 'react'
import type { VariantProps } from 'class-variance-authority'
import type { actionCardVariants } from './helpers'

/**
 * Props for the ActionCard component
 */
export interface ActionCardProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'title' | 'children'>,
    VariantProps<typeof actionCardVariants> {
  /**
   * Size variant affecting padding and spacing
   * @default 'md'
   */
  size?: 'sm' | 'md' | 'lg'

  /**
   * Icon element to display in the icon container
   */
  icon?: ReactNode

  /**
   * Main title text
   */
  title: ReactNode

  /**
   * Subtitle or description text
   */
  subtitle?: ReactNode

  /**
   * Badge element to display next to the title
   */
  badge?: ReactNode

  /**
   * Whether to show the chevron arrow
   * @default true
   */
  showArrow?: boolean

  /**
   * Is the action card a button or a div?
   * @default 'button'
   */
  as?: 'button' | 'div'
}

/**
 * Props for the ActionCard Group container
 */
export interface ActionCardGroupProps {
  /**
   * ActionCard components to display as a group
   */
  children: ReactNode

  /**
   * Additional CSS classes
   */
  className?: string

  /**
   * Size variant for all cards in the group
   * @default 'md'
   */
  size?: 'sm' | 'md' | 'lg'
}
