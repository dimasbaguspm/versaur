import type { ComponentType, SVGProps } from "react";

/**
 * IconProps defines the props for the Icon component
 * @property color - Color variant ('inherit' by default, consumer controls via CSS)
 * @property size - Size variant ('inherit' by default, consumer controls via CSS)
 * @property className - Additional CSS classes
 */
export type IconProps = Omit<SVGProps<SVGSVGElement>, "ref"> & {
  as: ComponentType<SVGProps<SVGSVGElement>>;
  /**
   * Color variant - inherited by default, consumer controls via CSS selectors
   */
  color?: "inherit" | "primary" | "secondary" | "outline" | "ghost" | "danger";

  /**
   * Size variant - inherited by default, consumer controls via CSS selectors
   */
  size?: "inherit" | "xs" | "sm" | "md" | "lg" | "xl";
};
