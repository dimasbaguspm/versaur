import { forwardRef } from 'react'
import type { AppLayoutProps } from './types'
import { appLayoutRootStyles } from './helpers'

import {
  AppLayoutTopRegion,
  AppLayoutSideLeftRegion,
  AppLayoutSideRightRegion,
  AppLayoutBottomRegion,
  AppLayoutMainRegion,
} from './app-layout.atoms'

/**
 * AppLayout - Compound layout component for application-level structure
 *
 * Provides a high-level layout system with named regions for organizing your app:
 * - TopRegion: Header, navigation bar (sticky at top)
 * - SideLeftRegion: Left sidebar for navigation or filters (fixed position)
 * - SideRightRegion: Right sidebar for auxiliary content (fixed position)
 * - BottomRegion: Footer or bottom navigation
 * - MainRegion: Primary content area (scrollable)
 *
 * Uses CSS Grid with grid-area for robust layout management.
 * Only the MainRegion is scrollable; sidebars remain in fixed positions.
 *
 * @example
 * ```tsx
 * <AppLayout>
 *   <AppLayout.TopRegion>
 *     <TopBar>...</TopBar>
 *   </AppLayout.TopRegion>
 *   <AppLayout.SideLeftRegion>
 *     <SideBar>...</SideBar>
 *   </AppLayout.SideLeftRegion>
 *   <AppLayout.MainRegion>
 *     <PageContent>...</PageContent>
 *   </AppLayout.MainRegion>
 *   <AppLayout.BottomRegion>
 *     <BottomBar>...</BottomBar>
 *   </AppLayout.BottomRegion>
 * </AppLayout>
 * ```
 */
const AppLayoutRoot = forwardRef<HTMLDivElement, AppLayoutProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <div ref={ref} className={appLayoutRootStyles({ className })} {...props}>
        {children}
      </div>
    )
  }
)

export const AppLayout = Object.assign(AppLayoutRoot, {
  TopRegion: AppLayoutTopRegion,
  SideLeftRegion: AppLayoutSideLeftRegion,
  SideRightRegion: AppLayoutSideRightRegion,
  BottomRegion: AppLayoutBottomRegion,
  MainRegion: AppLayoutMainRegion,
})
