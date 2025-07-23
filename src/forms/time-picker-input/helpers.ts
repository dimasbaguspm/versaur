import { cva } from '@/utils/variants'

export const timeSegmentButtonVariants = cva(
  'inline-flex items-center justify-center rounded-md font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
  {
    variants: {
      active: {
        true: 'bg-primary text-white',
        false: 'bg-neutral text-foreground',
      },
      size: {
        sm: 'h-8 px-3 text-sm',
        md: 'h-10 px-4 text-base',
        lg: 'h-12 px-6 text-lg',
      },
    },
    defaultVariants: {
      active: false,
      size: 'md',
    },
  }
)
