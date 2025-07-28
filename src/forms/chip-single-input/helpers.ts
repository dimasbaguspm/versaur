import { cva } from 'class-variance-authority'

export const chipSingleInputOptionVariants = cva(
  'inline-flex items-center bg-white font-regular transition-colors duration-200 cursor-pointer border border-border',
  {
    variants: {
      variant: {
        primary: [
          'hover:bg-primary-soft',
          'hover:border-primary-light',
          'focus:border-primary-light',
          'data-[selected=true]:bg-primary-soft',
          'data-[selected=true]:border-primary',
        ].join(' '),
        secondary: [
          'hover:bg-secondary-soft',
          'hover:border-secondary-light',
          'focus:border-secondary-light',
          'data-[selected=true]:bg-secondary-soft',
          'data-[selected=true]:border-secondary',
        ].join(' '),
        tertiary: [
          'hover:bg-tertiary-soft',
          'hover:border-tertiary-light',
          'focus:border-tertiary-light',
          'data-[selected=true]:bg-tertiary-soft',
          'data-[selected=true]:border-tertiary',
        ].join(' '),
        ghost: [
          'hover:bg-ghost-soft',
          'hover:border-ghost-light',
          'focus:border-ghost-light',
          'data-[selected=true]:bg-ghost-soft',
          'data-[selected=true]:border-ghost',
        ].join(' '),
        neutral: ['hover:bg-gray-soft', 'hover:border-gray-light'].join(' '),
      },
      shape: {
        circle: 'rounded-full',
        rounded: 'rounded-lg',
      },
      size: {
        sm: 'h-8 px-3 text-sm',
        md: 'h-10 px-4 text-base',
        lg: 'h-12 px-5 text-lg',
      },
      selected: {
        true: '',
        false: '',
      },
    },
    defaultVariants: {
      variant: 'primary',
      shape: 'circle',
      size: 'sm',
      selected: false,
    },
  }
)
