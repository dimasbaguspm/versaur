import type { ChipSingleInput as ChipSingleInputCore } from "@versaur/core/forms"

import { ChipSingleInput } from "./chip-single-input"
import type { ChipSingleInputOptionProps, ChipSingleInputRootProps } from "./chip-single-input.types"

export type { ChipSingleInputRootProps, ChipSingleInputOptionProps }

// Namespace declaration merging
declare namespace ChipSingleInput {
  export type Props = ChipSingleInputRootProps
  export type OptionProps = ChipSingleInputOptionProps
  export type Variant = ChipSingleInputCore.Variant
  export type Size = ChipSingleInputCore.Size
  export type DataAttrs = ChipSingleInputCore.DataAttrs
}

export { ChipSingleInput }
