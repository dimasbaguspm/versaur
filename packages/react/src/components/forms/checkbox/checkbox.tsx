import { checkboxStyles } from "@versaur/core/forms"
import { forwardRef } from "react"

import { useDataAttrs } from "../../../hooks/use-data-attrs"
import { cx } from "../../../utils/cx"
import type { CheckboxProps } from "./checkbox.types"

/**
 * Checkbox - Native checkbox input with custom styling
 *
 * @example
 * ```tsx
 * <Checkbox
 *   checked={agreed}
 *   onChange={(e) => setAgreed(e.target.checked)}
 * >
 *   I agree to the terms and conditions
 * </Checkbox>
 * ```
 */
export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ disabled = false, required = false, children, className, ...rest }, ref) => {
    const dataAttrs = useDataAttrs({
      disabled,
      required,
    })

    return (
      <label className={cx(checkboxStyles.checkbox, className)} {...dataAttrs}>
        <input
          ref={ref}
          type="checkbox"
          className={checkboxStyles.input}
          disabled={disabled}
          required={required}
          aria-required={required || undefined}
          {...rest}
        />
        <span className={checkboxStyles.indicator} />
        {children && (
          <span className={checkboxStyles.label} data-required={required || undefined}>
            {children}
          </span>
        )}
      </label>
    )
  },
)

Checkbox.displayName = "Checkbox"
