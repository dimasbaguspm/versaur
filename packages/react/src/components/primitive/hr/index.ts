import type { Hr as CoreHr } from "@versaur/core"

import { Hr } from "./hr"
import type { HrProps } from "./hr.types"

// Declaration merging: namespace + const = Hr.Props, Hr.Variant, etc.
declare namespace Hr {
  export type Orientation = CoreHr.Orientation
  export type Variant = CoreHr.Variant
  export type Size = CoreHr.Size
  export type Spacing = CoreHr.Spacing
  export type DataAttrs = CoreHr.DataAttrs
  export type Props = HrProps
}
export { Hr }

// Backward-compat flat type exports
export type { HrProps }
export type { HrOrientation, HrVariant, HrSize, HrSpacing } from "@versaur/core"

