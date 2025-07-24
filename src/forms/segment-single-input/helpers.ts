import { cva } from '@/utils/variants'

export const segmentGroupVariants = cva(
  'inline-flex rounded-lg border overflow-hidden bg-neutral/50 p-1',
  {
    variants: {
      variant: {
        // Core variants using Versaur color system
        primary: 'border-primary/20',
        secondary: 'border-secondary/20',
        tertiary: 'border-tertiary/20',
        ghost: 'border-ghost/20',
        neutral: 'border-gray-200',

        // Outline variants
        'primary-outline': 'border-primary',
        'secondary-outline': 'border-secondary',
        'tertiary-outline': 'border-tertiary',
        'ghost-outline': 'border-ghost',
        'neutral-outline': 'border-gray-400',

        // Semantic variants
        success: 'border-success/20',
        'success-outline': 'border-success',
        info: 'border-info/20',
        'info-outline': 'border-info',
        warning: 'border-warning/20',
        'warning-outline': 'border-warning',
        danger: 'border-danger/20',
        'danger-outline': 'border-danger',
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
  'relative flex flex-row items-center px-3 py-2 text-center font-medium transition-all duration-200 cursor-pointer border-0 bg-transparent outline-none focus:ring-2 focus:ring-offset-1',
  {
    variants: {
      variant: {
        // Core variants using Versaur color system
        primary: 'text-ghost hover:text-primary focus:ring-primary/30',
        secondary: 'text-ghost hover:text-secondary focus:ring-secondary/30',
        tertiary: 'text-ghost hover:text-tertiary focus:ring-tertiary/30',
        ghost: 'text-ghost hover:text-ghost focus:ring-ghost/30',
        neutral: 'text-ghost hover:text-gray-700 focus:ring-gray-400/30',

        // Outline variants
        'primary-outline':
          'text-primary hover:bg-primary/10 focus:ring-primary/30',
        'secondary-outline':
          'text-secondary hover:bg-secondary/10 focus:ring-secondary/30',
        'tertiary-outline':
          'text-tertiary hover:bg-tertiary/10 focus:ring-tertiary/30',
        'ghost-outline': 'text-ghost hover:bg-ghost/10 focus:ring-ghost/30',
        'neutral-outline':
          'text-gray-600 hover:bg-gray-100 focus:ring-gray-500/30',

        // Semantic variants
        success: 'text-ghost hover:text-success focus:ring-success/30',
        'success-outline':
          'text-success hover:bg-success/10 focus:ring-success/30',
        info: 'text-ghost hover:text-info focus:ring-info/30',
        'info-outline': 'text-info hover:bg-info/10 focus:ring-info/30',
        warning: 'text-ghost hover:text-warning focus:ring-warning/30',
        'warning-outline':
          'text-warning hover:bg-warning/10 focus:ring-warning/30',
        danger: 'text-ghost hover:text-danger focus:ring-danger/30',
        'danger-outline': 'text-danger hover:bg-danger/10 focus:ring-danger/30',
      },
      size: {
        sm: 'px-2 py-1.5 text-xs',
        md: 'px-3 py-2 text-sm',
        lg: 'px-4 py-2.5 text-base',
      },
      rounded: {
        first: 'rounded-l-md',
        middle: '',
        last: 'rounded-r-md',
        single: 'rounded-md',
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
    primary: 'bg-primary text-white shadow-sm hover:text-white',
    secondary: 'bg-secondary text-white shadow-sm hover:text-white',
    tertiary: 'bg-tertiary text-white shadow-sm hover:text-white',
    ghost: 'bg-ghost text-white shadow-sm hover:text-white',
    neutral: 'bg-gray-500 text-white shadow-sm hover:text-white',

    // Outline variants - override hover text color changes
    'primary-outline': 'bg-primary text-white shadow-sm hover:text-white',
    'secondary-outline': 'bg-secondary text-white shadow-sm hover:text-white',
    'tertiary-outline': 'bg-tertiary text-white shadow-sm hover:text-white',
    'ghost-outline': 'bg-ghost text-white shadow-sm hover:text-white',
    'neutral-outline': 'bg-gray-500 text-white shadow-sm hover:text-white',

    // Semantic variants - override hover text color changes
    success: 'bg-success text-white shadow-sm hover:text-white',
    'success-outline': 'bg-success text-white shadow-sm hover:text-white',
    info: 'bg-info text-white shadow-sm hover:text-white',
    'info-outline': 'bg-info text-white shadow-sm hover:text-white',
    warning: 'bg-warning text-white shadow-sm hover:text-white',
    'warning-outline': 'bg-warning text-white shadow-sm hover:text-white',
    danger: 'bg-danger text-white shadow-sm hover:text-white',
    'danger-outline': 'bg-danger text-white shadow-sm hover:text-white',
  }

  return variantMap[variant || 'primary'] || variantMap.primary
}
