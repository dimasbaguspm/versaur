import { labelStyles } from "@versaur/core"
import { forwardRef } from "react"

import { useDataAttrs } from "../../hooks/use-data-attrs"

/**
 * Label component for form fields
 * Internal primitive - not exported from main package
 */
export const Label = forwardRef<HTMLLabelElement, LabelProps>(
  ({ required = false, disabled = false, children, ...rest }, ref) => {
    const dataAttrs = useDataAttrs({
      disabled,
      required,
    })

    return (
      <label ref={ref} className={labelStyles.label} {...dataAttrs} {...rest}>
        {children}
      </label>
    )
  },
)

Label.displayName = "Label"
