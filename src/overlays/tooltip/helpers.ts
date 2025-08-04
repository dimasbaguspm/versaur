import { cva } from '@/utils/variants'

/**
 * Tooltip popover CVA utility
 */
export const tooltipPopoverCva = cva(
  'absolute z-50 px-2 py-1 rounded bg-neutral pointer-events-auto transition-opacity duration-150 min-w-[max-content] max-w-sm whitespace-pre-line',
  {
    variants: {
      position: {
        top: 'bottom-full left-1/2 -translate-x-1/2 mb-2',
        bottom: 'top-full left-1/2 -translate-x-1/2 mt-2',
        left: 'right-full top-1/2 -translate-y-1/2 mr-2',
        right: 'left-full top-1/2 -translate-y-1/2 ml-2',
        auto: 'top-full left-1/2 -translate-x-1/2 mt-2',
      },
    },
    defaultVariants: {
      position: 'auto',
    },
  }
)
