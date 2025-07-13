import { cva } from 'class-variance-authority'

export const chipOptionVariants = cva(
  'inline-flex items-center px-2 py-1 text-xs rounded-full font-medium transition-colors duration-200 cursor-pointer border border-transparent outline-none focus:ring-2 focus:ring-offset-1',
  {
    variants: {
      variant: {
        primary:
          'bg-transparent text-coral hover:bg-coral/10  focus:ring-coral/30',
        secondary:
          'bg-transparent text-sage hover:bg-sage/10 focus:ring-sage/30',
        tertiary:
          'bg-transparent0 text-mist hover:bg-mist/10 focus:ring-mist/30',
        ghost:
          'bg-transparent text-slate hover:bg-slate/10 focus:ring-slate/30',
        neutral:
          'bg-gray/10 text-gray hover:bg-gray-400/30 focus:ring-gray-400/30',
        success:
          'bg-success/10 text-success hover:bg-success hover:text-white focus:ring-success/30',
        'success-outline':
          'bg-transparent text-success border-success hover:bg-success/10 focus:ring-success/30',
        info: 'bg-info/10 text-info hover:bg-info  hover:text-white focus:ring-info/30',
        'info-outline':
          'bg-transparent text-info border-info hover:bg-info/10 focus:ring-info/30',
        warning:
          'bg-warning/10 text-warning hover:bg-warning  hover:text-white focus:ring-warning/30',
        'warning-outline':
          'bg-transparent text-warning border-warning hover:bg-warning/10 focus:ring-warning/30',
        danger:
          'bg-danger/10 text-danger hover:bg-danger  hover:text-white focus:ring-danger/30',
        'danger-outline':
          'bg-transparent text-danger border-danger hover:bg-danger/10 focus:ring-danger/30',
      },
      selected: {
        true: 'ring-2 ring-coral-500',
        false: '',
      },
    },
    defaultVariants: {
      variant: 'primary',
      selected: false,
    },
  }
)
