import type { HTMLAttributes, ReactNode } from "react";

export type TooltipPlacement =
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
  | "right-end";

export interface TooltipGetTriggerPropsOptions {
  /**
   * Unique identifier matching the Tooltip's id
   */
  id: string;
  /**
   * Gap between tooltip and trigger in pixels
   */
  gap?: number;
  /**
   * Trigger type for determining popoverTarget behavior
   */
  triggerType?: "focus" | "hover" | "all";
  [key: string]: any;
}

export interface TooltipProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Unique identifier for the tooltip (matches popovertarget on trigger)
   */
  id: string;
  /**
   * Tooltip content (can be text via Tooltip.Text or any custom ReactNode)
   */
  children: ReactNode;
  /**
   * Placement relative to the trigger
   */
  placement?: TooltipPlacement;
  /**
   * Gap between tooltip and trigger in pixels
   */
  gap?: number;
  /**
   * When to show tooltip: "focus", "hover", or "all"
   */
  triggerType?: "focus" | "hover" | "all";
}

export interface TooltipTextProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Text content
   */
  children: ReactNode;
  /**
   * Maximum width (CSS value e.g. "280px", "20rem")
   */
  maxWidth?: string;
  /**
   * Maximum number of lines before clamping
   */
  maxLines?: number;
}

export declare const TooltipText: React.ForwardRefExoticComponent<
  TooltipTextProps & React.RefAttributes<HTMLDivElement>
>;

export interface TooltipStatic {
  /**
   * Text content variant with styling
   */
  Text: typeof TooltipText;
  /**
   * Get the required attributes for the trigger element
   */
  getTooltipTriggerProps(
    options: TooltipGetTriggerPropsOptions,
  ): Record<string, string>;
}
