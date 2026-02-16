import { forwardRef } from "react";
import { checkboxStyles } from "@versaur/core";
import "@versaur/core/checkbox.css";
import { useDataAttrs } from "../../hooks/use-data-attrs";
import type { CheckboxProps } from "./checkbox.types";

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
  (
    {
      variant = "outline",
      size = "medium",
      invalid = false,
      disabled = false,
      children,
      ...rest
    },
    ref
  ) => {
    const dataAttrs = useDataAttrs({
      variant,
      size,
      invalid,
      disabled,
    });

    return (
      <label className={checkboxStyles.checkbox} {...dataAttrs}>
        <input
          ref={ref}
          type="checkbox"
          className={checkboxStyles.input}
          disabled={disabled}
          aria-invalid={invalid || undefined}
          {...rest}
        />
        <span className={checkboxStyles.indicator} />
        {children && <span className={checkboxStyles.label}>{children}</span>}
      </label>
    );
  }
);

Checkbox.displayName = "Checkbox";
