import type { Checkbox as CheckboxCore } from "@versaur/core/forms"

import { Checkbox } from "./checkbox"
export type { CheckboxProps } from "./checkbox.types"

// Namespace declaration merging
declare namespace Checkbox {
  export type DataAttrs = CheckboxCore.DataAttrs
}

export { Checkbox }
