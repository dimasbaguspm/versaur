/**
 * Utility for menu positioning and variants
 * Supports Versaur design system
 * Follows the pattern used in badge/helpers.ts for consistency
 */
import { cva } from '@/utils/variants'
import type { MenuPlacement } from './types'

export const menuVariants = cva(
  'z-70 min-w-56 bg-background rounded-lg border border-border transition-all duration-200 ease-out will-change-transform shadow-lg',
  {
    variants: {
      size: {
        sm: 'py-1.5 px-1',
        md: 'py-2 px-1',
      },
      open: {
        true: 'opacity-100 scale-100',
        false: 'opacity-0 pointer-events-none scale-95',
      },
    },
    defaultVariants: {
      size: 'md',
      open: false,
    },
  }
)

/**
 * Get all scrollable ancestors of an element
 */
export function getScrollableAncestors(element: HTMLElement): HTMLElement[] {
  const scrollableAncestors: HTMLElement[] = []
  let parent = element.parentElement

  while (parent && parent !== document.documentElement) {
    const style = getComputedStyle(parent)
    if (
      style.overflow === 'auto' ||
      style.overflow === 'scroll' ||
      style.overflowY === 'auto' ||
      style.overflowY === 'scroll' ||
      style.overflowX === 'auto' ||
      style.overflowX === 'scroll'
    ) {
      scrollableAncestors.push(parent)
    }
    parent = parent.parentElement
  }

  // Always include document element for viewport scrolling
  scrollableAncestors.push(document.documentElement)
  return scrollableAncestors
}

/**
 * Check if trigger element is visible within scrollable containers
 */
export function isTriggerVisible(
  trigger: HTMLElement,
  scrollableAncestors: HTMLElement[]
): boolean {
  const triggerRect = trigger.getBoundingClientRect()

  // Check if trigger is within viewport
  if (
    triggerRect.bottom < 0 ||
    triggerRect.top > window.innerHeight ||
    triggerRect.right < 0 ||
    triggerRect.left > window.innerWidth
  ) {
    return false
  }

  // Check if trigger is within all scrollable ancestors
  for (const ancestor of scrollableAncestors) {
    if (ancestor === document.documentElement) continue

    const ancestorRect = ancestor.getBoundingClientRect()
    if (
      triggerRect.bottom < ancestorRect.top ||
      triggerRect.top > ancestorRect.bottom ||
      triggerRect.right < ancestorRect.left ||
      triggerRect.left > ancestorRect.right
    ) {
      return false
    }
  }

  return true
}

interface PlacementOption {
  name: MenuPlacement
  fits: boolean
  spaceUsed: number
  priority: number
}

/**
 * Determine the best placement for the menu based on available space
 */
export function calculateBestPlacement(
  placement: MenuPlacement,
  contentRect: DOMRect,
  spaceBelow: number,
  spaceAbove: number,
  spaceRight: number,
  spaceLeft: number
): MenuPlacement {
  if (placement !== 'auto') {
    return placement
  }

  const placements: PlacementOption[] = [
    {
      name: 'bottom-start',
      fits: spaceBelow >= contentRect.height && spaceRight >= contentRect.width,
      spaceUsed: spaceBelow,
      priority: 1,
    },
    {
      name: 'bottom-end',
      fits: spaceBelow >= contentRect.height && spaceLeft >= contentRect.width,
      spaceUsed: spaceBelow,
      priority: 2,
    },
    {
      name: 'top-start',
      fits: spaceAbove >= contentRect.height && spaceRight >= contentRect.width,
      spaceUsed: spaceAbove,
      priority: 3,
    },
    {
      name: 'top-end',
      fits: spaceAbove >= contentRect.height && spaceLeft >= contentRect.width,
      spaceUsed: spaceAbove,
      priority: 4,
    },
  ]

  // First, try to find a placement that fits completely
  const fittingPlacements = placements.filter(p => p.fits)

  if (fittingPlacements.length > 0) {
    // Choose the fitting placement with highest priority (lowest priority number)
    return fittingPlacements.sort((a, b) => a.priority - b.priority)[0].name
  }

  // If nothing fits perfectly, choose based on available space
  if (spaceBelow >= spaceAbove) {
    return spaceRight >= spaceLeft ? 'bottom-start' : 'bottom-end'
  } else {
    return spaceRight >= spaceLeft ? 'top-start' : 'top-end'
  }
}

interface PositionCoordinates {
  top?: number
  bottom?: number
  left?: number
  right?: number
}

