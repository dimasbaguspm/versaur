import type {
  HTMLAttributes,
  AnchorHTMLAttributes,
  ReactNode,
  ButtonHTMLAttributes,
} from 'react'

/**
 * Props for the SideBar root component
 */
export interface SideBarProps extends HTMLAttributes<HTMLElement> {
  /**
   * Children nodes (MenuList, etc)
   */
  children: ReactNode
}

interface SideBarItemBaseAsAnchor
  extends AnchorHTMLAttributes<HTMLAnchorElement> {
  active?: boolean
  icon: ReactNode
  children: ReactNode
  onClick?: never
  href: AnchorHTMLAttributes<HTMLAnchorElement>['href']
}

interface SideBarItemBaseAsButton
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean
  icon?: ReactNode
  children: ReactNode
  onClick?: ButtonHTMLAttributes<HTMLButtonElement>['onClick']
  href?: never
}

/**
 * Props for the SideBar.Item component (polymorphic: anchor or button)
 */
export type SideBarItemProps = SideBarItemBaseAsAnchor | SideBarItemBaseAsButton

/**
 * Props for the SideBar.Group component
 */
export interface SideBarGroupProps extends HTMLAttributes<HTMLLIElement> {
  /**
   * Label for the group
   */
  label: ReactNode
  /**
   * Children (SideBar.Item)
   */
  children: ReactNode
}
