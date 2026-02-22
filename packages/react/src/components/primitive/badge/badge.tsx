import type { Badge as BadgeCore } from "@versaur/core/primitive"
import { badgeStyles } from "@versaur/core/primitive"
import { forwardRef } from "react"

import { useDataAttrs } from "../../../hooks/use-data-attrs"
import { cx } from "../../../utils/cx"
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
  (
    {
      variant = "primary" as BadgeCore.Variant,
      size = "medium" as BadgeCore.Size,
      shape = "rounded" as BadgeCore.Shape,
      iconLeft,
      iconRight,
      maxWidth,
      children,
      style,
      className,
      ...rest
    },
    ref,
  ) => {
    const hasIconLeft = Boolean(iconLeft)
    const hasIconRight = Boolean(iconRight)
    const hasText = Boolean(children)

    let iconConfig: BadgeCore.IconConfig | undefined
    if (hasIconLeft && hasIconRight && hasText) {
      iconConfig = "both-text"
    } else if (hasIconLeft && hasText) {
      iconConfig = "left-text"
    } else if (hasIconRight && hasText) {
      iconConfig = "right-text"
    } else if (hasIconLeft && hasIconRight) {
      iconConfig = "both"
    } else if (hasIconLeft) {
      iconConfig = "left"
    } else if (hasIconRight) {
      iconConfig = "right"
    }

    const dataAttrs = useDataAttrs({
      shape,
      size,
      variant,
      ...(iconConfig && { iconConfig }),
    })

    const computedStyle: React.CSSProperties = {
      ...style,
      ...(maxWidth && ({ "--vers-comp-badge-max-width": maxWidth } as React.CSSProperties)),
    }

    return (
      <div ref={ref} className={cx(badgeStyles["badge"], className)} {...dataAttrs} {...rest} style={computedStyle}>
        {iconLeft}
        {children}
        {iconRight}
      </div>
    )
  },
)

Badge.displayName = "Badge"
