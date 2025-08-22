import type { ReactNode, HTMLAttributes } from 'react'

/**
 * Props for PageContent main container
 *
 * A layout component that provides consistent horizontal spacing
 * matching the page-header component, with additional vertical
 * padding for content separation
 */
export interface PageContentProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Content to be displayed inside the page content area
   */
  children?: ReactNode
}
