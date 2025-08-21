import { forwardRef, type ReactNode } from 'react'
import { cn } from '@/utils/cn'
import { pageHeaderVariants } from './helpers'
import type { PageHeaderProps } from './types'
import {
  PageHeaderTop,
  PageHeaderBreadcrumbs,
  PageHeaderContent,
  PageHeaderTitle,
  PageHeaderSubtitle,
  PageHeaderBadges,
  PageHeaderActions,
  PageHeaderBottom,
} from './page-header.atoms'

/**
 * PageHeader - Compound layout component for page headers
 *
 * Provides a flexible layout system for page headers that can include:
 * - Breadcrumbs navigation
 * - Title and subtitle
 * - Status badges
 * - Action buttons and button groups
 * - Bottom tabs or filters
 */

interface PageHeaderRootProps extends Omit<PageHeaderProps, 'title'> {
  /**
   * Simplified API: Page title
   */
  title: ReactNode
  /**
   * Simplified API: Page subtitle/description
   */
  subtitle?: ReactNode
  /**
   * Simplified API: Breadcrumbs navigation component
   */
  breadcrumbs?: ReactNode
  /**
   * Simplified API: Status badges
   */
  badges?: ReactNode
  /**
   * Simplified API: Action buttons/button groups
   */
  actions?: ReactNode
  /**
   * Simplified API: Bottom content (tabs, filters)
   */
  tabs?: ReactNode
}

const PageHeaderRoot = forwardRef<HTMLElement, PageHeaderRootProps>(
  (
    {
      children,
      className,
      title,
      subtitle,
      breadcrumbs,
      badges,
      actions,
      tabs,
      ...props
    },
    ref
  ) => {
    const hasTopContent = title || subtitle || breadcrumbs || badges || actions
    const hasBottomContent = tabs

    return (
      <header
        ref={ref}
        className={cn(pageHeaderVariants(), className)}
        role='banner'
        {...props}
      >
        {breadcrumbs && (
          <PageHeaderBreadcrumbs>{breadcrumbs}</PageHeaderBreadcrumbs>
        )}
        {hasTopContent && (
          <PageHeaderTop>
            <PageHeaderContent>
              {title && <PageHeaderTitle>{title}</PageHeaderTitle>}
              {subtitle && <PageHeaderSubtitle>{subtitle}</PageHeaderSubtitle>}
              {badges && <PageHeaderBadges>{badges}</PageHeaderBadges>}
            </PageHeaderContent>
            {actions && <PageHeaderActions>{actions}</PageHeaderActions>}
          </PageHeaderTop>
        )}
        {hasBottomContent && <PageHeaderBottom>{tabs}</PageHeaderBottom>}
        {children}
      </header>
    )
  }
)

export const PageHeader = PageHeaderRoot
