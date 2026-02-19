import { textAreaStyles } from "@versaur/core/forms"
import { forwardRef, useId } from "react"

import { useDataAttrs } from "../../../hooks/use-data-attrs"
import { ErrorText } from "../error-text"
import { HelperText } from "../helper-text"
import { Label } from "../label"
import type { TextAreaProps } from "./text-area.types"

/**
 * TextArea component
 * Native textarea with label, validation states, and helper text
 */
export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (
    {
      label,
      helper,
      error,
      required = false,
      disabled = false,
      readOnly = false,
      resizable = true,
      minRows = 3,
      id: providedId,
      ...rest
    },
    ref,
  ) => {
    // Generate unique IDs for accessibility
    const generatedId = useId()
    const textareaId = providedId || generatedId
    const helperId = helper ? `${textareaId}-helper` : undefined
    const errorId = error ? `${textareaId}-error` : undefined
    const describedBy = [helperId, errorId].filter(Boolean).join(" ")

    // Convert props to data attributes
    const dataAttrs = useDataAttrs({
      disabled,
      invalid: Boolean(error),
      readOnly,
      resizable: resizable ? "true" : "false",
    })

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
          readOnly={readOnly}
          required={required}
          rows={minRows}
          aria-invalid={error ? "true" : undefined}
          aria-disabled={disabled ? "true" : undefined}
          aria-describedby={describedBy || undefined}
          {...dataAttrs}
          {...rest}
        />

        {error && <ErrorText id={errorId}>{error}</ErrorText>}
        {!error && helper && <HelperText id={helperId}>{helper}</HelperText>}
      </div>
    )
  },
)

TextArea.displayName = "TextArea"
