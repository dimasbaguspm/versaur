import { cva } from 'class-variance-authority'

export const chipOptionVariants = cva(
  'inline-flex items-center px-2 py-1 text-xs bg-neutral rounded-full font-medium transition-colors duration-200 cursor-pointer border border-slate-100',
  {
    variants: {
      variant: {
        primary: [
          'hover:bg-coral/10',
          'hover:border-coral/30',
          'focus:border-coral/30',
          'data-[selected=true]:bg-coral/10',
          'data-[selected=true]:border-coral',
        ].join(' '),
        secondary: [
          'hover:bg-sage/10',
          'hover:border-sage/30',
          'focus:border-sage/30',
          'data-[selected=true]:bg-sage/10',
          'data-[selected=true]:border-sage',
        ].join(' '),
        tertiary: [
          'hover:bg-mist/10',
          'hover:border-mist/30',
          'focus:border-mist/30',
          'data-[selected=true]:bg-mist/10',
          'data-[selected=true]:border-mist',
        ].join(' '),
        ghost: [
          'hover:bg-slate/10',
          'hover:border-slate/30',
          'focus:border-slate/30',
          'data-[selected=true]:bg-slate/10',
          'data-[selected=true]:border-slate',
        ].join(' '),
        neutral: [
          'hover:bg-gray/10',
          'hover:border-gray/30',
          'focus:border-gray/30',
          'data-[selected=true]:bg-gray/10',
          'data-[selected=true]:border-gray',
        ].join(' '),
        success: [
          'hover:bg-success/10',
          'hover:border-success/30',
          'focus:border-success/30',
          'data-[selected=true]:bg-success/10',
          'data-[selected=true]:border-success',
        ].join(' '),
        info: [
          'hover:bg-info/10',
          'hover:border-info/30',
          'focus:border-info/30',
          'data-[selected=true]:bg-info/10',
          'data-[selected=true]:border-info',
        ].join(' '),
        warning: [
          'hover:bg-warning/10',
          'hover:border-warning/30',
          'focus:border-warning/30',
          'data-[selected=true]:bg-warning/10',
          'data-[selected=true]:border-warning',
        ].join(' '),
        danger: [
          'hover:bg-danger/10',
          'hover:border-danger/30',
          'focus:border-danger/30',
          'data-[selected=true]:bg-danger/10',
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
