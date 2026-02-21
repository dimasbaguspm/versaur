import type { ElementType, HTMLAttributes, ReactNode, ComponentPropsWithoutRef, RefAttributes } from "react"
import type { ForwardRefExoticComponent } from "react"

export interface SidebarRootProps {
  className?: string
  children?: ReactNode
}

export interface SidebarHeaderProps {
  className?: string
  children?: ReactNode
}

export interface SidebarBodyProps {
  className?: string
  children?: ReactNode
}

export interface SidebarFooterProps {
  className?: string
  children?: ReactNode
}

export interface SidebarGroupProps {
  label?: ReactNode
  icon: ReactNode
  defaultExpanded?: boolean
  isExpanded?: boolean
  onExpandedChange?: (expanded: boolean) => void
  className?: string
  children?: ReactNode
}

export interface SidebarItemListProps {
  className?: string
  children?: ReactNode
}

export type SidebarItemProps<T extends ElementType = "button"> = {
  as?: T
  active?: boolean
  disabled?: boolean
  icon?: ReactNode
  action?: ReactNode
  className?: string
  children?: ReactNode
} & Omit<ComponentPropsWithoutRef<T>, "children">

export interface SidebarDividerProps extends HTMLAttributes<HTMLDivElement> {}

// Compound type for TypeScript namespace merging
export interface SidebarType extends ForwardRefExoticComponent<SidebarRootProps & RefAttributes<HTMLElement>> {
  Header: ForwardRefExoticComponent<SidebarHeaderProps & RefAttributes<HTMLDivElement>>
  Body: ForwardRefExoticComponent<SidebarBodyProps & RefAttributes<HTMLDivElement>>
  Footer: ForwardRefExoticComponent<SidebarFooterProps & RefAttributes<HTMLDivElement>>
  Group: ForwardRefExoticComponent<SidebarGroupProps & RefAttributes<HTMLDivElement>>
  Item: <T extends ElementType = "button">(props: SidebarItemProps<T> & RefAttributes<HTMLElement>) => JSX.Element
  ItemList: ForwardRefExoticComponent<SidebarItemListProps & RefAttributes<HTMLDivElement>>
  Divider: ForwardRefExoticComponent<SidebarDividerProps & RefAttributes<HTMLDivElement>>
}
