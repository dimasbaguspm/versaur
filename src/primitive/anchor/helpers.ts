import { cva } from '@/utils/variants'

export const anchorVariants = cva(
  [
    'inline-flex items-center transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
    // pseudo selectors for anchor
    'hover:no-underline',
  ],
  {
    variants: {
      color: {
        primary: 'text-primary',
        secondary: 'text-secondary',
        ghost: 'text-ghost',
        danger: 'text-danger',
        neutral: 'text-neutral',
      },
      fontSize: {
        xs: 'text-xs',
        sm: 'text-sm',
        base: 'text-base',
        lg: 'text-lg',
        xl: 'text-xl',
        '2xl': 'text-2xl',
        '3xl': 'text-3xl',
        '4xl': 'text-4xl',
        '5xl': 'text-5xl',
        '6xl': 'text-6xl',
        '7xl': 'text-7xl',
        '8xl': 'text-8xl',
        '9xl': 'text-9xl',
        inherit: '',
        undefined: '',
      },
      fontWeight: {
        thin: 'font-thin',
        extralight: 'font-extralight',
        light: 'font-light',
        normal: 'font-normal',
        medium: 'font-medium',
        semibold: 'font-semibold',
        bold: 'font-bold',
        extrabold: 'font-extrabold',
        black: 'font-black',
        inherit: '',
        undefined: '',
      },
      quiet: {
        true: '',
        false: 'underline underline-offset-2',
      },
    },
    defaultVariants: {
      color: 'primary',
      fontSize: 'base',
      fontWeight: 'medium',
      quiet: false,
    },
  }
)
