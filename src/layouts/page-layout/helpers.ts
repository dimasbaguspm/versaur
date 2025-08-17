import { cva } from 'class-variance-authority'
/**
 * Tailwind variants for PageLayout
 */

export const pageLayoutVariants = cva('w-full mx-auto relative', {
  variants: {
    type: {
      desktop: 'max-w-7xl px-6 pb-10',
      tablet: 'max-w-3xl px-4',
      mobile: 'w-full px-4',
    },
  },
  defaultVariants: {
    type: 'desktop',
  },
})
