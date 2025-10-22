import { cva } from 'class-variance-authority'
import type { PopoverPlacement } from './types'

/**
 * Popover variants using CVA
 * Base styles for positioned popovers
 */
export const popoverVariants = cva(
  [
    // Base styles
    'fixed',
    'overflow-auto',
  ],
  {
    variants: {
      maxWidth: {
        xs: 'max-w-xs',
        sm: 'max-w-sm',
        md: 'max-w-md',
        lg: 'max-w-lg',
        xl: 'max-w-xl',
        full: 'max-w-full',
      },
    },
    defaultVariants: {
      maxWidth: 'sm',
    },
  }
)

/**
 * Calculate popover position based on trigger element and placement
 */
export function calculatePopoverPosition(
  triggerEl: HTMLElement,
  popoverEl: HTMLDivElement,
  placement: PopoverPlacement = 'bottom',
  gap: number = 8
): React.CSSProperties {
  const triggerRect = triggerEl.getBoundingClientRect()
  const popoverRect = popoverEl.getBoundingClientRect()

  let top = 0
  let left = 0

  // Calculate base position based on placement
  switch (placement) {
    // Top placements
    case 'top':
      top = triggerRect.top - popoverRect.height - gap
      left = triggerRect.left + triggerRect.width / 2 - popoverRect.width / 2
      break
    case 'top-left':
      top = triggerRect.top - popoverRect.height - gap
      left = triggerRect.left
      break
    case 'top-right':
      top = triggerRect.top - popoverRect.height - gap
      left = triggerRect.right - popoverRect.width
      break

    // Right placements
    case 'right':
      top = triggerRect.top + triggerRect.height / 2 - popoverRect.height / 2
      left = triggerRect.right + gap
      break
    case 'right-top':
      top = triggerRect.top
      left = triggerRect.right + gap
      break
    case 'right-bottom':
      top = triggerRect.bottom - popoverRect.height
      left = triggerRect.right + gap
      break

    // Bottom placements
    case 'bottom':
      top = triggerRect.bottom + gap
      left = triggerRect.left + triggerRect.width / 2 - popoverRect.width / 2
      break
    case 'bottom-left':
      top = triggerRect.bottom + gap
      left = triggerRect.left
      break
    case 'bottom-right':
      top = triggerRect.bottom + gap
      left = triggerRect.right - popoverRect.width
      break

    // Left placements
    case 'left':
      top = triggerRect.top + triggerRect.height / 2 - popoverRect.height / 2
      left = triggerRect.left - popoverRect.width - gap
      break
    case 'left-top':
      top = triggerRect.top
      left = triggerRect.left - popoverRect.width - gap
      break
    case 'left-bottom':
      top = triggerRect.bottom - popoverRect.height
      left = triggerRect.left - popoverRect.width - gap
      break
  }

  // Adjust to keep within viewport
  const viewportWidth = window.innerWidth
  const viewportHeight = window.innerHeight
  const margin = 8

  // Horizontal bounds
  if (left + popoverRect.width > viewportWidth - margin) {
    left = viewportWidth - popoverRect.width - margin
  }
  if (left < margin) {
    left = margin
  }

  // Vertical bounds
  if (top + popoverRect.height > viewportHeight - margin) {
    // Try flipping to opposite side for primary placements
    if (placement.startsWith('bottom')) {
      top = triggerRect.top - popoverRect.height - gap
    } else if (top < margin) {
      top = margin
    }
  }
  if (top < margin) {
    // Try flipping to opposite side for primary placements
    if (placement.startsWith('top')) {
      top = triggerRect.bottom + gap
    } else {
      top = margin
    }
  }

  return {
    top: `${Math.max(margin, top)}px`,
    left: `${Math.max(margin, left)}px`,
    margin: 0,
  }
}
