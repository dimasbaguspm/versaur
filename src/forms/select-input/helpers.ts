import { cva } from '@/utils/variants'

export const selectInputVariants = cva(
  'block w-full rounded-md border bg-white transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:pointer-events-none disabled:bg-gray-50 appearance-none bg-no-repeat bg-right pr-10',
  {
    variants: {
      state: {
        default:
          'border-primary/30 text-foreground focus:border-primary focus:ring-primary/20',
        error:
          'border-danger bg-danger/5 text-foreground focus:border-danger focus:ring-danger/20',
        readOnly:
          'border-gray-300 bg-gray-50 text-foreground cursor-default focus:ring-0 focus:border-gray-300',
      },
    },
    defaultVariants: {
      state: 'default',
    },
  }
)
