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
        primary: 'bg-primary-light text-primary',
        secondary: 'bg-secondary-light text-secondary',
        tertiary: 'bg-tertiary-light text-tertiary',
        ghost: 'bg-ghost-light text-ghost',
        neutral: 'bg-neutral-light text-foreground border border-border',

        // Semantic variants
        success: 'bg-success-light text-success',
        info: 'bg-info-light text-info',
        warning: 'bg-warning-light text-warning',
        danger: 'bg-danger-light text-danger',
      },
      size: {
        xs: 'h-6 w-6 text-xs',
        sm: 'h-7 w-7 text-xs',
        md: 'h-9 w-9 text-sm',
        lg: 'h-10 w-10 text-base',
        xl: 'h-12 w-12 text-xl',
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
