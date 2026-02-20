import type { Icon } from "@versaur/core/primitive"
import type { ComponentType, SVGProps } from "react"

export type IconProps = Omit<SVGProps<SVGSVGElement>, "ref"> & {
  as: ComponentType<SVGProps<SVGSVGElement>>
  intent?: Icon.Intent | "inherit"
  size?: Icon.Size | "inherit"
}
