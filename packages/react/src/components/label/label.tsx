import { forwardRef } from "react";
import { labelStyles } from "@versaur/core";
import { useDataAttrs } from "../../hooks/use-data-attrs";
import type { LabelProps } from "./label.types";
import "@versaur/core/label.css";

/**
 * Label component for form fields
 * Internal primitive - not exported from main package
 */
export const Label = forwardRef<HTMLLabelElement, LabelProps>(
  ({ required = false, disabled = false, children, ...rest }, ref) => {
    const dataAttrs = useDataAttrs({
      required,
      disabled,
    });

    return (
      <label ref={ref} className={labelStyles.label} {...dataAttrs} {...rest}>
        {children}
      </label>
    );
  },
);

Label.displayName = "Label";
