/**
 * Menu types for Versaur
 */
import type { HTMLAttributes, ReactNode } from 'react'

export type MenuSize = 'sm' | 'md'
export type MenuPlacement =
  | 'bottom-start'
  | 'bottom-end'
  | 'top-start'
  | 'top-end'
  | 'auto'

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
  /** Preferred placement of the menu relative to trigger */
  placement?: MenuPlacement
  /** Container element to respect boundaries (defaults to viewport) */
  container?: HTMLElement | null
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
export interface MenuItemProps extends HTMLAttributes<HTMLLIElement> {
  /** Item content */
  children: ReactNode
  /** Whether the item is disabled */
  disabled?: boolean
}
