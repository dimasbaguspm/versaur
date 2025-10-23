import { forwardRef, type ReactNode } from 'react'
import { cn } from '@/utils/cn'
import { pageHeaderOuterVariants, pageHeaderInnerVariants } from './helpers'
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
  PageHeaderMobileActions,
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
   * Simplified API: Mobile action buttons/button groups
   */
  mobileActions?: ReactNode
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
      size = 'fluid',
      backgroundColor = 'white',
      title,
      subtitle,
      breadcrumbs,
      badges,
      actions,
      mobileActions,
      tabs,
      ...props
    },
    ref
  ) => {
    const hasBottomContent = tabs

    return (
      <header
        ref={ref}
        className={cn(pageHeaderOuterVariants({ backgroundColor }))}
        role='banner'
        {...props}
      >
        <div className={cn(pageHeaderInnerVariants({ size }), className)}>
          {breadcrumbs && (
            <PageHeaderBreadcrumbs size={size}>
              {breadcrumbs}
            </PageHeaderBreadcrumbs>
          )}

          <PageHeaderTop size={size}>
            <PageHeaderContent>
              <div className='flex items-center justify-between'>
                <PageHeaderTitle>{title}</PageHeaderTitle>
                {mobileActions && (
                  <PageHeaderMobileActions>
                    {mobileActions}
                  </PageHeaderMobileActions>
                )}
              </div>
              {subtitle && <PageHeaderSubtitle>{subtitle}</PageHeaderSubtitle>}
              {badges && <PageHeaderBadges>{badges}</PageHeaderBadges>}
            </PageHeaderContent>
            {actions && <PageHeaderActions>{actions}</PageHeaderActions>}
          </PageHeaderTop>

          {hasBottomContent && <PageHeaderBottom>{tabs}</PageHeaderBottom>}
          {children}
        </div>
      </header>
    )
  }
)

export const PageHeader = PageHeaderRoot
