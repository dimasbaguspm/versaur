import type { Button as CoreButton } from "@versaur/core/primitive"

import { Button } from "./button"
import type { ButtonProps } from "./button.types"

// Declaration merging: namespace + const = Button.Props, Button.Variant, etc.
declare namespace Button {
  export type Variant = CoreButton.Variant
  export type Size = CoreButton.Size
  export type DataAttrs = CoreButton.DataAttrs
  export type Props = ButtonProps
}
export { Button }

// Backward-compat flat type exports
export type { ButtonProps }
export type { ButtonSize, ButtonVariant } from "@versaur/core/primitive"
