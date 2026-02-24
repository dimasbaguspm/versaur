import type { MutableRefObject } from "react"
import { useEffect, useRef } from "react"

import { computeTooltipPlacement } from "../utils/compute-tooltip-placement"

type TriggerType = "focus" | "hover" | "all"
type Placement = "top" | "bottom" | "left" | "right"

interface UseTooltipPositioningOptions {
  id: string
  tooltipRef: MutableRefObject<HTMLElement | null>
  placement?: Placement
  triggerType: TriggerType
}

/**
 * Find the trigger element for a tooltip by ID, scoped to a bounded DOM walk.
 * Stops at document.body to prevent searching too far up the tree.
 */
function findTooltipTrigger(tooltipEl: HTMLElement, id: string): HTMLElement | null {
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
 * Core tooltip state management - shared by hover and focus handlers.
 * Handles positioning, showing/hiding, and grace period logic.
 */
function createTooltipController(tooltipEl: HTMLElement, triggerEl: HTMLElement, placement?: Placement) {
  let hideTimeoutId: ReturnType<typeof setTimeout> | null = null

  /**
   * Compute placement based on tooltip's actual rendered size.
   * Wait for next frame to ensure content is rendered.
   */
  const computePlacementWhenReady = (): Promise<Placement> => {
    return new Promise((resolve) => {
      requestAnimationFrame(() => {
        const finalPlacement = placement || computeTooltipPlacement(triggerEl.getBoundingClientRect())
        resolve(finalPlacement)
      })
    })
  }

  /**
   * Show tooltip with proper positioning via CSS Anchor Positioning
   */
  const showTooltip = async () => {
    cancelHide()

    // Compute placement after tooltip is shown (so content is rendered and measured)
    const finalPlacement = await computePlacementWhenReady()
    tooltipEl.dataset.placement = finalPlacement

    if (!tooltipEl.matches(":popover-open")) {
      tooltipEl.showPopover()
    }
  }

  /**
   * Hide tooltip with optional grace period for hover transitions.
   * @param deferred - If true, wait 100ms before hiding to allow mouse to move to tooltip.
   */
  const hideTooltip = (deferred: boolean) => {
    if (hideTimeoutId) {
      clearTimeout(hideTimeoutId)
      hideTimeoutId = null
    }

    if (deferred) {
      // Grace period: wait 100ms to see if mouse moves to tooltip
      hideTimeoutId = setTimeout(() => {
        if (tooltipEl.matches(":popover-open")) {
          tooltipEl.hidePopover()
        }
        hideTimeoutId = null
      }, 100)
    } else if (tooltipEl.matches(":popover-open")) {
      // Immediate hide
      tooltipEl.hidePopover()
    }
  }

  /**
   * Cancel any pending hide operation
   */
  const cancelHide = () => {
    if (hideTimeoutId) {
      clearTimeout(hideTimeoutId)
      hideTimeoutId = null
    }
  }

  return { showTooltip, hideTooltip, cancelHide, cleanup: () => clearTimeout(hideTimeoutId ?? undefined) }
}

/**
 * Hook to manage tooltip positioning and trigger interactions.
 *
 * Separated into hover and focus handlers for clarity:
 * - useTooltipHoverHandler: mouseenter/mouseleave on trigger + tooltip (grace period)
 * - useTooltipFocusHandler: focus/blur on trigger (immediate)
 * - Core shared: showTooltip/hideTooltip, DOM discovery, placement computation
 */
export function useTooltipPositioning({ id, tooltipRef, placement, triggerType }: UseTooltipPositioningOptions) {
  const controllerRef = useRef<ReturnType<typeof createTooltipController> | null>(null)
  const triggerRef = useRef<HTMLElement | null>(null)

  // Initialize controller and trigger on mount/when id or placement changes
  useEffect(() => {
    const tooltipEl = tooltipRef.current
    if (!tooltipEl || !id) {
      return
    }

    const trigger = findTooltipTrigger(tooltipEl, id)
    if (!trigger) {
      return
    }

    triggerRef.current = trigger
    controllerRef.current = createTooltipController(tooltipEl, trigger, placement)

    return () => {
      controllerRef.current?.cleanup()
      controllerRef.current = null
    }
  }, [id, placement, tooltipRef])

  // Hover handler
  useEffect(() => {
    if (triggerType !== "hover" && triggerType !== "all") return
    if (!controllerRef.current || !triggerRef.current) return

    const trigger = triggerRef.current
    const controller = controllerRef.current
    const tooltipEl = tooltipRef.current

    if (!tooltipEl) return

    const handleMouseEnter = () => {
      controller.showTooltip()
    }

    const handleMouseLeave = () => {
      controller.hideTooltip(true) // deferred grace period
    }

    const handleTooltipMouseEnter = () => {
      controller.cancelHide()
    }

    const handleTooltipMouseLeave = () => {
      controller.hideTooltip(true) // deferred grace period
    }

    trigger.addEventListener("mouseenter", handleMouseEnter)
    trigger.addEventListener("mouseleave", handleMouseLeave)
    tooltipEl.addEventListener("mouseenter", handleTooltipMouseEnter)
    tooltipEl.addEventListener("mouseleave", handleTooltipMouseLeave)

    return () => {
      trigger.removeEventListener("mouseenter", handleMouseEnter)
      trigger.removeEventListener("mouseleave", handleMouseLeave)
      tooltipEl.removeEventListener("mouseenter", handleTooltipMouseEnter)
      tooltipEl.removeEventListener("mouseleave", handleTooltipMouseLeave)
    }
  }, [triggerType, tooltipRef])

  // Focus handler
  useEffect(() => {
    if (triggerType !== "focus" && triggerType !== "all") return
    if (!controllerRef.current || !triggerRef.current) return

    const trigger = triggerRef.current
    const controller = controllerRef.current

    const handleFocus = () => {
      controller.showTooltip()
    }

    const handleBlur = () => {
      controller.hideTooltip(false) // immediate hide
    }

    trigger.addEventListener("focus", handleFocus)
    trigger.addEventListener("blur", handleBlur)

    return () => {
      trigger.removeEventListener("focus", handleFocus)
      trigger.removeEventListener("blur", handleBlur)
    }
  }, [triggerType])
}
