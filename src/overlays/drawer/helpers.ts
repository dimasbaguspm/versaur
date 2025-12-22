import { cva } from '@/utils/variants'

/**
 * Drawer content variants using CVA
 * Provides different sizes and positions for the drawer content
 */
export const drawerVariants = cva(
  'fixed z-50 inset-y-0 m-0 border-0 p-0 bg-white shadow-xl flex flex-col max-w-full h-full max-h-screen outline-none overflow-hidden transition-[transform,opacity] duration-250 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-[transform,opacity] [transform:translateZ(0)] data-[state=open]:opacity-100 data-[state=open]:pointer-events-auto data-[state=closed]:opacity-0 data-[state=closed]:pointer-events-none data-[state=closed]:select-none [&::backdrop]:bg-foreground/30 [&::backdrop]:backdrop-blur-md [&::backdrop]:transition-opacity [&::backdrop]:duration-250 [&::backdrop]:ease-[cubic-bezier(0.22,1,0.36,1)]',
  {
    variants: {
      position: {
        left: 'left-0 right-auto top-0 bottom-0 border-r border-border data-[state=open]:translate-x-0 data-[state=closed]:-translate-x-full',
        right:
          'right-0 left-auto top-0 bottom-0 border-l border-border data-[state=open]:translate-x-0 data-[state=closed]:translate-x-full',
      },
      size: {
        sm: 'w-80',
        md: 'w-96',
        lg: 'w-[28rem]',
        xl: 'w-[32rem]',
        '3/4': 'w-[75vw]',
        full: 'w-full',
      },
    },
    defaultVariants: {
      position: 'right',
      size: 'md',
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
