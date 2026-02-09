import type { ComponentType, SVGProps } from "react";
import type { ButtonProps } from "../button/button.types";
import type { ButtonIcon } from "@versaur/core";

/**
 * ButtonIconProps combines Button props (without children) and Icon props
 * @property as - The SVG icon component to render (required)
 * @property ariaLabel - Accessible label for the icon button (required)
 * @property iconProps - Additional props to pass to the icon
 */
export interface ButtonIconProps extends Omit<ButtonProps, "children"> {
  /**
   * The SVG icon component to render
   * @required
   */
  as: ComponentType<SVGProps<SVGSVGElement>>;

  /**
   * Accessible label for the icon button
   * Required for screen readers since there's no text content
   * @required
   */
  "aria-label": string;

  /**
   * Additional props to pass to the icon
   */
  iconProps?: SVGProps<SVGSVGElement>;
}

export type { ButtonIcon as ButtonIconType };
