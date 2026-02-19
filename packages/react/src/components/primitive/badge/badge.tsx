import { badgeStyles } from "@versaur/core"
import { forwardRef } from "react"

import { useDataAttrs } from "../../../hooks/use-data-attrs"
import type { BadgeProps } from "./badge.types"

/**
 * Badge component for displaying labels, tags, or status indicators
 *
 * @example
 * ```tsx
 * <Badge variant="primary">New</Badge>
 *
 * <Badge variant="success" size="small" shape="pill">
 *   Active
 * </Badge>
 *
 * <Badge variant="danger">Critical</Badge>
 * ```
 */
export const Badge = forwardRef<HTMLDivElement, BadgeProps>(
  ({ variant = "primary", size = "medium", shape = "rounded", iconLeft, iconRight, children, ...rest }, ref) => {
    const dataAttrs = useDataAttrs({
      shape,
      size,
      variant,
    })

    return (
      <div ref={ref} className={badgeStyles["badge"]} {...dataAttrs} {...rest}>
        {iconLeft}
        {children}
        {iconRight}
      </div>
    )
  },
)

Badge.displayName = "Badge"
