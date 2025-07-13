import { cva } from 'class-variance-authority'

/**
 * Tile component variants using class-variance-authority
 */
export const tileVariants = cva(
  // Base classes
  'block transition-colors duration-200',
  {
    variants: {
      variant: {
        white: 'bg-white border border-gray-200 text-gray-900',
        neutral: 'bg-gray-50 border border-gray-200 text-gray-900',
        primary: 'bg-coral-50 border border-coral-200 text-coral-900',
        secondary: 'bg-sage-50 border border-sage-200 text-sage-900',
        tertiary: 'bg-mist-50 border border-mist-200 text-mist-900',
        ghost: 'bg-transparent border border-slate-200 text-slate-900',
        success: 'bg-green-50 border border-green-200 text-green-900',
        info: 'bg-blue-50 border border-blue-200 text-blue-900',
        warning: 'bg-orange-50 border border-orange-200 text-orange-900',
        danger: 'bg-red-50 border border-red-200 text-red-900',
      },
      size: {
        xs: 'p-2',
        sm: 'p-3',
        md: 'p-4',
        lg: 'p-6',
        xl: 'p-8',
      },
      shape: {
        rounded: 'rounded-lg',
        square: 'rounded-none',
      },
    },
    defaultVariants: {
      variant: 'white',
      size: 'md',
      shape: 'rounded',
    },
  }
)
