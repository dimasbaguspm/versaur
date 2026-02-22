import { headingStyles } from "@versaur/core/primitive"
import { forwardRef } from "react"

import { useDataAttrs } from "../../../hooks/use-data-attrs"
import { cx } from "../../../utils/cx"
import type { HeadingProps } from "./heading.types"

export const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ as = "h2", size, weight, intent, case: caseVal, transform, children, className, ...rest }, ref) => {
    const Tag = as
    const dataAttrs = useDataAttrs({
      as,
      case: caseVal,
      intent,
      size,
      transform,
      weight,
    })

    return (
      <Tag ref={ref} className={cx(headingStyles.heading, className)} {...dataAttrs} {...rest}>
        {children}
      </Tag>
    )
  },
)

Heading.displayName = "Heading"
