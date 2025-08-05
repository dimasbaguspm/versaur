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
    'z-61 bg-white rounded-lg shadow-xl fixed',
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
        top: 'top-8 left-1/2 -translate-x-1/2',
        center: 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
      },
      isOpen: {
        true: 'opacity-100 scale-100',
        false: 'opacity-0 scale-95 pointer-events-none',
      },
    },
    defaultVariants: {
      size: 'md',
      placement: 'center',
      isOpen: false,
    },
  }
)
