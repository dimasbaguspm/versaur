import { avatarGroupStyles } from "@versaur/core/blocks"
import { forwardRef } from "react"

import { useDataAttrs } from "../../../hooks/use-data-attrs"
import { cx } from "../../../utils/cx"
import type { AvatarGroupProps } from "./avatar-group.types"

export const AvatarGroup = forwardRef<HTMLDivElement, AvatarGroupProps>(
  (
    {
      direction = "horizontal",
      size = "md",
      align = "center",
      wrap = "nowrap",
      "aria-label": ariaLabel = "Avatar group",
      children,
      className,
      ...rest
    },
    ref,
  ) => {
    const dataAttrs = useDataAttrs({ align, direction, size, wrap })

    return (
      <div
        ref={ref}
        className={cx(avatarGroupStyles["avatar-group"], className)}
        role="group"
        aria-label={ariaLabel}
        {...dataAttrs}
        {...rest}
      >
        {children}
      </div>
    )
  },
)

AvatarGroup.displayName = "AvatarGroup"
