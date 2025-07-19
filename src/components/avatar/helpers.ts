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
        primary: 'bg-coral/10 text-coral',
        secondary: 'bg-sage/10 text-sage',
        tertiary: 'bg-mist/10 text-mist',
        ghost: 'bg-slate/10 text-slate',
        neutral: 'bg-neutral/10 text-foreground border border-border',

        // Semantic variants
        success: 'bg-success/10 text-success',
        info: 'bg-info/10 text-info',
        warning: 'bg-warning/10 text-warning',
        danger: 'bg-danger/10 text-danger',
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
