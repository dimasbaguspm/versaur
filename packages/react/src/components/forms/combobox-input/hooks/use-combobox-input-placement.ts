import { useEffect, useRef, useState } from "react"
import { computeTooltipPlacement } from "../../../primitive/tooltip/helpers"

/**
 * Handles two-pass positioning for popup variant (Popover API + CSS Anchor Positioning)
 * Shows popover off-screen first, measures real dimensions, then sets placement
 * Uses tooltip placement logic with allowed placements restriction
 */
export function useComboboxInputPlacement(isOpen: boolean, variant: "popup" | "drawer") {
  const [placement, setPlacement] = useState<"top" | "bottom">("bottom")
  const internalRef = useRef<HTMLUListElement | null>(null)

  useEffect(() => {
    if (variant !== "popup") return
    if (!isOpen) return

    const listboxEl = internalRef.current
    if (!listboxEl) return

    // Pass 1: Show popover off-screen to get real dimensions
    const isOpenNow = listboxEl.matches(":popover-open")
    if (!isOpenNow) {
      listboxEl.showPopover()
    }

    // Pass 2: Next frame, measure and compute best placement
    requestAnimationFrame(() => {
      const buttonEl = listboxEl.previousElementSibling as HTMLElement
      if (!buttonEl) return

      const buttonRect = buttonEl.getBoundingClientRect()
      const listboxRect = listboxEl.getBoundingClientRect()
      const listboxSize = {
        width: listboxRect.width,
        height: listboxRect.height,
      }

      // Use tooltip placement logic, restricted to top/bottom
      const newPlacement = computeTooltipPlacement(
        buttonRect,
        listboxSize,
        100,
        ["top", "bottom"] as const,
      ) as "top" | "bottom"
      setPlacement(newPlacement)
    })
  }, [isOpen, variant])

  return { internalRef, placement }
}
