import { forwardRef, useId } from "react";
import { selectStyles } from "@versaur/core";
import { useDataAttrs } from "../../hooks/use-data-attrs";
import { Label } from "../label";
import { HelperText } from "../helper-text";
import { ErrorText } from "../error-text";
import type { SelectProps } from "./select.types";
import "@versaur/core/select.css";

/**
 * Select component
 * Native select dropdown with label, validation states, and helper text
 */
export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      variant = "outline",
      size = "medium",
      label,
      helper,
      error,
      required = false,
      disabled = false,
      placeholder,
      children,
      id: providedId,
      ...rest
    },
    ref
  ) => {
    // Generate unique IDs for accessibility
    const generatedId = useId();
    const selectId = providedId || generatedId;
    const helperId = helper ? `${selectId}-helper` : undefined;
    const errorId = error ? `${selectId}-error` : undefined;
    const describedBy = [helperId, errorId].filter(Boolean).join(" ");

    // Convert props to data attributes
    const dataAttrs = useDataAttrs({
      variant: size === "medium" ? variant : undefined,
      size: size === "medium" ? undefined : size,
      invalid: !!error,
      disabled,
    });

    return (
      <div className={selectStyles.field}>
        {label && (
          <Label htmlFor={selectId} required={required} disabled={disabled}>
            {label}
          </Label>
        )}

        <select
          ref={ref}
          id={selectId}
          className={selectStyles.select}
          disabled={disabled}
          required={required}
          aria-invalid={error ? "true" : undefined}
          aria-disabled={disabled ? "true" : undefined}
          aria-describedby={describedBy || undefined}
          {...dataAttrs}
          {...rest}
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {children}
        </select>

        {error && <ErrorText id={errorId}>{error}</ErrorText>}
        {!error && helper && <HelperText id={helperId}>{helper}</HelperText>}
      </div>
    );
  }
);

Select.displayName = "Select";
