type TooltipPlacement = "top" | "bottom" | "left" | "right"

const SUITABLE_SPACE = 100
const SAFE_MARGIN = 16 // Minimum margin from viewport edges

/**
 * Find the trigger element for a tooltip by ID, scoped to a bounded DOM walk.
 * Stops at document.body to prevent searching too far up the tree.
 */
export function findTooltipTrigger(tooltipEl: HTMLElement, id: string): HTMLElement | null {
  let ancestor: HTMLElement | null = tooltipEl.parentElement
  while (ancestor) {
    const trigger = ancestor.querySelector<HTMLElement>(`[data-tooltip-trigger="${id}"]`)
    if (trigger) return trigger
    if (ancestor === document.body) break
    ancestor = ancestor.parentElement
  }
  return null
}

/**
 * Compute the best tooltip placement based on available viewport space.
 *
 * Algorithm:
 * 1. Prefers "bottom" if it has sufficient space (100px+)
 * 2. For edge placements, checks if the tooltip's actual bounds fit within safe areas:
 *    - Bottom: checks if tooltip's top and horizontal center fit within viewport
 *    - Top: checks if tooltip's bottom and horizontal center fit within viewport
 *    - Right: checks if tooltip's left and vertical center fit within viewport
 *    - Left: checks if tooltip's right and vertical center fit within viewport
 * 3. Falls back to the direction with most available space
 *
 * @param triggerRect - DOMRect of the trigger element
 * @param tooltipSize - Optional tooltip dimensions for more accurate edge detection
 * @param suitableSpace - Minimum space threshold for "bottom" placement (default: 100px)
 * @returns The best placement direction
 */
export function computeTooltipPlacement(
  triggerRect: DOMRect,
  tooltipSize?: { width: number; height: number },
  suitableSpace = SUITABLE_SPACE,
): TooltipPlacement {
  const vw = window.innerWidth
  const vh = window.innerHeight

  const space = {
    top: triggerRect.top,
    bottom: vh - triggerRect.bottom,
    left: triggerRect.left,
    right: vw - triggerRect.right,
  }

  // Prefer bottom if sufficient space
  if (space.bottom >= suitableSpace) {
    return "bottom"
  }

  // If we have tooltip size, do more sophisticated edge detection
  if (tooltipSize) {
    const triggerCenterX = triggerRect.left + triggerRect.width / 2
    const triggerCenterY = triggerRect.top + triggerRect.height / 2

    // Calculate bounds for each placement considering safe area margins
    const placements: Array<[TooltipPlacement, number, boolean]> = []

    // Bottom: check if tooltip top and horizontal center are within safe area
    const bottomFitsEdge =
      triggerRect.bottom + tooltipSize.height + SAFE_MARGIN <= vh &&
      triggerCenterX - tooltipSize.width / 2 >= SAFE_MARGIN &&
      triggerCenterX + tooltipSize.width / 2 <= vw - SAFE_MARGIN
    placements.push(["bottom", space.bottom, bottomFitsEdge])

    // Top: check if tooltip bottom and horizontal center are within safe area
    const topFitsEdge =
      triggerRect.top - tooltipSize.height - SAFE_MARGIN >= 0 &&
      triggerCenterX - tooltipSize.width / 2 >= SAFE_MARGIN &&
      triggerCenterX + tooltipSize.width / 2 <= vw - SAFE_MARGIN
    placements.push(["top", space.top, topFitsEdge])

    // Right: check if tooltip left and vertical center are within safe area
    const rightFitsEdge =
      triggerRect.right + tooltipSize.width + SAFE_MARGIN <= vw &&
      triggerCenterY - tooltipSize.height / 2 >= SAFE_MARGIN &&
      triggerCenterY + tooltipSize.height / 2 <= vh - SAFE_MARGIN
    placements.push(["right", space.right, rightFitsEdge])

    // Left: check if tooltip right and vertical center are within safe area
    const leftFitsEdge =
      triggerRect.left - tooltipSize.width - SAFE_MARGIN >= 0 &&
      triggerCenterY - tooltipSize.height / 2 >= SAFE_MARGIN &&
      triggerCenterY + tooltipSize.height / 2 <= vh - SAFE_MARGIN
    placements.push(["left", space.left, leftFitsEdge])

    // Prioritize placements that fit completely within safe area
    const fittingPlacements = placements.filter(([_, __, fits]) => fits)
    if (fittingPlacements.length > 0) {
      return fittingPlacements.reduce((best, current) => (current[1] > best[1] ? current : best))[0]
    }
  }

  // Fallback: pick direction with most available space
  return (Object.entries(space) as [TooltipPlacement, number][]).reduce((best, cur) =>
    cur[1] > best[1] ? cur : best,
  )[0]
}
