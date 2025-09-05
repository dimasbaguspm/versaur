import { cva } from 'class-variance-authority'

/**
 * snackbarPlacementVariants: Responsive placement for snackbars
 * - mobile: full width top
 * - desktop/tablet: bottom left
 */
export const snackbarPlacementVariants = cva(
  [
    'fixed z-100 flex flex-col gap-2 px-0 pb-2',
    'w-[80vw] left-0 top-4 md:w-auto md:left-4 md:top-auto md:bottom-4 md:max-w-sm',
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
