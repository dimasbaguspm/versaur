import type { Radio as RadioCore } from "@versaur/core/forms"

import { Radio } from "./radio"
export type { RadioProps } from "./radio.types"

// Namespace declaration merging for Radio.Variant, Radio.Size
declare namespace Radio {
  export type Variant = RadioCore.Variant
  export type Size = RadioCore.Size
  export type DataAttrs = RadioCore.DataAttrs
}

export { Radio }
