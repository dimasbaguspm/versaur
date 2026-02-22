import type { Radio as RadioCore } from "@versaur/core/forms"

import { Radio } from "./radio"
export type { RadioProps } from "./radio.types"

// Namespace declaration merging for Radio.DataAttrs
declare namespace Radio {
  export type DataAttrs = RadioCore.DataAttrs
}

export { Radio }
