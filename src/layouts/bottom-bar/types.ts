import type { ButtonHTMLAttributes, HTMLAttributes, ReactNode } from 'react'

/**
 * Props for the BottomBar container
 */
export interface BottomBarProps extends HTMLAttributes<HTMLElement> {
  /**
   * Visual variant for the BottomBar
   * @default 'primary'
   */
  variant?: 'primary' | 'secondary' | 'ghost' | 'neutral' | 'tertiary'
  /**
   * Size of the BottomBar
   * @default 'md'
   */
  size?: 'sm' | 'md' | 'lg'
}

/**
 * Props for each BottomBar.Item
 */
export interface BottomBarItemProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  as?: 'div' | 'button'
  /**
   * Icon element for the item
   */
  icon?: ReactNode
  /**
   * Label for the item
   */
  label?: string
  /**
   * Whether the item is active
   */
  active?: boolean
}
