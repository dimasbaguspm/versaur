import { forwardRef, useId } from "react";
import { textAreaStyles } from "@versaur/core";
import { useDataAttrs } from "../../hooks/use-data-attrs";
import { Label } from "../label";
import { HelperText } from "../helper-text";
import { ErrorText } from "../error-text";
import type { TextAreaProps } from "./text-area.types";
import "@versaur/core/text-area.css";

/**
 * TextArea component
 * Native textarea with label, validation states, and helper text
 */
export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (
    {
      variant = "outline",
      size = "medium",
      label,
      helper,
      error,
      required = false,
      disabled = false,
      resize = "vertical",
      id: providedId,
      ...rest
    },
    ref
  ) => {
    // Generate unique IDs for accessibility
    const generatedId = useId();
    const textareaId = providedId || generatedId;
    const helperId = helper ? `${textareaId}-helper` : undefined;
    const errorId = error ? `${textareaId}-error` : undefined;
    const describedBy = [helperId, errorId].filter(Boolean).join(" ");

    // Convert props to data attributes
    const dataAttrs = useDataAttrs({
      variant: size === "medium" ? variant : undefined,
      size: size === "medium" ? undefined : size,
      invalid: !!error,
      disabled,
      resize,
    });

    return (
      <div className={textAreaStyles.field}>
        {label && (
          <Label htmlFor={textareaId} required={required} disabled={disabled}>
            {label}
          </Label>
        )}

        <textarea
          ref={ref}
          id={textareaId}
          className={textAreaStyles.textarea}
          disabled={disabled}
          required={required}
          aria-invalid={error ? "true" : undefined}
          aria-disabled={disabled ? "true" : undefined}
          aria-describedby={describedBy || undefined}
          {...dataAttrs}
          {...rest}
        />

        {error && <ErrorText id={errorId}>{error}</ErrorText>}
        {!error && helper && <HelperText id={helperId}>{helper}</HelperText>}
      </div>
    );
  }
);

TextArea.displayName = "TextArea";
