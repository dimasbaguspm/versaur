import type { HTMLAttributes, ReactNode } from "react"

export type TooltipPlacement = "top" | "bottom" | "left" | "right"

export interface TooltipGetTriggerPropsOptions {
  /**
   * Unique identifier matching the Tooltip's id
   */
  id: string
  [key: string]: any
}

export interface TooltipProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Unique identifier for the tooltip (matches popovertarget on trigger)
   */
  id: string
  /**
   * Tooltip content (can be text via Tooltip.Text or any custom ReactNode)
   */
  children: ReactNode
  /**
   * Placement relative to the trigger. Defaults to "auto" which detects best placement based on viewport space.
   */
  placement?: TooltipPlacement
  /**
   * Gap between tooltip and trigger in pixels
   */
  gap?: number
  /**
   * Tooltip interaction type:
   * - "hover" (default): Show on hover, hide on hover away (100ms grace period)
   * - "persisted": Show on click, persists until user clicks outside or presses Escape
   */
  type?: "hover" | "persisted"
}

export interface TooltipTextProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Text content
   */
  children: ReactNode
  /**
   * Maximum width (CSS value e.g. "280px", "20rem")
   */
  maxWidth?: string
  /**
   * Maximum number of lines before clamping
   */
  maxLines?: number
}

export declare const TooltipText: React.ForwardRefExoticComponent<
  TooltipTextProps & React.RefAttributes<HTMLDivElement>
>

export interface TooltipStatic {
  /**
   * Text content variant with styling
   */
  Text: typeof TooltipText
  /**
   * Get the required attributes for the trigger element
   */
  getTooltipTriggerProps(options: TooltipGetTriggerPropsOptions): Record<string, unknown>
  /**
   * Close a tooltip popover by id
   * @example Tooltip.close({ id: "my-tooltip" })
   */
  close(options: { id: string }): void
}
