import type { Banner as BannerCore } from "@versaur/core/primitive"

import { Banner } from "./banner"
import type { BannerProps } from "./banner.types"

// Declaration merging: namespace + const = Banner.Props, Banner.Variant, etc.
declare namespace Banner {
  export type Variant = BannerCore.Variant
  export type DataAttrs = BannerCore.DataAttrs
  export type Props = BannerProps
}
export { Banner }

// Backward-compat flat type exports
export type { BannerProps }
export type { BannerVariant } from "@versaur/core/primitive"
