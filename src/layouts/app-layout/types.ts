import type { HTMLAttributes } from 'react'

/**
 * AppLayoutRoot - main container for application layout
 * Provides high-level layout structure with named regions for app shell
 * Compound pattern: TopRegion, SideLeftRegion, SideRightRegion, BottomRegion, MainRegion
 */
export type AppLayoutProps = HTMLAttributes<HTMLDivElement>

/**
 * AppLayoutTopRegion - top region of the app (header, navigation bar)
 */
export interface AppLayoutTopRegionProps
  extends HTMLAttributes<HTMLDivElement> {
  /**
   * Custom class for top region
   */
  className?: string
}

/**
 * AppLayoutSideLeftRegion - left sidebar region
 */
export interface AppLayoutSideLeftRegionProps
  extends HTMLAttributes<HTMLDivElement> {
  /**
   * Custom class for left sidebar region
   */
  className?: string
}

/**
 * AppLayoutSideRightRegion - right sidebar region
 */
export interface AppLayoutSideRightRegionProps
  extends HTMLAttributes<HTMLDivElement> {
  /**
   * Custom class for right sidebar region
   */
  className?: string
}

/**
 * AppLayoutBottomRegion - bottom region of the app (footer, bottom nav)
 */
export interface AppLayoutBottomRegionProps
  extends HTMLAttributes<HTMLDivElement> {
  /**
   * Custom class for bottom region
   */
  className?: string
}

/**
 * AppLayoutMainRegion - main content region
 */
export interface AppLayoutMainRegionProps
  extends HTMLAttributes<HTMLDivElement> {
  /**
   * Custom class for main region
   */
  className?: string
}
