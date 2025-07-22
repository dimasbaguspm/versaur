/**
 * Menu component types
 */
import type { ReactNode, ButtonHTMLAttributes, HTMLAttributes } from 'react'

export type MenuSize = 'sm' | 'md'
/**
 * Props for MenuRoot
 */
export interface MenuRootProps {
  /** Menu children (Trigger, Content, etc) */
  children: ReactNode
  /** open state */
  isOpen: boolean
  /** Callback when open state changes */
  onOutsideClick: () => void
  /** Menu size variant */
  size?: MenuSize
}

/**
 * Props for MenuTrigger
 */
export interface MenuTriggerProps extends HTMLAttributes<HTMLSpanElement> {
  /** Trigger content */
  children: ReactNode
}

/**
 * Props for MenuContent
 */
export interface MenuContentProps extends HTMLAttributes<HTMLDivElement> {
  /** Menu items */
  children: ReactNode
}

/**
 * Props for MenuItem
 */
export interface MenuItemProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Item content */
  children: ReactNode
}
