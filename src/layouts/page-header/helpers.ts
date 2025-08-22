import { cva } from 'class-variance-authority'

/**
 * PageHeader root styles
 */
export const pageHeaderVariants = cva('w-full mt-4')

/**
 * PageHeaderTop styles - main header area
 * Mobile-first responsive: stacks vertically on mobile, horizontal on desktop
 */
export const pageHeaderTopVariants = cva(
  'flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 px-4 sm:px-6 mb-4'
)

/**
 * PageHeaderBreadcrumbs styles
 * Responsive padding for mobile
 */
export const pageHeaderBreadcrumbsVariants = cva('mb-4 px-4 sm:px-6')

/**
 * PageHeaderContent styles - title and subtitle area
 * Full width on mobile, flexible on desktop
 */
export const pageHeaderContentVariants = cva(
  'flex-1 min-w-0 flex flex-col gap-2 w-full sm:w-auto'
)

/**
 * PageHeaderBadges styles
 * Responsive wrapping for mobile
 */
export const pageHeaderBadgesVariants = cva('flex items-center gap-2 flex-wrap')

/**
 * PageHeaderActions styles
 * Stacks vertically on mobile, horizontal on desktop
 * Full width buttons on mobile
 */
export const pageHeaderActionsVariants = cva(
  'flex flex-col sm:flex-row gap-2 sm:gap-3 w-full sm:w-auto sm:ml-auto sm:shrink-0 [&>*]:w-full sm:[&>*]:w-auto'
)

/**
 * PageHeaderBottom styles - bottom section for tabs
 * Responsive padding and overflow handling
 */
export const pageHeaderBottomVariants = cva(
  'w-full flex items-center px-4 sm:px-6 py-0 overflow-x-auto'
)
