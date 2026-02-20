import type { Icon as CoreIcon } from "@versaur/core/primitive"
import { Icon } from "./icon"
import type { IconProps } from "./icon.types"

declare namespace Icon {
  export type Size = CoreIcon.Size | "inherit"
  export type Intent = CoreIcon.Intent | "inherit"
  export type DataAttrs = CoreIcon.DataAttrs
  export type Props = IconProps
}
export { Icon }
export type { IconProps }
export type { IconSize, IconIntent } from "@versaur/core/primitive"
