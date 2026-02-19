import type { CheckboxGroup as CheckboxGroupCore } from "@versaur/core/forms"

import { CheckboxGroup } from "./checkbox-group"
import type { CheckboxGroupOptionProps, CheckboxGroupRootProps } from "./checkbox-group.types"

export type { CheckboxGroupRootProps, CheckboxGroupOptionProps }

// Namespace declaration merging
declare namespace CheckboxGroup {
  export type Props = CheckboxGroupRootProps
  export type OptionProps = CheckboxGroupOptionProps
  export type Direction = CheckboxGroupCore.Direction
  export type DataAttrs = CheckboxGroupCore.DataAttrs
}

export { CheckboxGroup }
