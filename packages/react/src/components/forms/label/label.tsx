import { labelStyles } from "@versaur/core/forms"
import { forwardRef } from "react"

import { useDataAttrs } from "../../../hooks/use-data-attrs"
import { cx } from "../../../utils/cx"
import type { LabelProps } from "./label.types"

/**
 * Label component for form fields
 * Internal primitive - not exported from main package
 */
export const Label = forwardRef<HTMLLabelElement, LabelProps>(
  ({ required = false, disabled = false, children, className, ...rest }, ref) => {
    const dataAttrs = useDataAttrs({
      disabled,
      required,
    })

    return (
      <label ref={ref} className={cx(labelStyles.label, className)} {...dataAttrs} {...rest}>
        {children}
      </label>
    )
  },
)

Label.displayName = "Label"
