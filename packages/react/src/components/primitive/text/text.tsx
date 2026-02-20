import { textStyles } from "@versaur/core/primitive"
import { forwardRef } from "react"

import { cx } from "../../../utils/cx"
import { useDataAttrs } from "../../../hooks/use-data-attrs"
import type { TextProps } from "./text.types"

export const Text = forwardRef<HTMLElement, TextProps>(
  ({ as = "p", size, weight, intent, case: caseVal, transform, children, className, ...rest }, ref) => {
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
      <Tag ref={ref as any} className={cx(textStyles.text, className)} {...dataAttrs} {...rest}>
        {children}
      </Tag>
    )
  },
)

Text.displayName = "Text"
