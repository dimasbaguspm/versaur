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
 * 1. When tooltip dimensions are available:
 *    - Calculate which placements fit fully within safe area margins
 *    - Prefer "bottom" among fitting placements (best default)
 *    - Otherwise pick fitting placement with most available space
 *    - If no placement fits fully, fallback to direction with most space
 * 2. Without dimensions (legacy fallback):
 *    - Prefer bottom if 100px+ space, otherwise pick most space
 *
 * @param triggerRect - DOMRect of the trigger element
 * @param tooltipSize - Tooltip dimensions for accurate edge detection
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

  // When we have tooltip size, do sophisticated edge detection with actual dimensions
  if (tooltipSize) {
    const triggerCenterX = triggerRect.left + triggerRect.width / 2
    const triggerCenterY = triggerRect.top + triggerRect.height / 2

    // Calculate bounds for each placement considering safe area margins
    const placements: Array<[TooltipPlacement, number, boolean]> = [
      // Bottom: check if tooltip fits below trigger
      [
        "bottom",
        space.bottom,
        triggerRect.bottom + tooltipSize.height + SAFE_MARGIN <= vh &&
          triggerCenterX - tooltipSize.width / 2 >= SAFE_MARGIN &&
          triggerCenterX + tooltipSize.width / 2 <= vw - SAFE_MARGIN,
      ],

      // Top: check if tooltip fits above trigger
      [
        "top",
        space.top,
        triggerRect.top - tooltipSize.height - SAFE_MARGIN >= 0 &&
          triggerCenterX - tooltipSize.width / 2 >= SAFE_MARGIN &&
          triggerCenterX + tooltipSize.width / 2 <= vw - SAFE_MARGIN,
      ],

      // Right: check if tooltip fits to the right of trigger
      [
        "right",
        space.right,
        triggerRect.right + tooltipSize.width + SAFE_MARGIN <= vw &&
          triggerCenterY - tooltipSize.height / 2 >= SAFE_MARGIN &&
          triggerCenterY + tooltipSize.height / 2 <= vh - SAFE_MARGIN,
      ],

      // Left: check if tooltip fits to the left of trigger
      [
        "left",
        space.left,
        triggerRect.left - tooltipSize.width - SAFE_MARGIN >= 0 &&
          triggerCenterY - tooltipSize.height / 2 >= SAFE_MARGIN &&
          triggerCenterY + tooltipSize.height / 2 <= vh - SAFE_MARGIN,
      ],
    ]

    // Prioritize placements that fit completely within safe area
    const fittingPlacements = placements.filter(([_, __, fits]) => fits)
    if (fittingPlacements.length > 0) {
      // Prefer bottom among fitting placements; otherwise pick most space
      const bottomFit = fittingPlacements.find(([dir]) => dir === "bottom")
      if (bottomFit) return "bottom"
      return fittingPlacements.reduce((best, cur) => (cur[1] > best[1] ? cur : best))[0]
    }

    // No placement fits fully — fallback to most space
    return (Object.entries(space) as [TooltipPlacement, number][]).reduce((best, cur) =>
      cur[1] > best[1] ? cur : best,
    )[0]
  }

  // Without dimensions (legacy fallback): prefer bottom if sufficient space
  if (space.bottom >= suitableSpace) {
    return "bottom"
  }

  // Fallback: pick direction with most available space
  return (Object.entries(space) as [TooltipPlacement, number][]).reduce((best, cur) =>
    cur[1] > best[1] ? cur : best,
  )[0]
}
