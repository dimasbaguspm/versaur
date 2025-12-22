import { cva } from '@/utils/variants'

export const modalContentVariants = cva(
  [
    'fixed z-61 bg-white rounded-lg shadow-xl',
    'flex flex-col',
    'outline-none',
    'transition-all duration-200 ease-in-out',
    'data-[state=open]:opacity-100 data-[state=open]:pointer-events-auto data-[state=closed]:opacity-0 data-[state=closed]:pointer-events-none data-[state=closed]:select-none',
    '[&::backdrop]:bg-foreground/30 [&::backdrop]:backdrop-blur-md [&::backdrop]:transition-opacity [&::backdrop]:duration-250 [&::backdrop]:ease-[cubic-bezier(0.22,1,0.36,1)]',
  ],
  {
    variants: {
      size: {
        sm: 'w-[20rem] max-w-[90%]', // 20rem, 320px
        md: 'w-[28rem] max-w-[90%]', // 28rem, 448px
        lg: 'w-[36rem] max-w-[90%]', // 36rem, 576px
        'fit-content': 'w-fit max-w-[90%]', // Fit content, no max width
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
