import { cva } from '@/utils/variants'

/**
 * Drawer overlay variants using CVA
 * Always provides a dark blurred background to help users focus on the drawer content
 */
export const drawerOverlayVariants = cva(
  'fixed inset-0 z-50 transition-opacity duration-300 bg-black/30 backdrop-blur-md',
  {
    variants: {
      state: {
        open: 'opacity-100',
        closed: 'opacity-0 pointer-events-none',
      },
    },
    defaultVariants: {
      state: 'closed',
    },
  }
)

/**
 * Drawer content variants using CVA
 * Provides different sizes, positions, and visual styles for the drawer content
 * Glass variant creates a transparent glass-like appearance with backdrop blur
 */
export const drawerVariants = cva('fixed z-50 shadow-xl flex flex-col', {
  variants: {
    position: {
      left: 'left-0 top-0 bottom-0 border-r',
      right: 'right-0 top-0 bottom-0 border-l',
    },
    size: {
      sm: 'w-80',
      md: 'w-96',
      lg: 'w-[28rem]',
      xl: 'w-[32rem]',
      '3/4': 'w-[75vw]',
      full: 'w-full',
    },
    variant: {
      default: 'bg-white border-gray-200',
      glass: 'bg-white/10 backdrop-blur-lg border-white/20',
    },
    transitionType: {
      slide: 'transition-transform duration-300 ease-in-out',
      fade: 'transition-opacity duration-300 ease-in-out',
    },
  },
  defaultVariants: {
    position: 'right',
    size: 'md',
    variant: 'default',
    transitionType: 'slide',
  },
})

/**
 * Drawer header variants
 * Glass variant creates a transparent header that maintains layout structure
 */
export const drawerHeaderVariants = cva('flex-shrink-0 px-6 py-4 border-b', {
  variants: {
    variant: {
      default: 'bg-white border-gray-200',
      glass: 'bg-transparent border-white/10',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
})

/**
 * Drawer body variants
 */
export const drawerBodyVariants = cva('flex-1 overflow-y-auto px-6 py-4', {
  variants: {
    variant: {
      default: 'bg-white',
      glass: 'bg-transparent',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
})

/**
 * Drawer footer variants
 * Glass variant creates a transparent footer that maintains layout structure
 * Responsive flex behavior: on small screens children expand, on larger screens children are right-aligned and sized to content
 */
export const drawerFooterVariants = cva('flex-shrink-0 px-6 py-4 border-t', {
  variants: {
    variant: {
      default: 'bg-white border-gray-200',
      glass: 'bg-transparent border-white/10',
    },
    responsiveFlex: {
      true: 'flex flex-row gap-3 sm:justify-end [&>*]:sm:flex-grow-0 [&>*]:flex-grow',
      false: 'flex gap-2',
    },
  },
  defaultVariants: {
    variant: 'default',
    responsiveFlex: true,
  },
})
