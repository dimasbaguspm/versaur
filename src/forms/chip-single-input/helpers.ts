import { cva } from 'class-variance-authority'

export const chipSingleInputOptionVariants = cva(
  'inline-flex items-center bg-white transition-colors duration-200 cursor-pointer border border-border',
  {
    variants: {
      variant: {
        primary: [
          'hover:bg-primary-soft',
          'hover:border-primary-bold',
          'focus:border-primary-light',
          'data-[selected=true]:bg-primary',
          'data-[selected=true]:border-primary',
          'data-[selected=true]:text-white',
        ].join(' '),
        secondary: [
          'hover:bg-secondary-soft',
          'hover:border-secondary-bold',
          'focus:border-secondary-light',
          'data-[selected=true]:bg-secondary',
          'data-[selected=true]:border-secondary',
          'data-[selected=true]:text-white',
        ].join(' '),
        tertiary: [
          'hover:bg-tertiary-soft',
          'hover:border-tertiary-bold',
          'focus:border-tertiary-light',
          'data-[selected=true]:bg-tertiary',
          'data-[selected=true]:border-tertiary',
          'data-[selected=true]:text-white',
        ].join(' '),
        ghost: [
          'hover:bg-ghost-soft',
          'hover:border-ghost-bold',
          'focus:border-ghost-light',
          'data-[selected=true]:bg-ghost',
          'data-[selected=true]:border-ghost',
          'data-[selected=true]:text-white',
        ].join(' '),
        neutral: ['hover:bg-gray-soft', 'hover:border-gray-light'].join(' '),
      },
      shape: {
        circle: 'rounded-full',
        rounded: 'rounded-lg',
      },
      size: {
        sm: 'h-7 px-3 text-sm min-w-[2.25rem]',
        md: 'h-9 px-4 text-sm min-w-[2.5rem]',
        lg: 'h-10 px-8 text-lg min-w-[2.75rem]',
      },
    },
    defaultVariants: {
      variant: 'primary',
      shape: 'circle',
      size: 'sm',
    },
  }
)
