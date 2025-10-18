import { cva } from 'class-variance-authority'
/**
 * Tailwind variants for PageContent outer wrapper (background)
 */
export const pageContentOuterVariants = cva('w-full', {
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
 * Tailwind variants for PageContent inner container (size and template)
 */
export const pageContentInnerVariants = cva('w-full mx-auto relative', {
  variants: {
    size: {
      fluid: 'max-w-full px-0',
      wide: 'max-w-7xl px-6 pb-10',
      narrow: 'max-w-3xl px-4 pb-10',
    },
    template: {
      'single-column': 'grid grid-cols-1',
      'two-column': 'grid grid-cols-1 md:grid-cols-2 gap-6',
      'two-column-asymmetric-left': 'grid grid-cols-1 md:grid-cols-3 gap-6',
      'two-column-asymmetric-right': 'grid grid-cols-1 md:grid-cols-3 gap-6',
    },
  },
  defaultVariants: {
    size: 'fluid',
    template: 'single-column',
  },
})
