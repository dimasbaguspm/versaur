import { cva } from 'class-variance-authority'

/**
 * PageLoader container variants for different layout needs
 */
export const pageLoaderVariants = cva(
  [
    // Base styles: flex container that centers content
    'flex',
    'items-center',
    'justify-center',
    'flex-col',
    'gap-3',
    // Ensure it takes available space
    'flex-grow',
    'w-full',
  ],
  {
    variants: {
      minimal: {
        false: [
          // Full height for standalone page loading
          'min-h-96',
          'h-full',
        ],
        true: [
          // Minimal height for inline loading states
          'min-h-32',
          'py-8',
        ],
      },
      fullscreen: {
        true: ['fixed', 'inset-0', 'z-100', 'bg-background'],
        false: [],
      },
    },
    defaultVariants: {
      minimal: false,
      fullscreen: false,
    },
  }
)

/**
 * Message text variants for loading message styling
 */
export const messageVariants = cva([
  'text-foreground-light',
  'text-sm',
  'text-center',
  'max-w-xs',
])
