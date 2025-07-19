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
        primary: 'bg-coral-soft text-coral',
        secondary: 'bg-sage-soft text-sage',
        tertiary: 'bg-mist-soft text-mist',
        ghost: 'bg-slate-soft text-slate',
        neutral: 'bg-neutral-soft text-foreground border border-border',

        // Semantic variants
        success: 'bg-success-soft text-success',
        info: 'bg-info-soft text-info',
        warning: 'bg-warning-soft text-warning',
        danger: 'bg-danger-soft text-danger',
      },
      size: {
        xs: 'h-6 w-6 text-xs',
        sm: 'h-8 w-8 text-xs',
        md: 'h-10 w-10 text-sm',
        lg: 'h-12 w-12 text-base',
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
