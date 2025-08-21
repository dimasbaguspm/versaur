import { cva } from 'class-variance-authority'

/**
 * snackbarPlacementVariants: Responsive placement for snackbars
 * - mobile: full width bottom
 * - desktop/tablet: bottom left
 */
export const snackbarPlacementVariants = cva(
  [
    'fixed z-100 flex flex-col gap-2 px-0 pb-2',
    'w-screen left-0 bottom-0', // mobile: full width
    'sm:w-auto sm:left-4 sm:bottom-4 sm:max-w-sm', // desktop/tablet
  ].join(' ')
)

/**
 * snackbarTransitionVariants: Animations for snackbars
 * - mobile: fade in/out
 * - desktop/tablet: slide from left in/out
 */
/**
 * snackbarTransitionVariants: Animations for snackbars
 * - mobile: fade in/out
 * - desktop/tablet: slide from left in/out (default), or right if right-aligned
 * Pass direction: 'left' | 'right' for desktop
 */
export const snackbarTransitionVariants = cva('', {
  variants: {
    placement: {
      mobile: 'snackbar-animate-fade-in-out',
      desktop: 'snackbar-animate-slide-in-left',
    },
  },
  defaultVariants: {
    placement: 'mobile',
  },
})
