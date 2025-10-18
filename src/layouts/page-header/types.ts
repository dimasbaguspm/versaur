import type { TextProps } from '@/primitive'
import type { ReactNode, HTMLAttributes } from 'react'

/**
 * Props for PageHeader main container
 */
export interface PageHeaderProps extends HTMLAttributes<HTMLElement> {
  /**
   * Size determines the max-width and padding
   * - 'fluid': No padding, full viewport width
   * - 'wide': Container for desktop screens (centered)
   * - 'narrow': Container for mobile screens (centered)
   */
  size?: 'fluid' | 'wide' | 'narrow'
  /**
   * Background color of the header
   * - 'white': White background
   * - 'gray': Gray background
   */
  backgroundColor?: 'white' | 'gray'
  children?: ReactNode
}

/**
 * Props for PageHeaderTop - main header area (breadcrumbs, title, actions)
 */
export interface PageHeaderTopProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

/**
 * Props for PageHeaderBreadcrumbs - breadcrumbs section
 */
export interface PageHeaderBreadcrumbsProps
  extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

/**
 * Props for PageHeaderContent - title and subtitle area
 */
export interface PageHeaderContentProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

/**
 * Props for PageHeaderTitle - main title
 */
export type PageHeaderTitleProps = TextProps

/**
 * Props for PageHeaderSubtitle - subtitle/description
 */
export type PageHeaderSubtitleProps = TextProps

/**
 * Props for PageHeaderBadges - badges section
 */
export interface PageHeaderBadgesProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

/**
 * Props for PageHeaderActions - actions section (buttons, button groups)
 */
export interface PageHeaderActionsProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

/**
 * Props for PageHeaderMobileActions - mobile actions section
 */
export interface PageHeaderMobileActionsProps
  extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

/**
 * Props for PageHeaderBottom - bottom section (tabs, filters, etc.)
 */
export interface PageHeaderBottomProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}
