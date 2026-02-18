import type { MutableRefObject } from "react"
import { useEffect } from "react"

type TriggerType = "focus" | "hover" | "all"
type Placement =
  | "top"
  | "top-start"
  | "top-end"
  | "bottom"
  | "bottom-start"
  | "bottom-end"
  | "left"
  | "left-start"
  | "left-end"
  | "right"
  | "right-start"
  | "right-end"

interface UseTooltipPositioningOptions {
  id: string
  tooltipRef: MutableRefObject<HTMLElement | null>
  placement: Placement
  gap: number
  triggerType: TriggerType
  calculatePosition: (
    trigger: HTMLElement | null,
    tooltip: HTMLElement | null,
    placement: Placement,
    gap: number,
  ) => void
}

/**
 * Hook to manage tooltip positioning and trigger interactions
 */
export function useTooltipPositioning({
  id,
  tooltipRef,
  placement,
  gap,
  triggerType,
  calculatePosition,
}: UseTooltipPositioningOptions) {
  useEffect(() => {
    const tooltipEl = tooltipRef.current
    if (!tooltipEl || !id) {
      return
    }

    const triggerEl = document.querySelector(`[data-tooltip-trigger="${id}"]`) as HTMLElement
    if (!triggerEl) {
      return
    }

    // Handle popover toggle event (after positioning)
    const handleToggle = (e: Event) => {
      if (e instanceof ToggleEvent && e.newState === "open") {
        tooltipEl.removeAttribute("data-positioned")
        requestAnimationFrame(() => {
          calculatePosition(triggerEl, tooltipEl, placement, gap)
        })
      }
    }

    // Handle trigger type interactions
    const handleMouseEnter = () => {
      if (triggerType === "hover" || triggerType === "all") {
        tooltipEl.showPopover()
      }
    }

    const handleMouseLeave = () => {
      if (triggerType === "hover" || triggerType === "all") {
        tooltipEl.hidePopover()
      }
    }

    const handleFocus = () => {
      if (triggerType === "focus" || triggerType === "all") {
        if (!tooltipEl.matches(":popover-open")) {
          tooltipEl.showPopover()
        }
      }
    }

    // Handle click for focus trigger type to toggle popover
    const handleClick = () => {
      if (triggerType === "focus") {
        if (tooltipEl.matches(":popover-open")) {
          tooltipEl.hidePopover()
        } else {
          tooltipEl.showPopover()
        }
      }
    }

    // Only define blur handler for hover trigger type
    const handleBlur =
      triggerType === "hover"
        ? () => {
            tooltipEl.hidePopover()
          }
        : null

    // Recalculate on window resize/scroll
    const handleResize = () => {
      if (tooltipEl.matches(":popover-open")) {
        calculatePosition(triggerEl, tooltipEl, placement, gap)
      }
    }

    // Attach event listeners
    tooltipEl.addEventListener("toggle", handleToggle)
    triggerEl.addEventListener("mouseenter", handleMouseEnter)
    triggerEl.addEventListener("mouseleave", handleMouseLeave)
    triggerEl.addEventListener("focus", handleFocus)
    if (triggerType === "focus") {
      triggerEl.addEventListener("click", handleClick)
    }
    if (handleBlur) {
      triggerEl.addEventListener("blur", handleBlur)
    }
    window.addEventListener("resize", handleResize)
    window.addEventListener("scroll", handleResize, true)

    return () => {
      tooltipEl.removeEventListener("toggle", handleToggle)
      triggerEl.removeEventListener("mouseenter", handleMouseEnter)
      triggerEl.removeEventListener("mouseleave", handleMouseLeave)
      triggerEl.removeEventListener("focus", handleFocus)
      if (triggerType === "focus") {
        triggerEl.removeEventListener("click", handleClick)
      }
      if (handleBlur) {
        triggerEl.removeEventListener("blur", handleBlur)
      }
      window.removeEventListener("resize", handleResize)
      window.removeEventListener("scroll", handleResize, true)
    }
  }, [id, placement, gap, triggerType, calculatePosition])
}
