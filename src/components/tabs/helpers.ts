// Tabs helpers: variants, sizes, cva
import { cva } from 'class-variance-authority'

export const tabsTriggerVariants = cva(
  'inline-flex items-center justify-center transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none select-none px-4 py-2 text-base bg-transparent relative border-b-2 border-transparent',
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
    },
    compoundVariants: [
      // Primary
      {
        color: 'primary',
        active: true,
        class: 'text-coral border-coral',
      },
      {
        color: 'primary',
        active: false,
        class: 'text-foreground hover:text-coral',
      },
      // Secondary
      {
        color: 'secondary',
        active: true,
        class: 'text-sage border-sage',
      },
      {
        color: 'secondary',
        active: false,
        class: 'text-foreground hover:text-sage',
      },
      // Tertiary
      {
        color: 'tertiary',
        active: true,
        class: 'text-mist border-mist',
      },
      {
        color: 'tertiary',
        active: false,
        class: 'text-foreground hover:text-mist',
      },
      // Ghost
      {
        color: 'ghost',
        active: true,
        class: 'text-slate border-slate',
      },
      {
        color: 'ghost',
        active: false,
        class: 'text-foreground hover:text-slate',
      },
      // Neutral
      {
        color: 'neutral',
        active: true,
        class: 'text-foreground border-light-gray',
      },
      {
        color: 'neutral',
        active: false,
        class: 'text-foreground hover:text-light-gray',
      },
    ],
    defaultVariants: {
      active: false,
      color: 'primary',
    },
  }
)

export const tabsContainerVariants = cva(
  'flex flex-row w-full border-b border-neutral overflow-x-auto whitespace-nowrap',
  {
    variants: {},
    defaultVariants: {},
  }
)

export const tabsIndicatorVariants = cva(
  'absolute bottom-0 h-0.5 rounded transition-all duration-300',
  {
    variants: {
      color: {
        primary: 'bg-coral',
        secondary: 'bg-sage',
        tertiary: 'bg-mist',
        ghost: 'bg-slate',
        neutral: 'bg-light-gray',
      },
    },
    defaultVariants: {
      color: 'primary',
    },
  }
)
