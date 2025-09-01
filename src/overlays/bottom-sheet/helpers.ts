import { cva, type VariantProps } from 'class-variance-authority'

/**
 * Variants for the BottomSheet root element.
 * Supports slide up, slide down, and fade animations.
 *
 * @variant open - Whether the sheet is open (for animation state)
 * @variant animation - Animation type: 'slide-up', 'slide-down', 'fade'
 */
export const bottomSheetRootVariants = cva(
  [
    'fixed left-0 bottom-0 z-40 w-full max-h-[90dvh] bg-background rounded-t-xl shadow-lg border-t border-border rounded-lg',
    'transition-transform duration-300 ease-in-out will-change-transform',
    'overflow-hidden', // Ensure content doesn't overflow when keyboard adjusts height
  ],
  {
    variants: {
      open: {
        true: 'translate-y-0',
        false: 'translate-y-full',
      },
    },
    defaultVariants: {
      open: false,
    },
  }
)

/**
 * Variants for the BottomSheet backdrop.
 * Handles fade and pointer events for open/close/exit.
 *
 * @variant open - Whether the sheet is open (for animation state)
 * @variant exiting - Whether the sheet is exiting (for exit animation)
 * @variant blur - Whether to apply blur effect
 */
export const bottomSheetBackdropVariants = cva(
  ['fixed inset-0 z-40 duration-300'],
  {
    variants: {
      open: {
        true: 'backdrop-blur-md bg-foreground/30',
        false: 'pointer-events-none',
      },
    },
    defaultVariants: {
      open: false,
    },
  }
)

export const bottomSheetHeaderVariants = cva(
  'p-4 pb-2 flex justify-between w-full'
)
export const bottomSheetBodyVariants = cva([
  'p-4 py-2 flex-1 overflow-y-auto',
  'scrollbar-thin scrollbar-track-transparent scrollbar-thumb-border',
])
export const bottomSheetFooterVariants = cva('p-4 pt-2 flex-shrink-0')

/**
 * Types for BottomSheet variants
 */
export type BottomSheetRootVariants = VariantProps<
  typeof bottomSheetRootVariants
>
export type BottomSheetBackdropVariants = VariantProps<
  typeof bottomSheetBackdropVariants
>
