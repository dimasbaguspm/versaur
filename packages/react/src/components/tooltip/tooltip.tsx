"use client"

import { tooltipStyles } from "@versaur/core"
import type { CSSProperties } from "react"
import { forwardRef, useRef } from "react"

import { useDataAttrs } from "../../hooks/use-data-attrs"
import { useTooltipPositioning } from "../../hooks/use-tooltip-positioning"
import { combineRefs } from "../../utils/combine-refs"
import type { TooltipGetTriggerPropsOptions, TooltipProps, TooltipStatic, TooltipTextProps } from "./tooltip.types"

const DEFAULT_GAP = 8
const ARROW_SIZE = 4

type Placement = TooltipProps["placement"]

/**
 * Calculate tooltip position relative to trigger element
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

  // Mark as positioned before rendering
  tooltip.setAttribute("data-positioned", "true")

  const triggerRect = trigger.getBoundingClientRect()
  const tooltipRect = tooltip.getBoundingClientRect()

  let top = 0
  let left = 0
  const offset = gap + ARROW_SIZE / 2

  switch (placement) {
    // Top placements
    case "top": {
      top = triggerRect.top - tooltipRect.height - offset
      left = triggerRect.left + triggerRect.width / 2 - tooltipRect.width / 2
      break
    }
    case "top-start": {
      top = triggerRect.top - tooltipRect.height - offset
      left = triggerRect.left
      break
    }
    case "top-end": {
      top = triggerRect.top - tooltipRect.height - offset
      left = triggerRect.right - tooltipRect.width
      break
    }

    // Bottom placements
    case "bottom": {
      top = triggerRect.bottom + offset
      left = triggerRect.left + triggerRect.width / 2 - tooltipRect.width / 2
      break
    }
    case "bottom-start": {
      top = triggerRect.bottom + offset
      left = triggerRect.left
      break
    }
    case "bottom-end": {
      top = triggerRect.bottom + offset
      left = triggerRect.right - tooltipRect.width
      break
    }

    // Left placements
    case "left": {
      top = triggerRect.top + triggerRect.height / 2 - tooltipRect.height / 2
      left = triggerRect.left - tooltipRect.width - offset
      break
    }
    case "left-start": {
      top = triggerRect.top
      left = triggerRect.left - tooltipRect.width - offset
      break
    }
    case "left-end": {
      top = triggerRect.bottom - tooltipRect.height
      left = triggerRect.left - tooltipRect.width - offset
      break
    }

    // Right placements
    case "right": {
      top = triggerRect.top + triggerRect.height / 2 - tooltipRect.height / 2
      left = triggerRect.right + offset
      break
    }
    case "right-start": {
      top = triggerRect.top
      left = triggerRect.right + offset
      break
    }
    case "right-end": {
      top = triggerRect.bottom - tooltipRect.height
      left = triggerRect.right + offset
      break
    }
  }

  // Add scroll offset
  const scrollLeft = window.scrollX || document.documentElement.scrollLeft
  const scrollTop = window.scrollY || document.documentElement.scrollTop

  tooltip.style.top = `${top + scrollTop}px`
  tooltip.style.left = `${left + scrollLeft}px`
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
  ({ id, children, placement = "top", gap = DEFAULT_GAP, triggerType = "all", style, ...props }, ref) => {
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
        className={tooltipStyles.tooltip}
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
        className={`${tooltipStyles["tooltip-text"]}${className ? ` ${className}` : ""}`}
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
