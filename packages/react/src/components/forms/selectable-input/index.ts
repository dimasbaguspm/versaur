import type { SelectableInput as SelectableInputCore } from "@versaur/core/forms"
import { SelectableInput } from "./selectable-input"
export type { SelectableInputRootProps, SelectableInputOptionProps } from "./selectable-input.types"

declare namespace SelectableInput {
  export type DataAttrs = SelectableInputCore.DataAttrs
}

export { SelectableInput }
