import type { ButtonIconSize, ButtonIconVariant } from "@versaur/core/primitive"

import { ButtonIcon } from "./button-icon"
import type { ButtonIconProps } from "./button-icon.types"

/**
 * Declaration merging for ButtonIcon component
 */
declare namespace ButtonIcon {
  export type Size = ButtonIconSize
  export type Variant = ButtonIconVariant
  export type Props = ButtonIconProps
}

export { ButtonIcon }
export type { ButtonIconProps }

// Preview exports
