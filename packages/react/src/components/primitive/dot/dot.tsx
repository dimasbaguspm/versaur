import { dotStyles } from "@versaur/core/primitive"
import type { Dot as CoreDot } from "@versaur/core/primitive"
import { forwardRef } from "react"

import { useDataAttrs } from "../../../hooks/use-data-attrs"
import type { DotProps } from "./dot.types"

/**
 * Dot component for status indicators and visual markers
 *
 * @example
 * ```tsx
 * <Dot variant="success" />
 * <Dot variant="danger" size="small" />
 * <Dot aria-label="Active status" />
 * ```
 */
export const Dot = forwardRef<HTMLSpanElement, DotProps>(({ variant = "primary" as CoreDot.Variant, size = "medium" as CoreDot.Size, ...rest }, ref) => {
  const dataAttrs = useDataAttrs({
    size,
    variant,
  })

  return <span ref={ref} className={dotStyles.dot} {...dataAttrs} {...rest} />
})

Dot.displayName = "Dot"
