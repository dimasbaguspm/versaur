import { cva } from 'class-variance-authority'

export const buttonAnchorVariants = cva(
  'inline-flex items-center justify-center gap-2 rounded-md font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98] select-none cursor-pointer no-underline',
  {
    variants: {
      variant: {
        // Primary variant - main action button with coral accent
        primary:
          'bg-primary text-white hover:bg-primary/90 focus-visible:ring-primary-light focus-visible:ring-offset-white shadow-sm hover:shadow-md',
        // Ghost variant - subtle, minimal visual weight
        ghost:
          'bg-white text-foreground hover:bg-ghost-soft focus-visible:ring-ghost-light focus-visible:ring-offset-white',
        // Outline variant - bordered, lightweight alternative
        outline:
          'border border-border text-foreground bg-white hover:bg-accent-soft focus-visible:ring-accent-soft focus-visible:ring-offset-white transition-all',
      },
      size: {
        sm: 'h-7 px-3 text-sm min-w-[2.25rem]',
        md: 'h-9 px-4 text-sm min-w-[2.5rem]',
        lg: 'h-10 px-8 text-lg min-w-[2.75rem]',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
)
