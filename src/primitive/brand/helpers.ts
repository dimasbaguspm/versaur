import { cva } from 'class-variance-authority'

/**
 * CVA for brand icon size
 * Extends IconProps['size']
 */
export const brandSizeClass = cva('', {
  variants: {
    size: {
      xs: 'h-6 w-6',
      sm: 'h-6 w-6',
      md: 'h-8 w-8',
      lg: 'h-10 w-10',
      xl: 'h-12 w-12',
    },
  },
  defaultVariants: {
    size: 'md',
  },
})
