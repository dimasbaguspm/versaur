import type { HTMLAttributes, MouseEvent, ReactNode } from 'react'
import type { PopoverPlacement } from '@/utils/popover'

export type MenuSize = 'sm' | 'md'

/**
 * Props for Menu
 */
export interface MenuProps {
  /** Whether the menu is open (controlled) */
  isOpen: boolean
  /** Callback when the menu closes */
  onClose: () => void
  /** Menu size variant */
  size?: MenuSize
  /** Menu content (MenuContent/MenuItem) */
  content: ReactNode
  /** Trigger element */
  children: ReactNode
  /** Preferred placement of the menu relative to trigger */
  placement?: PopoverPlacement
  /** Gap between trigger and menu in pixels */
  gap?: number
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
  /** Click handler */
  onClick?: (ev: MouseEvent<HTMLButtonElement>) => void
  /** Whether the item is active */
  active?: boolean
}
