import { cva } from 'class-variance-authority'

export const filterChipVariants = cva(
  'inline-flex items-center gap-1.5 rounded-full font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none select-none cursor-pointer text-sm leading-none border border-border text-foreground bg-white hover:bg-neutral focus-visible:ring-foreground-light focus-visible:ring-offset-white',
  {
    variants: {
      size: {
        sm: 'h-7 px-3 text-xs',
        md: 'h-8 px-4 text-sm',
        lg: 'h-9 px-5 text-sm',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  }
)
