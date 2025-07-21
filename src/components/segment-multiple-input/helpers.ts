import { cva } from '@/utils/variants'

export const segmentGroupVariants = cva(
  'inline-flex rounded-lg border overflow-hidden bg-neutral/50 p-1',
  {
    variants: {
      variant: {
        // Core variants using Versaur color system
        primary: 'border-coral/20',
        secondary: 'border-sage/20',
        tertiary: 'border-mist/20',
        ghost: 'border-slate/20',
        neutral: 'border-gray-200',

        // Outline variants
        'primary-outline': 'border-coral',
        'secondary-outline': 'border-sage',
        'tertiary-outline': 'border-mist',
        'ghost-outline': 'border-slate',
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
  'relative flex flex-row items-center px-3 py-2 text-center font-medium transition-all duration-200 cursor-pointer border-0 bg-transparent outline-none focus:ring-2 focus:ring-offset-1 flex-1',
  {
    variants: {
      variant: {
        // Core variants using Versaur color system
        primary: 'text-slate hover:text-coral focus:ring-coral/30',
        secondary: 'text-slate hover:text-sage focus:ring-sage/30',
        tertiary: 'text-slate hover:text-mist focus:ring-mist/30',
        ghost: 'text-slate hover:text-slate focus:ring-slate/30',
        neutral: 'text-slate hover:text-gray-700 focus:ring-gray-400/30',

        // Outline variants
        'primary-outline': 'text-coral hover:bg-coral/10 focus:ring-coral/30',
        'secondary-outline': 'text-sage hover:bg-sage/10 focus:ring-sage/30',
        'tertiary-outline': 'text-mist hover:bg-mist/10 focus:ring-mist/30',
        'ghost-outline': 'text-slate hover:bg-slate/10 focus:ring-slate/30',
        'neutral-outline':
          'text-gray-600 hover:bg-gray-100 focus:ring-gray-500/30',

        // Semantic variants
        success: 'text-slate hover:text-success focus:ring-success/30',
        'success-outline':
          'text-success hover:bg-success/10 focus:ring-success/30',
        info: 'text-slate hover:text-info focus:ring-info/30',
        'info-outline': 'text-info hover:bg-info/10 focus:ring-info/30',
        warning: 'text-slate hover:text-warning focus:ring-warning/30',
        'warning-outline':
          'text-warning hover:bg-warning/10 focus:ring-warning/30',
        danger: 'text-slate hover:text-danger focus:ring-danger/30',
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
    primary: 'bg-coral text-white shadow-sm hover:text-white',
    secondary: 'bg-sage text-white shadow-sm hover:text-white',
    tertiary: 'bg-mist text-white shadow-sm hover:text-white',
    ghost: 'bg-slate text-white shadow-sm hover:text-white',
    neutral: 'bg-gray-500 text-white shadow-sm hover:text-white',

    // Outline variants - override hover text color changes
    'primary-outline': 'bg-coral text-white shadow-sm hover:text-white',
    'secondary-outline': 'bg-sage text-white shadow-sm hover:text-white',
    'tertiary-outline': 'bg-mist text-white shadow-sm hover:text-white',
    'ghost-outline': 'bg-slate text-white shadow-sm hover:text-white',
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
