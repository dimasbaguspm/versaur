"use client"

import { tooltipStyles } from "@versaur/core/primitive"
import type { CSSProperties } from "react"
import { forwardRef, useRef } from "react"

import { cx } from "../../../utils/cx"
import { useDataAttrs } from "../../../hooks/use-data-attrs"
import { useTooltipPositioning } from "../../../hooks/use-tooltip-positioning"
import { combineRefs } from "../../../utils/combine-refs"
import type { TooltipGetTriggerPropsOptions, TooltipProps, TooltipStatic, TooltipTextProps } from "./tooltip.types"

const DEFAULT_GAP = 8
const ARROW_SIZE = 4

type Placement = TooltipProps["placement"]

/**
 * Calculate tooltip position relative to trigger element
 * Positions synchronously before showing to prevent flicker
 */
function calculatePosition(
  trigger: HTMLElement | null,
  tooltip: HTMLElement | null,
  placement: Placement = "top",
  gap: number = DEFAULT_GAP,
) {
  if (!trigger || !tooltip) {
    return
  }

  const triggerRect = trigger.getBoundingClientRect()

  // Measure tooltip: temporarily make it visible to get real dimensions
  // since display:none returns 0,0,0,0 for getBoundingClientRect()
  const originalDisplay = tooltip.style.display
  const originalVisibility = tooltip.style.visibility
  tooltip.style.display = "block"
  tooltip.style.visibility = "hidden"
  tooltip.style.pointerEvents = "none"

  const tooltipRect = tooltip.getBoundingClientRect()

  // Restore original state
  tooltip.style.display = originalDisplay
  tooltip.style.visibility = originalVisibility
  tooltip.style.pointerEvents = "auto"

  let top = 0
  let left = 0
  const offset = gap + ARROW_SIZE / 2

  switch (placement) {
    // Top placement
    case "top": {
      top = triggerRect.top - tooltipRect.height - offset
      left = triggerRect.left + triggerRect.width / 2 - tooltipRect.width / 2
      break
    }

    // Bottom placement
    case "bottom": {
      top = triggerRect.bottom + offset
      left = triggerRect.left + triggerRect.width / 2 - tooltipRect.width / 2
      break
    }

    // Left placement
    case "left": {
      top = triggerRect.top + triggerRect.height / 2 - tooltipRect.height / 2
      left = triggerRect.left - tooltipRect.width - offset
      break
    }

    // Right placement
    case "right": {
      top = triggerRect.top + triggerRect.height / 2 - tooltipRect.height / 2
      left = triggerRect.right + offset
      break
    }
  }

  // For fixed positioning, use viewport coordinates directly (no scroll offset)
  // getBoundingClientRect() already returns viewport-relative coordinates

  // Apply viewport boundary constraints to prevent tooltips from going off-screen
  const viewportWidth = window.innerWidth
  const viewportHeight = window.innerHeight
  const minPadding = 8 // minimum padding from viewport edges

  // Constrain horizontal position
  let constrainedLeft = left
  if (constrainedLeft + tooltipRect.width > viewportWidth - minPadding) {
    constrainedLeft = viewportWidth - tooltipRect.width - minPadding
  }
  if (constrainedLeft < minPadding) {
    constrainedLeft = minPadding
  }

  // Constrain vertical position
  let constrainedTop = top
  if (constrainedTop + tooltipRect.height > viewportHeight - minPadding) {
    constrainedTop = viewportHeight - tooltipRect.height - minPadding
  }
  if (constrainedTop < minPadding) {
    constrainedTop = minPadding
  }

  tooltip.style.top = `${constrainedTop}px`
  tooltip.style.left = `${constrainedLeft}px`
}

/**
 * Tooltip - Popover-based tooltip component using the Popover API
 *
 * Usage with text:
 * ```tsx
 * const triggerProps = Tooltip.getTooltipTriggerProps({ id: "my-tooltip" });
 * <button {...triggerProps}>Hover me</button>
 * <Tooltip id="my-tooltip" placement="top">
 *   <Tooltip.Text>Helpful text</Tooltip.Text>
 * </Tooltip>
 * ```
 *
 * Usage with custom content:
 * ```tsx
 * const triggerProps = Tooltip.getTooltipTriggerProps({ id: "my-menu" });
 * <button {...triggerProps}>Menu</button>
 * <Tooltip id="my-menu" placement="bottom">
 *   <CustomMenu />
 * </Tooltip>
 * ```
 */

/**
 * Tooltip - Popover-based tooltip component using the Popover API
 *
 * Usage:
 * ```tsx
 * const triggerProps = Tooltip.getTooltipTriggerProps({ id: "my-tooltip" });
 * <button {...triggerProps}>Hover me</button>
 * <Tooltip id="my-tooltip" placement="top">Helpful text</Tooltip>
 * ```
 */
const TooltipRoot = forwardRef<HTMLDivElement, TooltipProps>(
  ({ id, children, placement = "top", gap = DEFAULT_GAP, triggerType = "all", style, className, ...props }, ref) => {
    const tooltipRef = useRef<HTMLDivElement | null>(null)
    const dataAttrs = useDataAttrs({
      placement,
    })

    useTooltipPositioning({
      calculatePosition,
      gap,
      id,
      placement,
      tooltipRef,
      triggerType,
    })

    return (
      <div
        ref={combineRefs(tooltipRef, ref)}
        id={id}
        className={cx(tooltipStyles.tooltip, className)}
        {...(dataAttrs as any)}
        style={style}
        {...(props as any)}
        popover="auto"
      >
        {children}
      </div>
    )
  },
)

TooltipRoot.displayName = "Tooltip"

/**
 * Tooltip.Text - Styled text content variant for tooltips
 */
const TooltipText = forwardRef<HTMLDivElement, TooltipTextProps>(
  ({ children, maxWidth, maxLines = 2, style, className, ...props }, ref) => {
    const customStyle: CSSProperties = {
      "--_lines": maxLines,
      "--_max-width": maxWidth,
      ...style,
    } as CSSProperties

    return (
      <div
        ref={ref}
        className={cx(tooltipStyles["tooltip-text"], className)}
        style={customStyle}
        {...props}
      >
        {children}
      </div>
    )
  },
)

TooltipText.displayName = "Tooltip.Text"

/**
 * Get required attributes for the trigger element
 */
function getTooltipTriggerProps(options: TooltipGetTriggerPropsOptions): Record<string, string> {
  const { id, triggerType = "all", ...rest } = options
  // Always add data-tooltip-trigger for finding the trigger in the hook
  const result: Record<string, string> = {
    "data-tooltip-trigger": id,
    ...Object.fromEntries(Object.entries(rest).map(([k, v]) => [k, String(v)])),
  }

  // Only use popoverTarget for non-focus trigger types (hover and all)
  // For focus triggers, JavaScript event handlers manage the popover
  if (triggerType !== "focus") {
    result.popoverTarget = id
  }

  return result
}

/**
 * Attach static methods to component
 */
export const Tooltip = TooltipRoot as typeof TooltipRoot & TooltipStatic
Tooltip.Text = TooltipText
Tooltip.getTooltipTriggerProps = getTooltipTriggerProps
