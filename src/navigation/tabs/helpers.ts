// Tabs helpers: variants, sizes, cva
import { cva } from 'class-variance-authority'

export const tabsTriggerVariants = cva(
  'inline-flex items-center justify-center transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none select-none px-4 py-2 text-base relative',
  {
    variants: {
      active: {
        true: 'font-medium',
        false: 'font-normal',
      },
      color: {
        primary: '',
        secondary: '',
        tertiary: '',
        ghost: '',
        neutral: '',
      },
      variant: {
        underline: 'bg-transparent border-b-2 border-transparent',
        filled: 'rounded-lg bg-none flex-1 min-w-0',
      },
    },
    compoundVariants: [
      // Underline variants
      {
        variant: 'underline',
        color: 'primary',
        active: true,
        class: 'text-primary border-primary',
      },
      {
        variant: 'underline',
        color: 'primary',
        active: false,
        class: 'text-foreground hover:text-primary',
      },
      {
        variant: 'underline',
        color: 'secondary',
        active: true,
        class: 'text-secondary border-secondary',
      },
      {
        variant: 'underline',
        color: 'secondary',
        active: false,
        class: 'text-foreground hover:text-secondary',
      },
      {
        variant: 'underline',
        color: 'tertiary',
        active: true,
        class: 'text-tertiary border-tertiary',
      },
      {
        variant: 'underline',
        color: 'tertiary',
        active: false,
        class: 'text-foreground hover:text-tertiary',
      },
      {
        variant: 'underline',
        color: 'ghost',
        active: true,
        class: 'text-ghost border-ghost',
      },
      {
        variant: 'underline',
        color: 'ghost',
        active: false,
        class: 'text-foreground hover:text-ghost',
      },
      {
        variant: 'underline',
        color: 'neutral',
        active: true,
        class: 'text-foreground border-neutral',
      },
      {
        variant: 'underline',
        color: 'neutral',
        active: false,
        class: 'text-foreground hover:text-neutral',
      },
      // Filled variant (no color, only white/transparent)
      {
        variant: 'filled',
        active: true,
        class: 'bg-white text-foreground shadow-sm',
      },
      {
        variant: 'filled',
        active: false,
        class: 'bg-transparent text-foreground hover:bg-white/80',
      },
    ],
    defaultVariants: {
      active: false,
      color: 'primary',
      variant: 'underline',
    },
  }
)

export const tabsContainerVariants = cva(
  'flex flex-row w-full overflow-x-auto whitespace-nowrap',
  {
    variants: {
      variant: {
        underline: 'border-b border-border',
        filled: 'p-1 bg-neutral rounded-lg gap-2',
      },
    },
    defaultVariants: {
      variant: 'underline',
    },
  }
)

export const tabsIndicatorVariants = cva(
  'absolute bottom-0 h-0.5 rounded transition-all duration-300',
  {
    variants: {
      color: {
        primary: 'bg-primary',
        secondary: 'bg-secondary',
        tertiary: 'bg-tertiary',
        ghost: 'bg-ghost',
        neutral: 'bg-neutral',
      },
    },
    defaultVariants: {
      color: 'primary',
    },
  }
)
