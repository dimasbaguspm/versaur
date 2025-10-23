import { cva } from 'class-variance-authority'

/**
 * PageHeader outer wrapper styles (background)
 */
export const pageHeaderOuterVariants = cva('w-full mb-4', {
  variants: {
    backgroundColor: {
      white: 'bg-white',
      gray: 'bg-neutral',
    },
  },
  defaultVariants: {
    backgroundColor: 'white',
  },
})

/**
 * PageHeader inner container styles (size and max-width only)
 * No horizontal padding here - individual sections handle their own padding
 */
export const pageHeaderInnerVariants = cva('w-full mx-auto pt-4 md:pt-10', {
  variants: {
    size: {
      fluid: 'max-w-full',
      wide: 'max-w-7xl',
      narrow: 'max-w-3xl',
    },
  },
  defaultVariants: {
    size: 'fluid',
  },
})

/**
 * PageHeaderTop styles - main header area
 * Mobile-first responsive: stacks vertically on mobile, horizontal on desktop
 * Includes responsive padding based on parent size
 */
export const pageHeaderTopVariants = cva(
  'flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4',
  {
    variants: {
      size: {
        fluid: 'px-0',
        wide: 'px-6',
        narrow: 'px-4',
      },
    },
    defaultVariants: {
      size: 'fluid',
    },
  }
)

/**
 * PageHeaderBreadcrumbs styles
 * Includes responsive padding based on parent size
 */
export const pageHeaderBreadcrumbsVariants = cva('mb-4', {
  variants: {
    size: {
      fluid: 'px-0',
      wide: 'px-6',
      narrow: 'px-4',
    },
  },
  defaultVariants: {
    size: 'fluid',
  },
})

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
  'hidden md:flex  flex-col sm:flex-row gap-2 sm:gap-3 w-full w-auto sm:ml-auto sm:shrink-0 [&>*]:w-full sm:[&>*]:w-auto'
)

/**
 * PageHeaderMobileActions styles
 * Stacks vertically on mobile, horizontal on desktop
 * Full width buttons on mobile
 */
export const pageHeaderMobileActionsVariants = cva('md:hidden')

/**
 * PageHeaderBottom styles - bottom section for tabs
 * No padding - allows tabs to be edge-to-edge on mobile for better scrolling
 * On desktop, tabs can have their own internal padding if needed
 */
export const pageHeaderBottomVariants = cva(
  'w-full flex items-center py-0 overflow-x-auto'
)
