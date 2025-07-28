import { cva } from '@/utils/variants'

export const modalOverlayVariants = cva(
  'fixed inset-0 z-60 transition-opacity duration-300 bg-foreground/30 backdrop-blur-md flex items-center justify-center transition-opacity duration-200 ease-in-out',
  {
    variants: {
      placement: {
        top: 'items-start',
        center: 'items-center',
      },
    },
    defaultVariants: {
      placement: 'center',
    },
  }
)

export const modalContentVariants = cva(
  [
    'bg-white rounded-lg shadow-xl relative',
    'flex flex-col',
    'outline-none',
    'mx-4',
    'transition-all duration-200 ease-in-out ',
  ],
  {
    variants: {
      size: {
        sm: 'w-[20rem] max-w-sm', // 20rem, 320px
        md: 'w-[28rem] max-w-md', // 28rem, 448px
        lg: 'w-[36rem] max-w-lg', // 36rem, 576px
        'fit-content': 'w-fit max-w-full', // Fit content, no max width
      },
      placement: {
        top: 'mt-4',
        center: '',
      },
    },
    defaultVariants: {
      size: 'md',
      placement: 'center',
    },
  }
)
