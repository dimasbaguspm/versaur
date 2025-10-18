import { cva } from '@/utils/variants'

/**
 * Drawer overlay variants using CVA
 * Always provides a dark blurred background to help users focus on the drawer content
 */
export const drawerOverlayVariants = cva(
  'fixed inset-0 z-50 transition-opacity duration-300 bg-foreground/30 backdrop-blur-md',
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
 * Provides different sizes and positions for the drawer content
 */
export const drawerVariants = cva(
  'fixed z-50 shadow-xl flex flex-col max-w-full bg-white',
  {
    variants: {
      position: {
        left: 'left-0 top-0 bottom-0 border-r border-border',
        right: 'right-0 top-0 bottom-0 border-l border-border',
      },
      size: {
        sm: 'w-80',
        md: 'w-96',
        lg: 'w-[28rem]',
        xl: 'w-[32rem]',
        '3/4': 'w-[75vw]',
        full: 'w-full',
      },
      transitionType: {
        slide: 'transition-transform duration-300 ease-in-out',
        fade: 'transition-opacity duration-300 ease-in-out',
      },
    },
    defaultVariants: {
      position: 'right',
      size: 'md',
      transitionType: 'slide',
    },
  }
)

/**
 * Drawer header variants
 */
export const drawerHeaderVariants = cva(
  'flex justify-between items-center px-6 bg-white',
  {
    variants: {
      tab: {
        true: 'pt-4 pb-2',
        false: 'border-b border-border py-4',
      },
    },
    defaultVariants: {
      tab: false,
    },
  }
)

/**
 * Drawer body variants
 */
export const drawerBodyVariants = cva(
  'flex-1 overflow-y-auto px-6 py-4 bg-white'
)

/**
 * Drawer footer variants
 */
export const drawerFooterVariants = cva(
  'px-6 py-4 border-t border-border bg-white'
)
