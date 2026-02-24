import { tooltipStyles } from "@versaur/core/primitive"
import type { CSSProperties } from "react"
import { forwardRef, useRef } from "react"

import { useDataAttrs } from "../../../hooks/use-data-attrs"
import { combineRefs } from "../../../utils/combine-refs"
import { cx } from "../../../utils/cx"
import { useTooltipPositioning } from "./use-tooltip-positioning"
import type { TooltipGetTriggerPropsOptions, TooltipProps, TooltipStatic, TooltipTextProps } from "./tooltip.types"

const DEFAULT_GAP = 8

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
  ({ id, children, placement, gap = DEFAULT_GAP, type = "hover", style, className, ...props }, ref) => {
    const tooltipRef = useRef<HTMLDivElement | null>(null)
    const dataAttrs = useDataAttrs({
      placement,
    })

    useTooltipPositioning({
      id,
      placement,
      tooltipRef,
      type,
    })

    return (
      <div
        ref={combineRefs(tooltipRef, ref)}
        id={id}
        className={cx(tooltipStyles.tooltip, className)}
        {...dataAttrs}
        style={
          {
            "--_gap": `${gap}px`,
            positionAnchor: `--tooltip-${id}`,
            ...style,
          } as React.CSSProperties
        }
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
      <div ref={ref} className={cx(tooltipStyles["tooltip-text"], className)} style={customStyle} {...props}>
        {children}
      </div>
    )
  },
)

TooltipText.displayName = "Tooltip.Text"

/**
 * Get required attributes for the trigger element.
 * JavaScript event handlers manage all popover open/close operations.
 */
function getTooltipTriggerProps(options: TooltipGetTriggerPropsOptions): Record<string, unknown> {
  const { id, ...rest } = options
  return {
    "data-tooltip-trigger": id,
    style: { anchorName: `--tooltip-${id}` },
    ...Object.fromEntries(Object.entries(rest).map(([k, v]) => [k, String(v)])),
  }
}

/**
 * Close a tooltip popover by id
 * @param options - Options with the tooltip id
 *
 * @example
 * ```tsx
 * Tooltip.close({ id: "my-tooltip" })
 * ```
 */
function closeTooltip(options: { id: string }) {
  const { id } = options
  const tooltipEl = document.getElementById(id) as any

  if (tooltipEl && tooltipEl.matches(":popover-open")) {
    // Defer the close to allow click event to complete
    requestAnimationFrame(() => {
      // Find and blur the trigger element first
      const triggerEl = document.querySelector(`[data-tooltip-trigger="${id}"]`) as HTMLElement
      if (triggerEl && document.activeElement === triggerEl) {
        triggerEl.blur()
      }

      // Hide the popover
      if (tooltipEl.matches(":popover-open")) {
        tooltipEl.hidePopover()
      }
    })
  }
}

/**
 * Attach static methods to component
 */
export const Tooltip = TooltipRoot as typeof TooltipRoot & TooltipStatic
Tooltip.Text = TooltipText
Tooltip.getTooltipTriggerProps = getTooltipTriggerProps
Tooltip.close = closeTooltip
