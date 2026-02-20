import { hrStyles } from "@versaur/core/primitive"
import { forwardRef } from "react"

import { cx } from "../../../utils/cx"
import { useDataAttrs } from "../../../hooks/use-data-attrs"
import type { HrProps } from "./hr.types"

/**
 * Hr component — a divider for visually separating content sections
 *
 * @example
 * ```tsx
 * <Hr />
 *
 * <Hr variant="dashed" size="md" spacing="lg" />
 *
 * <Hr orientation="vertical" />
 * ```
 */
export const Hr = forwardRef<HTMLHRElement, HrProps>(({ orientation, variant, size, spacing, className, ...rest }, ref) => {
  const dataAttrs = useDataAttrs({
    orientation,
    size,
    spacing,
    variant,
  })

  return (
    <hr
      ref={ref}
      className={cx(hrStyles.hr, className)}
      role="separator"
      aria-orientation={orientation === "vertical" ? "vertical" : undefined}
      {...dataAttrs}
      {...rest}
    />
  )
})

Hr.displayName = "Hr"
