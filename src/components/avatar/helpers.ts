import { cva } from '@/utils/variants'

/**
 * Avatar variants configuration using CVA
 * Supports different visual styles, sizes, and shapes for flexible avatar displays
 */
export const avatarVariants = cva(
  'inline-flex items-center justify-center font-medium text-white overflow-hidden transition-all duration-200 select-none relative',
  {
    variants: {
      variant: {
        // Core variants using Versaur color system
        primary: 'bg-coral text-white',
        secondary: 'bg-sage text-white',
        tertiary: 'bg-mist text-white',
        ghost: 'bg-slate text-white',
        neutral: 'bg-neutral text-foreground border border-border',

        // Semantic variants
        success: 'bg-success text-white',
        info: 'bg-info text-white',
        warning: 'bg-warning text-white',
        danger: 'bg-danger text-white',
      },
      size: {
        xs: 'h-6 w-6 text-xs',
        sm: 'h-8 w-8 text-sm',
        md: 'h-10 w-10 text-base',
        lg: 'h-12 w-12 text-lg',
        xl: 'h-16 w-16 text-xl',
      },
      shape: {
        circle: 'rounded-full',
        square: 'rounded-none',
        rounded: 'rounded-md',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
      shape: 'circle',
    },
  }
)

/**
 * Avatar image variants configuration
 * Ensures the image fills the avatar container properly and inherits shape from parent
 */
export const avatarImageVariants = cva(
  'absolute inset-0 h-full w-full object-cover'
)
