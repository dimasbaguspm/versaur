import type { ElementType, HTMLAttributes, ReactNode } from "react"

export interface SidebarRootProps extends Omit<HTMLAttributes<HTMLElement>, "children"> {
  isOpen: boolean
  onOpenChange?: (isOpen: boolean) => void
  children?: ReactNode
}

export interface SidebarHeaderProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode
}

export interface SidebarBodyProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode
}

export interface SidebarFooterProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode
}

export interface SidebarGroupProps extends HTMLAttributes<HTMLDivElement> {
  label?: ReactNode
  icon?: ReactNode
  children?: ReactNode
}

export interface SidebarItemProps<T extends ElementType = "button"> extends Omit<
  HTMLAttributes<HTMLElement>,
  "as" | "ref"
> {
  as?: T
  href?: string
  active?: boolean
  disabled?: boolean
  icon?: ReactNode
  children?: ReactNode
  onClick?: (e: React.MouseEvent<HTMLElement>) => void
}

export interface SidebarDividerProps extends HTMLAttributes<HTMLDivElement> {}
