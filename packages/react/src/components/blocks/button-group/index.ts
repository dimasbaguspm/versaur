import type { ButtonGroup as CoreButtonGroup } from "@versaur/core/primitive"

import { ButtonGroup } from "./button-group"
import type { ButtonGroupProps } from "./button-group.types"

// Declaration merging: namespace + const = ButtonGroup.Props, ButtonGroup.Gap, etc.
declare namespace ButtonGroup {
  export type Gap = CoreButtonGroup.Gap
  export type Direction = CoreButtonGroup.Direction
  export type Align = CoreButtonGroup.Align
  export type Wrap = CoreButtonGroup.Wrap
  export type DataAttrs = CoreButtonGroup.DataAttrs
  export type Props = ButtonGroupProps
}
export { ButtonGroup }

// Backward-compat flat type exports
export type { ButtonGroupProps }
export type { ButtonGroupGap, ButtonGroupDirection, ButtonGroupAlign, ButtonGroupWrap } from "@versaur/core/primitive"

