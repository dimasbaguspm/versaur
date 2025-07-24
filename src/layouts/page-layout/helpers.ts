import { cva } from 'class-variance-authority'
/**
 * Tailwind variants for PageLayout
 */

export const pageLayoutVariants = cva('w-full bg-white mx-auto relative', {
  variants: {
    type: {
      desktop: 'max-w-7xl px-6 py-10',
      tablet: 'max-w-3xl',
      mobile: 'w-full',
    },
  },
  defaultVariants: {
    type: 'desktop',
  },
})
