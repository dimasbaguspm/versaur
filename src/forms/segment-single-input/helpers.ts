import { cva } from '@/utils/variants'

export const segmentGroupVariants = cva(
  'flex flex-row rounded-full border overflow-hidden p-1 gap-0.25',
  {
    variants: {
      variant: {
        // Core variants using Versaur color system
        primary: 'border-primary-light',
        secondary: 'border-secondary-light',
        tertiary: 'border-tertiary-light',
        ghost: 'border-ghost-light',
        neutral: 'border-gray-200',

        // Semantic variants
        success: 'border-success-light',
        info: 'border-info-light',
        warning: 'border-warning-light',
        danger: 'border-danger-light',
      },
      size: {
        sm: 'text-xs',
        md: 'text-sm',
        lg: 'text-base',
      },
      error: {
        true: 'border-danger',
        false: '',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
      error: false,
    },
  }
)

export const segmentOptionVariants = cva(
  'inline relative flex flex-row items-center px-3 py-2 text-center font-medium transition-all duration-200 cursor-pointer border-0 bg-transparent outline-none focus:ring-2 focus:ring-offset-1 flex-1',
  {
    variants: {
      variant: {
        // Core variants using Versaur color system
        primary: 'text-ghost hover:text-primary focus:ring-primary/30',
        secondary: 'text-ghost hover:text-secondary focus:ring-secondary/30',
        tertiary: 'text-ghost hover:text-tertiary focus:ring-tertiary/30',
        ghost: 'text-ghost hover:text-ghost focus:ring-ghost/30',
        neutral: 'text-ghost hover:text-gray-700 focus:ring-gray-400/30',

        // Semantic variants
        success: 'text-ghost hover:text-success focus:ring-success/30',
        info: 'text-ghost hover:text-info focus:ring-info/30',
        warning: 'text-ghost hover:text-warning focus:ring-warning/30',
        danger: 'text-ghost hover:text-danger focus:ring-danger/30',
      },
      size: {
        sm: 'px-2 py-1.5 text-xs',
        md: 'px-3 py-2 text-sm',
        lg: 'px-4 py-2.5 text-base',
      },
      rounded: {
        first: 'rounded-l-full',
        middle: '',
        last: 'rounded-r-full',
        single: 'rounded-full',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
      rounded: 'middle',
    },
  }
)

/**
 * Get the selected/checked state classes for segment options
 * Includes hover state overrides to maintain consistent appearance when selected
 */
export const getSegmentSelectedClasses = (
  variant: string | undefined
): string => {
  const variantMap: Record<string, string> = {
    // Core variants - override hover text color changes
    primary: 'bg-primary text-white hover:text-white',
    secondary: 'bg-secondary text-white hover:text-white',
    tertiary: 'bg-tertiary text-white hover:text-white',
    ghost: 'bg-ghost text-white hover:text-white',
    neutral: 'bg-gray-500 text-white hover:text-white',

    // Semantic variants - override hover text color changes
    success: 'bg-success text-white hover:text-white',
    info: 'bg-info text-white hover:text-white',
    warning: 'bg-warning text-white hover:text-white',
    danger: 'bg-danger text-white hover:text-white',
  }

  return variantMap[variant || 'primary'] || variantMap.primary
}
