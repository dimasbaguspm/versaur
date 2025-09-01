import type { HTMLAttributes, MouseEvent, ReactNode, RefObject } from 'react'

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
  container?: HTMLElement | RefObject<HTMLElement | null> | null
  /** Whether to keep the menu after list item clicked */
  preserve?: boolean
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
export interface MenuItemProps
  extends Omit<HTMLAttributes<HTMLLIElement>, 'onClick'> {
  /** Item content */
  children: ReactNode
  /** Whether the item is disabled */
  disabled?: boolean
  onClick?: (ev: MouseEvent<HTMLButtonElement>) => void
}
