import type { Checkbox as CheckboxCore } from "@versaur/core"

import { Checkbox } from "./checkbox"
export type { CheckboxProps } from "./checkbox.types"
export * from "./preview"

// Namespace declaration merging for Checkbox.Variant, Checkbox.Size
declare namespace Checkbox {
  export type Variant = CheckboxCore.Variant
  export type Size = CheckboxCore.Size
  export type DataAttrs = CheckboxCore.DataAttrs
}

export { Checkbox }