/**
 * Calculate position coordinates for fixed positioning
 */
export function calculateFixedPosition(
  placement: MenuPlacement,
  triggerRect: DOMRect
): PositionCoordinates {
  const position: PositionCoordinates = {}

  switch (placement) {
    case 'bottom-start':
      position.top = triggerRect.bottom + 4
      position.left = triggerRect.left
      break
    case 'bottom-end':
      position.top = triggerRect.bottom + 4
      position.right = window.innerWidth - triggerRect.right
      break
    case 'top-start':
      position.bottom = window.innerHeight - triggerRect.top + 4
      position.left = triggerRect.left
      break
    case 'top-end':
      position.bottom = window.innerHeight - triggerRect.top + 4
      position.right = window.innerWidth - triggerRect.right
      break
  }

  return position
}

/**
 * Calculate position coordinates for absolute positioning
 */
export function calculateAbsolutePosition(
  placement: MenuPlacement,
  triggerRect: DOMRect
): PositionCoordinates {
  const position: PositionCoordinates = {}

  switch (placement) {
    case 'bottom-start':
      position.top = triggerRect.height + 4
      position.left = 0
      break
    case 'bottom-end':
      position.top = triggerRect.height + 4
      position.right = 0
      break
    case 'top-start':
      position.bottom = triggerRect.height + 4
      position.left = 0
      break
    case 'top-end':
      position.bottom = triggerRect.height + 4
      position.right = 0
      break
  }

  return position
}

/**
 * Apply container boundary constraints to position
 */
export function applyContainerConstraints(
  position: PositionCoordinates,
  placement: MenuPlacement,
  triggerRect: DOMRect,
  contentRect: DOMRect,
  containerRect: { top: number; bottom: number; left: number; right: number }
): { position: PositionCoordinates; maxHeight?: number } {
  const menuRect = {
    top: placement.startsWith('bottom')
      ? triggerRect.bottom + 4
      : triggerRect.top - contentRect.height - 4,
    left: placement.endsWith('start')
      ? triggerRect.left
      : triggerRect.right - contentRect.width,
    width: contentRect.width,
    height: contentRect.height,
  }

  // Horizontal constraints
  if (menuRect.left < containerRect.left + 8) {
    const shift = containerRect.left + 8 - menuRect.left
    if (placement.endsWith('start')) {
      position.left = (position.left || 0) + shift
    } else {
      position.right = (position.right || 0) - shift
    }
  } else if (menuRect.left + menuRect.width > containerRect.right - 8) {
    const shift = menuRect.left + menuRect.width - (containerRect.right - 8)
    if (placement.endsWith('start')) {
      position.left = (position.left || 0) - shift
    } else {
      position.right = (position.right || 0) + shift
    }
  }

  // Vertical constraints and max height
  let maxHeight: number | undefined
  if (placement.startsWith('bottom')) {
    const availableHeight = Math.max(
      50,
      containerRect.bottom - triggerRect.bottom - 16
    )
    if (contentRect.height > availableHeight) {
      maxHeight = availableHeight
    }
  } else {
    const availableHeight = Math.max(
      50,
      triggerRect.top - containerRect.top - 16
    )
    if (contentRect.height > availableHeight) {
      maxHeight = availableHeight
    }
  }

  return { position, maxHeight }
}

/**
 * Apply basic viewport constraints for absolute positioning
 */
export function applyViewportConstraints(
  position: PositionCoordinates,
  placement: MenuPlacement,
  triggerRect: DOMRect,
  contentRect: DOMRect
): PositionCoordinates {
  const menuRect = {
    top: placement.startsWith('bottom')
      ? triggerRect.height + 4
      : -contentRect.height - 4,
    left: placement.endsWith('start') ? 0 : -contentRect.width,
    width: contentRect.width,
    height: contentRect.height,
  }

  // Horizontal viewport overflow check
  if (triggerRect.left + menuRect.left < 8) {
    const shift = 8 - (triggerRect.left + menuRect.left)
    if (placement.endsWith('start')) {
      position.left = (position.left || 0) + shift
    } else {
      position.right = (position.right || 0) - shift
    }
  } else if (
    triggerRect.left + menuRect.left + menuRect.width >
    window.innerWidth - 8
  ) {
    const shift =
      triggerRect.left +
      menuRect.left +
      menuRect.width -
      (window.innerWidth - 8)
    if (placement.endsWith('start')) {
      position.left = (position.left || 0) - shift
    } else {
      position.right = (position.right || 0) + shift
    }
  }

  return position
}
