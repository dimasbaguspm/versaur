import { radioStyles } from "@versaur/core/forms"
import { forwardRef } from "react"

import { useDataAttrs } from "../../../hooks/use-data-attrs"
import { cx } from "../../../utils/cx"
import type { RadioProps } from "./radio.types"

/**
 * Radio - Native radio input with custom styling
 *
 * @example
 * ```tsx
 * <Radio
 *   name="plan"
 *   value="basic"
 *   checked={selectedPlan === 'basic'}
 *   onChange={(e) => setSelectedPlan(e.target.value)}
 * >
 *   Basic Plan - $10/month
 * </Radio>
 * ```
 */
export const Radio = forwardRef<HTMLInputElement, RadioProps>(
  ({ disabled = false, children, className, ...rest }, ref) => {
    const dataAttrs = useDataAttrs({
      disabled,
    })

    return (
      <label className={cx(radioStyles.radio, className)} {...dataAttrs}>
        <input
          ref={ref}
          type="radio"
          className={radioStyles.input}
          disabled={disabled}
          {...rest}
        />
        <span className={radioStyles.indicator} />
        {children && <span className={radioStyles.label}>{children}</span>}
      </label>
    )
  },
)

Radio.displayName = "Radio"
