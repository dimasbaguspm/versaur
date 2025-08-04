/**
 * Menu types for Versaur
 */
import type { ButtonHTMLAttributes, HTMLAttributes, ReactNode } from 'react'

export type MenuSize = 'sm' | 'md'

/**
 * Props for Menu
 */
export interface MenuProps {
  /** Whether the menu is open (controlled externally) */
  isOpen: boolean
  /** Callback when clicking outside menu */
  onOutsideClick: () => void
  /** Menu size variant */
  size?: MenuSize
  /** Menu content (MenuContent/MenuItem) */
  content: ReactNode
  /** Trigger element */
  children: ReactNode
}

/**
 * Props for MenuContent
 */
export interface MenuContentProps extends HTMLAttributes<HTMLUListElement> {
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
