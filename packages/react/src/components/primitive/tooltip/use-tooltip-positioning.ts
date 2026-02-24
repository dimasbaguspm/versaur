import type { MutableRefObject } from "react"
import { useEffect, useRef } from "react"

import { computeTooltipPlacement, findTooltipTrigger } from "./helpers"

type TooltipPlacement = "top" | "bottom" | "left" | "right"
type TooltipType = "hover" | "persisted"

interface UseTooltipPositioningOptions {
  id: string
  tooltipRef: MutableRefObject<HTMLElement | null>
  placement?: TooltipPlacement
  type: TooltipType
}

/**
 * Core tooltip state management - shared by hover and persisted handlers.
 * Handles positioning, showing/hiding, and grace period logic.
 */
function createTooltipController(tooltipEl: HTMLElement, triggerEl: HTMLElement, placement?: TooltipPlacement) {
  let hideTimeoutId: ReturnType<typeof setTimeout> | null = null

  /**
   * Compute placement based on tooltip's actual rendered size.
   * Wait for next frame to ensure content is rendered and measured.
   */
  const computePlacementWhenReady = (): Promise<TooltipPlacement> => {
    return new Promise((resolve) => {
      requestAnimationFrame(() => {
        // Get tooltip's actual size for smarter edge detection
        const tooltipRect = tooltipEl.getBoundingClientRect()
        const tooltipSize = { width: tooltipRect.width, height: tooltipRect.height }

        const finalPlacement =
          placement || computeTooltipPlacement(triggerEl.getBoundingClientRect(), tooltipSize)
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
 * Internal hook to manage tooltip positioning and trigger interactions.
 *
 * Separated into hover and persisted handlers:
 * - Hover: mouseenter/mouseleave on trigger + tooltip (grace period)
 * - Persisted: focus/blur on trigger (immediate) + click-to-dismiss
 *
 * Not exported - for internal tooltip component use only.
 */
export function useTooltipPositioning({
  id,
  tooltipRef,
  placement,
  type,
}: UseTooltipPositioningOptions) {
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
    if (type !== "hover") return
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
  }, [type, tooltipRef])

  // Persisted handler (click-to-show, stays open until click outside or Escape)
  useEffect(() => {
    if (type !== "persisted") return
    if (!controllerRef.current || !triggerRef.current) return

    const trigger = triggerRef.current
    const controller = controllerRef.current
    const tooltipEl = tooltipRef.current

    if (!tooltipEl) return

    // Handle click on trigger to toggle tooltip
    const handleTriggerClick = (event: MouseEvent) => {
      event.stopPropagation()
      if (tooltipEl.matches(":popover-open")) {
        controller.hideTooltip(false)
      } else {
        controller.showTooltip()
      }
    }

    // Handle click outside trigger and tooltip to close
    const handleDocumentClick = (event: MouseEvent) => {
      const target = event.target as Node
      if (
        tooltipEl.matches(":popover-open") &&
        !trigger.contains(target) &&
        !tooltipEl.contains(target)
      ) {
        controller.hideTooltip(false)
      }
    }

    // Handle escape key to close tooltip
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && tooltipEl.matches(":popover-open")) {
        controller.hideTooltip(false)
      }
    }

    trigger.addEventListener("click", handleTriggerClick)
    document.addEventListener("click", handleDocumentClick)
    document.addEventListener("keydown", handleEscape)

    return () => {
      trigger.removeEventListener("click", handleTriggerClick)
      document.removeEventListener("click", handleDocumentClick)
      document.removeEventListener("keydown", handleEscape)
    }
  }, [type, tooltipRef])
}
