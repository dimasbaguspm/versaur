// Tabs helpers: variants for primary underline style only
import { cva } from 'class-variance-authority'

/**
 * Tabs trigger variants (primary color, underline style)
 * Uses semantic <a> element with proper focus handling
 */
export const tabsTriggerVariants = cva(
  [
    'inline-flex items-center justify-center',
    'px-4 py-2',
    'text-sm font-normal',
    'text-foreground',
    'transition-all duration-200',
    'border-b-2 border-transparent',
    'select-none',
    'cursor-pointer',
    // Focus styles with proper visibility (no cropping)
    'focus-visible:outline-none',
    'focus-visible:ring-2',
    'focus-visible:ring-primary',
    'focus-visible:ring-offset-2',
    'focus-visible:z-10',
    // Disabled state
    'disabled:opacity-50',
    'disabled:pointer-events-none',
  ],
  {
    variants: {
      active: {
        true: 'text-primary font-medium',
        false: 'hover:text-primary',
      },
    },
    defaultVariants: {
      active: false,
    },
  }
)

/**
 * Tabs container variants (nav > ul wrapper)
 * Provides overflow handling and proper focus ring visibility
 */
export const tabsContainerVariants = cva([
  'flex flex-row w-full',
  'border-b border-border',
  'overflow-x-auto overflow-y-visible',
  'whitespace-nowrap',
  // Ensure focus rings with offset are not cropped (2px ring + 2px offset = 4px needed)
  'py-1',
])

/**
 * Tabs indicator variants (animated underline for active tab)
 * Uses primary color only
 */
export const tabsIndicatorVariants = cva([
  'absolute bottom-0',
  'h-0.5 rounded',
  'bg-primary',
  'transition-all duration-300',
  'pointer-events-none',
])
