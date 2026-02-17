import {
  forwardRef,
  useId,
  ForwardRefExoticComponent,
  RefAttributes,
} from "react";
import { selectStyles } from "@versaur/core";
import { useDataAttrs } from "../../hooks/use-data-attrs";
import { Label } from "../label";
import { HelperText } from "../helper-text";
import { ErrorText } from "../error-text";
import type {
  SelectProps,
  SelectOptionProps,
  SelectOptionGroupProps,
} from "./select.types";
import "@versaur/core/select.css";

/**
 * SelectOption component
 * An option within a Select dropdown
 */
export const SelectOption = forwardRef<HTMLOptionElement, SelectOptionProps>(
  ({ children, ...rest }, ref) => {
    return (
      <option ref={ref} {...rest}>
        {children}
      </option>
    );
  },
);

SelectOption.displayName = "Select.Option";

/**
 * SelectOptionGroup component
 * A grouped set of options within a Select dropdown
 */
export const SelectOptionGroup = forwardRef<
  HTMLOptGroupElement,
  SelectOptionGroupProps
>(({ label, children, ...rest }, ref) => {
  return (
    <optgroup ref={ref} label={label} {...rest}>
      {children}
    </optgroup>
  );
});

SelectOptionGroup.displayName = "Select.OptionGroup";

/**
 * Select component
 * Native select dropdown with label, validation states, and helper text
 */
const SelectComponent = forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
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
    ref,
  ) => {
    // Generate unique IDs for accessibility
    const generatedId = useId();
    const selectId = providedId || generatedId;
    const helperId = helper ? `${selectId}-helper` : undefined;
    const errorId = error ? `${selectId}-error` : undefined;
    const describedBy = [helperId, errorId].filter(Boolean).join(" ");

    // Convert props to data attributes
    const dataAttrs = useDataAttrs({
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
  },
);

SelectComponent.displayName = "Select";

interface SelectComponent extends ForwardRefExoticComponent<
  SelectProps & RefAttributes<HTMLSelectElement>
> {
  Option: typeof SelectOption;
  OptionGroup: typeof SelectOptionGroup;
}

export const Select = SelectComponent as SelectComponent;
Select.Option = SelectOption;
Select.OptionGroup = SelectOptionGroup;
