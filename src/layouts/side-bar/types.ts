import type { HTMLAttributes, AnchorHTMLAttributes, ReactNode } from 'react'

/**
 * Props for the SideBar root component
 */
export interface SideBarProps extends HTMLAttributes<HTMLElement> {
  /**
   * Children nodes (SideBar.Item, SideBar.Group)
   */
  children: ReactNode
  /**
   * Whether the sidebar starts in collapsed state
   * @default false (expanded)
   */
  defaultCollapsed?: boolean
  /**
   * Callback when collapse state changes
   */
  onCollapseChange?: (collapsed: boolean) => void
}

/**
 * Props for the SideBar.Item component (anchor only)
 */
export interface SideBarItemProps
  extends AnchorHTMLAttributes<HTMLAnchorElement> {
  /**
   * Whether this item is currently active/selected
   */
  active?: boolean
  /**
   * Icon element to display
   */
  icon?: ReactNode
  /**
   * Text label for the item
   */
  children: ReactNode
  /**
   * URL for the anchor
   */
  href: AnchorHTMLAttributes<HTMLAnchorElement>['href']
}

/**
 * Props for the SideBar.Group component
 */
export interface SideBarGroupProps extends HTMLAttributes<HTMLLIElement> {
  /**
   * Label for the group
   */
  label: ReactNode
  /**
   * Children (SideBar.Item elements)
   */
  children: ReactNode
  /**
   * Icon element to display
   */
  icon?: ReactNode
  /**
   * Whether the group's children are expanded by default
   * @default true
   */
  defaultExpanded?: boolean
}

/**
 * Context value for sidebar state
 */
export interface SideBarContextValue {
  /**
   * Whether the sidebar is currently collapsed
   */
  isCollapsed: boolean
  /**
   * Toggle the collapsed state
   */
  toggleCollapsed: () => void
  /**
   * Expand the sidebar (set to expanded state)
   */
  expandSidebar: () => void
}
