import { checkboxStyles } from "@versaur/core"
import { forwardRef } from "react"

import { useDataAttrs } from "../../../hooks/use-data-attrs"
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
  ({ invalid = false, disabled = false, required = false, children, ...rest }, ref) => {
    const dataAttrs = useDataAttrs({
      disabled,
      invalid,
      required,
    })

    return (
      <label className={checkboxStyles.checkbox} {...dataAttrs}>
        <input
          ref={ref}
          type="checkbox"
          className={checkboxStyles.input}
          disabled={disabled}
          required={required}
          aria-invalid={invalid || undefined}
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
