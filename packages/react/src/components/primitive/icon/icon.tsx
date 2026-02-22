import { iconStyles } from "@versaur/core/primitive"
import React from "react"

import { useDataAttrs } from "../../../hooks/use-data-attrs"
import { cx } from "../../../utils/cx"
import type { IconProps } from "./icon.types"

export const Icon = React.forwardRef<SVGSVGElement, IconProps>(function Icon(
  { intent = "inherit", size = "inherit", as: As, className, ...rest },
  ref,
) {
  const dataAttrs = useDataAttrs({ intent, size })
  return <As ref={ref} className={cx(iconStyles.icon, className)} {...dataAttrs} {...rest} />
})

Icon.displayName = "Icon"
