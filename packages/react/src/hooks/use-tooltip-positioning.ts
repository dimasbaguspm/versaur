import type { MutableRefObject } from "react"
import { useEffect } from "react"

type TriggerType = "focus" | "hover" | "all"
type Placement = "top" | "bottom" | "left" | "right"

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

    // Find trigger element with scoped search to prevent conflicts in Docs view
    // Start from tooltip's context and work outward
    let triggerEl: HTMLElement | null = null

    // First, search from the tooltip's immediate parent (most common case)
    if (tooltipEl.parentElement) {
      triggerEl = tooltipEl.parentElement.querySelector(`[data-tooltip-trigger="${id}"]`)
    }

    // If not found, try searching from tooltip's closest story/section ancestor
    if (!triggerEl) {
      let ancestor: HTMLElement | null = tooltipEl.parentElement
      while (ancestor && !triggerEl) {
        triggerEl = ancestor.querySelector(`[data-tooltip-trigger="${id}"]`)
        // Stop searching if we've found it or reached a natural boundary
        if (triggerEl || ancestor.classList.contains("sbdocs-story") || ancestor.classList.contains("docblock-storylet")) {
          break
        }
        ancestor = ancestor.parentElement
      }
    }

    // Final fallback: document-wide search (should rarely be needed)
    if (!triggerEl) {
      triggerEl = document.querySelector(`[data-tooltip-trigger="${id}"]`)
    }

    if (!triggerEl) {
      return
    }

    // State to track hide timeout and prevent accidental closing
    let hideTimeoutId: ReturnType<typeof setTimeout> | null = null

    /**
     * Show tooltip with proper positioning
     */
    const showTooltip = () => {
      // Cancel any pending hide
      if (hideTimeoutId) {
        clearTimeout(hideTimeoutId)
        hideTimeoutId = null
      }

      if (!tooltipEl.matches(":popover-open")) {
        // Calculate position synchronously before showing to prevent flicker
        calculatePosition(triggerEl, tooltipEl, placement, gap)
        tooltipEl.showPopover()
      }
    }

    /**
     * Hide tooltip with grace period for hover transitions
     */
    const hideTooltip = () => {
      if (hideTimeoutId) {
        clearTimeout(hideTimeoutId)
      }

      // Grace period: wait 100ms to see if mouse moves to tooltip
      hideTimeoutId = setTimeout(() => {
        if (tooltipEl.matches(":popover-open")) {
          tooltipEl.hidePopover()
        }
        hideTimeoutId = null
      }, 100)
    }

    // Handle trigger mouseenter
    const handleMouseEnter = () => {
      if (triggerType === "hover" || triggerType === "all") {
        showTooltip()
      }
    }

    // Handle trigger mouseleave
    const handleMouseLeave = () => {
      if (triggerType === "hover" || triggerType === "all") {
        hideTooltip()
      }
    }

    // Handle trigger focus
    const handleFocus = () => {
      if (triggerType === "focus" || triggerType === "all") {
        showTooltip()
      }
    }

    // Handle trigger blur (for hover trigger type only)
    const handleBlur = () => {
      if (triggerType === "hover") {
        tooltipEl.hidePopover()
      }
    }

    // Handle trigger click (for focus trigger type)
    const handleClick = () => {
      if (triggerType === "focus") {
        if (tooltipEl.matches(":popover-open")) {
          tooltipEl.hidePopover()
        } else {
          showTooltip()
        }
      }
    }

    // Handle tooltip mouseenter to prevent closing when user hovers over it
    const handleTooltipMouseEnter = () => {
      if (hideTimeoutId) {
        clearTimeout(hideTimeoutId)
        hideTimeoutId = null
      }
    }

    // Handle tooltip mouseleave to close when mouse leaves tooltip
    const handleTooltipMouseLeave = () => {
      if (triggerType === "hover" || triggerType === "all") {
        hideTooltip()
      }
    }

    // Debounced scroll/resize handler with reduced delay for better responsiveness
    let resizeTimeoutId: ReturnType<typeof setTimeout> | null = null
    let lastTriggerRect: DOMRect | null = null

    const handleResize = () => {
      // Quick bail if tooltip is closed
      if (!tooltipEl.matches(":popover-open")) {
        return
      }

      // Clear existing timeout
      if (resizeTimeoutId) {
        clearTimeout(resizeTimeoutId)
      }

      // Use shorter debounce (50ms) for better responsiveness in docs view
      resizeTimeoutId = setTimeout(() => {
        if (tooltipEl.matches(":popover-open")) {
          const triggerRect = triggerEl.getBoundingClientRect()

          // Only recalculate if trigger position or size actually changed
          if (
            !lastTriggerRect ||
            lastTriggerRect.top !== triggerRect.top ||
            lastTriggerRect.left !== triggerRect.left ||
            lastTriggerRect.width !== triggerRect.width ||
            lastTriggerRect.height !== triggerRect.height
          ) {
            lastTriggerRect = triggerRect
            calculatePosition(triggerEl, tooltipEl, placement, gap)
          }
        }
        resizeTimeoutId = null
      }, 50)
    }

    // Attach event listeners to trigger
    triggerEl.addEventListener("mouseenter", handleMouseEnter)
    triggerEl.addEventListener("mouseleave", handleMouseLeave)
    triggerEl.addEventListener("focus", handleFocus)
    triggerEl.addEventListener("blur", handleBlur)
    triggerEl.addEventListener("click", handleClick)

    // Attach event listeners to tooltip to extend hover zone
    tooltipEl.addEventListener("mouseenter", handleTooltipMouseEnter)
    tooltipEl.addEventListener("mouseleave", handleTooltipMouseLeave)

    // Attach window listeners for resize/scroll with debouncing
    window.addEventListener("resize", handleResize)
    window.addEventListener("scroll", handleResize, true)

    return () => {
      // Clear any pending timeouts
      if (hideTimeoutId) {
        clearTimeout(hideTimeoutId)
      }
      if (resizeTimeoutId) {
        clearTimeout(resizeTimeoutId)
      }

      // Remove event listeners from trigger
      triggerEl.removeEventListener("mouseenter", handleMouseEnter)
      triggerEl.removeEventListener("mouseleave", handleMouseLeave)
      triggerEl.removeEventListener("focus", handleFocus)
      triggerEl.removeEventListener("blur", handleBlur)
      triggerEl.removeEventListener("click", handleClick)

      // Remove event listeners from tooltip
      tooltipEl.removeEventListener("mouseenter", handleTooltipMouseEnter)
      tooltipEl.removeEventListener("mouseleave", handleTooltipMouseLeave)

      // Remove window listeners
      window.removeEventListener("resize", handleResize)
      window.removeEventListener("scroll", handleResize, true)
    }
  }, [id, placement, gap, triggerType, calculatePosition])
}
