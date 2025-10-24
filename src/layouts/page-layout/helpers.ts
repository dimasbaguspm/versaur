import { cva } from 'class-variance-authority'

/**
 * PageLayoutRoot styles
 * Uses CSS Grid with grid-area for page-level layout management
 * Grid template: header on top, content below
 */
export const pageLayoutRootStyles = cva(
  [
    'grid',
    'grid-rows-[auto_1fr]',
    '[grid-template-areas:"header"_"content"]',
  ].join(' '),
  {
    variants: {
      hasMargin: {
        true: '[&_[class*="grid-area:header"]]:px-4 [&_[class*="grid-area:header"]]:sm:px-6 [&_[class*="grid-area:header"]]:lg:px-8 [&_[class*="grid-area:content"]]:px-4 [&_[class*="grid-area:content"]]:sm:px-6 [&_[class*="grid-area:content"]]:lg:px-8',
        false: '',
      },
    },
    defaultVariants: {
      hasMargin: false,
    },
  }
)

/**
 * PageLayoutHeaderRegion styles
 * Assigned to 'header' grid area
 */
export const pageLayoutHeaderRegionStyles = cva('[grid-area:header]', {
  variants: {
    backgroundColor: {
      white: 'bg-transparent',
      gray: 'bg-gray-100',
    },
  },
  defaultVariants: {
    backgroundColor: 'white',
  },
})

/**
 * PageLayoutContentRegion styles
 * Assigned to 'content' grid area
 * Scrollable content area
 */
export const pageLayoutContentRegionStyles = cva(
  '[grid-area:content] overflow-y-auto min-h-0',
  {
    variants: {
      backgroundColor: {
        white: 'bg-transparent',
        gray: 'bg-gray-100',
      },
    },
    defaultVariants: {
      backgroundColor: 'white',
    },
  }
)
