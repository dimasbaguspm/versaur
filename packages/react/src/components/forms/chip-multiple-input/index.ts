import type { ChipMultipleInput as ChipMultipleInputCore } from "@versaur/core/forms"

import { ChipMultipleInput } from "./chip-multiple-input"
import type { ChipMultipleInputOptionProps, ChipMultipleInputRootProps } from "./chip-multiple-input.types"
export type { ChipMultipleInputRootProps, ChipMultipleInputOptionProps }

declare namespace ChipMultipleInput {
  export type Props = ChipMultipleInputRootProps
  export type OptionProps = ChipMultipleInputOptionProps
  export type Gap = ChipMultipleInputCore.Gap
  export type Wrap = ChipMultipleInputCore.Wrap
  export type DataAttrs = ChipMultipleInputCore.DataAttrs
}

export { ChipMultipleInput }
