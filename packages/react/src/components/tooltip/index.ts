import { Tooltip } from "./tooltip.js"

declare namespace Tooltip {
  export type Placement = import("./tooltip.types.js").TooltipPlacement
  export type Props = import("./tooltip.types.js").TooltipProps
}

export { Tooltip }
export type { TooltipProps, TooltipPlacement } from "./tooltip.types.js"
export { tooltipSections, tooltipProps } from "./preview.js"
