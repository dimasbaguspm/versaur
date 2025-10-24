import { cva } from 'class-variance-authority'

/**
 * AppLayoutRoot styles
 * Uses CSS Grid with named areas for app-level layout management
 * Grid template: top spans full width, middle has left/main/right, bottom spans full width
 */
export const appLayoutRootStyles = cva(
  [
    'h-screen w-full grid bg-background overflow-hidden',
    'grid-rows-[auto_1fr_auto]',
    'grid-cols-[auto_1fr_auto]',
    '[grid-template-areas:"top_top_top"_"left_main_right"_"bottom_bottom_bottom"]',
  ].join(' '),
  {
    variants: {},
    defaultVariants: {},
  }
)

/**
 * AppLayoutTopRegion styles
 * Assigned to 'top' grid area, spans full width
 */
export const appLayoutTopRegionStyles = cva('[grid-area:top] z-30 sticky top-0')

/**
 * AppLayoutSideLeftRegion styles
 * Assigned to 'left' grid area, positioned on the left
 * Remains in place (not scrollable) - content inside can implement its own scroll if needed
 */
export const appLayoutSideLeftRegionStyles = cva(
  '[grid-area:left] z-20 border-r border-border bg-white'
)

/**
 * AppLayoutSideRightRegion styles
 * Assigned to 'right' grid area, positioned on the right
 * Remains in place (not scrollable) - content inside can implement its own scroll if needed
 */
export const appLayoutSideRightRegionStyles = cva(
  '[grid-area:right] z-20 border-l border-border bg-white'
)

/**
 * AppLayoutBottomRegion styles
 * Assigned to 'bottom' grid area, spans full width
 */
export const appLayoutBottomRegionStyles = cva(
  '[grid-area:bottom] z-30 border-t border-border bg-white'
)

/**
 * AppLayoutMainRegion styles
 * Assigned to 'main' grid area, center column
 * Only the main region is scrollable - sidebars remain fixed in position
 * Must set min-h-0 to allow overflow to work within grid
 */
export const appLayoutMainRegionStyles = cva(
  '[grid-area:main] overflow-y-auto min-h-0'
)
