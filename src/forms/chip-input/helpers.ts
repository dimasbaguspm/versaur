import { cva } from 'class-variance-authority'

export const chipOptionVariants = cva(
  'inline-flex items-center px-2 py-1 text-xs bg-white rounded-full font-regular font-sm transition-colors duration-200 cursor-pointer border border-border',
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
        neutral: [
          'hover:bg-gray-soft',
          'hover:border-gray-light',
          'focus:border-gray-light',
          'data-[selected=true]:bg-gray-soft',
          'data-[selected=true]:border-gray',
        ].join(' '),
        success: [
          'hover:bg-success-soft',
          'hover:border-success-light',
          'focus:border-success-light',
          'data-[selected=true]:bg-success-soft',
          'data-[selected=true]:border-success',
        ].join(' '),
        info: [
          'hover:bg-info-soft',
          'hover:border-info-light',
          'focus:border-info-light',
          'data-[selected=true]:bg-info-soft',
          'data-[selected=true]:border-info',
        ].join(' '),
        warning: [
          'hover:bg-warning-soft',
          'hover:border-warning-light',
          'focus:border-warning-light',
          'data-[selected=true]:bg-warning-soft',
          'data-[selected=true]:border-warning',
        ].join(' '),
        danger: [
          'hover:bg-danger-soft',
          'hover:border-danger-light',
          'focus:border-danger-light',
          'data-[selected=true]:bg-danger-soft',
          'data-[selected=true]:border-danger',
        ].join(' '),
      },
      selected: {
        true: '',
        false: '',
      },
    },
    defaultVariants: {
      variant: 'primary',
      selected: false,
    },
  }
)
