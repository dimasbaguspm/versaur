type TooltipPlacement = "top" | "bottom" | "left" | "right"

const SUITABLE_SPACE = 100

/**
 * Compute the best tooltip placement based on available viewport space.
 * Prefers "bottom" if it has sufficient space (100px+), otherwise picks direction with most space.
 *
 * @param rect - DOMRect of the trigger element
 * @param suitableSpace - Minimum space threshold for "bottom" placement (default: 100px)
 * @returns The best placement direction
 */
export function computeTooltipPlacement(rect: DOMRect, suitableSpace = SUITABLE_SPACE): TooltipPlacement {
  const space = {
    top: rect.top,
    bottom: window.innerHeight - rect.bottom,
    left: rect.left,
    right: window.innerWidth - rect.right,
  }

  if (space.bottom >= suitableSpace) {
    return "bottom"
  }

  // Otherwise pick direction with most available space
  return (Object.entries(space) as [TooltipPlacement, number][]).reduce((best, cur) =>
    cur[1] > best[1] ? cur : best,
  )[0]
}
