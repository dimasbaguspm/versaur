import { ButtonIcon } from "./button-icon";
import type { ButtonIconProps } from "./button-icon.types";
import type { ButtonIconSize, ButtonIconVariant } from "@versaur/core";

/**
 * Declaration merging for ButtonIcon component
 */
declare namespace ButtonIcon {
  export type Size = ButtonIconSize;
  export type Variant = ButtonIconVariant;
  export type Props = ButtonIconProps;
}

export { ButtonIcon };
export type { ButtonIconProps };

// Preview exports
export { ButtonIconPreview, buttonIconSections, buttonIconProps } from "./preview";
export type { ButtonIconSection } from "./preview";
