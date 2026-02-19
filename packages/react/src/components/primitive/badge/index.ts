import type { Badge as CoreBadge } from "@versaur/core"

import { Badge } from "./badge"
import type { BadgeProps } from "./badge.types"

// Declaration merging: namespace + const = Badge.Props, Badge.Variant, etc.
declare namespace Badge {
  export type Variant = CoreBadge.Variant
  export type Size = CoreBadge.Size
  export type Shape = CoreBadge.Shape
  export type DataAttrs = CoreBadge.DataAttrs
  export type Props = BadgeProps
}
export { Badge }

// Backward-compat flat type exports
export type { BadgeProps }
export type { BadgeVariant, BadgeSize, BadgeShape } from "@versaur/core"

