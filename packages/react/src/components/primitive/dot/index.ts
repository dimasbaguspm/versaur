import type { Dot as CoreDot } from "@versaur/core/primitive"

import { Dot } from "./dot"
import type { DotProps } from "./dot.types"

// Declaration merging: namespace + const = Dot.Props, Dot.Variant, etc.
declare namespace Dot {
  export type Variant = CoreDot.Variant
  export type Size = CoreDot.Size
  export type DataAttrs = CoreDot.DataAttrs
  export type Props = DotProps
}
export { Dot }

// Backward-compat flat type exports
export type { DotProps }
export type { DotVariant, DotSize } from "@versaur/core/primitive"
