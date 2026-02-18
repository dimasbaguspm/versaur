import { forwardRef, useId } from "react";
import { textInputStyles } from "@versaur/core";
import { useDataAttrs } from "../../hooks/use-data-attrs";
import { Label } from "../label";
import { HelperText } from "../helper-text";
import { ErrorText } from "../error-text";
import type { TextInputProps } from "./text-input.types";

/**
 * TextInput component
 * Native text input with label, icons, validation states, and helper text
 */
export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  (
    {
      label,
      helper,
      error,
      required = false,
      disabled = false,
      readOnly = false,
      leftIcon,
      rightIcon,
      id: providedId,
      ...rest
    },
    ref,
  ) => {
    // Generate unique IDs for accessibility
    const generatedId = useId();
    const inputId = providedId || generatedId;
    const helperId = helper ? `${inputId}-helper` : undefined;
    const errorId = error ? `${inputId}-error` : undefined;
    const describedBy = [helperId, errorId].filter(Boolean).join(" ");

    // Convert props to data attributes
    const dataAttrs = useDataAttrs({
      invalid: !!error,
      disabled,
      readOnly,
      hasLeftIcon: !!leftIcon,
      hasRightIcon: !!rightIcon,
    });

    return (
      <div className={textInputStyles.field}>
        {label && (
          <Label htmlFor={inputId} required={required} disabled={disabled}>
            {label}
          </Label>
        )}

        <div className={textInputStyles.wrapper} {...dataAttrs}>
          {leftIcon && (
            <span className={textInputStyles["left-icon"]}>{leftIcon}</span>
          )}

          <input
            ref={ref}
            id={inputId}
            type="text"
            className={textInputStyles.input}
            disabled={disabled}
            readOnly={readOnly}
            required={required}
            aria-invalid={error ? "true" : undefined}
            aria-disabled={disabled ? "true" : undefined}
            aria-describedby={describedBy || undefined}
            {...rest}
          />

          {rightIcon && (
            <span className={textInputStyles["right-icon"]}>{rightIcon}</span>
          )}
        </div>

        {error && <ErrorText id={errorId}>{error}</ErrorText>}
        {!error && helper && <HelperText id={helperId}>{helper}</HelperText>}
      </div>
    );
  },
);

TextInput.displayName = "TextInput";
