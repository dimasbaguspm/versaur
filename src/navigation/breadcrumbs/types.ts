import type { ReactNode, AnchorHTMLAttributes, HTMLAttributes } from 'react'

/**
 * Props for the Breadcrumbs root component
 */
export interface BreadcrumbsProps extends HTMLAttributes<HTMLElement> {
  /** Breadcrumb items as children */
  children: ReactNode
  /** Optional aria-label for navigation landmark */
  'aria-label'?: string
}

/**
 * Props for a single Breadcrumbs.Item
 */
export interface BreadcrumbsItemProps
  extends AnchorHTMLAttributes<HTMLAnchorElement> {
  /** Breadcrumb label */
  children: ReactNode
  /** Optional icon to display before the label */
  icon?: ReactNode
  /** If true, renders as the current page (aria-current) */
  isCurrent?: boolean
}
