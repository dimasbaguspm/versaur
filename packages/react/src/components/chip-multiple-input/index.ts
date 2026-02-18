import type { ChipMultipleInput as ChipMultipleInputCore } from "@versaur/core"

import { ChipMultipleInput } from "./chip-multiple-input"
import type { ChipMultipleInputOptionProps, ChipMultipleInputRootProps } from "./chip-multiple-input.types"
export type { ChipMultipleInputRootProps, ChipMultipleInputOptionProps }
export * from "./preview"

declare namespace ChipMultipleInput {
  export type Props = ChipMultipleInputRootProps
  export type OptionProps = ChipMultipleInputOptionProps
  export type Variant = ChipMultipleInputCore.Variant
  export type Size = ChipMultipleInputCore.Size
  export type DataAttrs = ChipMultipleInputCore.DataAttrs
}

export { ChipMultipleInput }
