import { forwardRef } from 'react'
import type { PageLayoutProps } from './types'
import { pageLayoutRootStyles } from './helpers'

import {
  PageLayoutHeaderRegion,
  PageLayoutContentRegion,
} from './page-layout.atoms'

/**
 * PageLayout - Compound layout component for page-level structure
 *
 * Provides a layout system for managing the structure between page header and content:
 * - HeaderRegion: Page header area (PageHeader component)
 * - ContentRegion: Main content area (PageContent component)
 *
 * Uses CSS Grid with grid-area for robust layout management.
 * Takes responsibility for backgroundColor from PageHeader and PageContent.
 *
 * @example
 * ```tsx
 * <PageLayout hasMargin>
 *   <PageLayout.HeaderRegion backgroundColor="white">
 *     <PageHeader>...</PageHeader>
 *   </PageLayout.HeaderRegion>
 *   <PageLayout.ContentRegion backgroundColor="gray">
 *     <PageContent>...</PageContent>
 *   </PageLayout.ContentRegion>
 * </PageLayout>
 * ```
 */
const PageLayoutRoot = forwardRef<HTMLDivElement, PageLayoutProps>(
  ({ children, className, hasMargin = false, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={pageLayoutRootStyles({ hasMargin, className })}
        {...props}
      >
        {children}
      </div>
    )
  }
)

export const PageLayout = Object.assign(PageLayoutRoot, {
  HeaderRegion: PageLayoutHeaderRegion,
  ContentRegion: PageLayoutContentRegion,
})
