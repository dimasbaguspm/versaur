import { selectStyles } from "@versaur/core/forms"
import type { ForwardRefExoticComponent, RefAttributes } from "react"
import { forwardRef, useId } from "react"

import { cx } from "../../../utils/cx"
import { useDataAttrs } from "../../../hooks/use-data-attrs"
import { ErrorText } from "../error-text"
import { HelperText } from "../helper-text"
import { Label } from "../label"
import type { SelectOptionGroupProps, SelectOptionProps, SelectProps } from "./select.types"

/**
 * SelectOption component
 * An option within a Select dropdown
 */
export const SelectOption = forwardRef<HTMLOptionElement, SelectOptionProps>(({ children, ...rest }, ref) => (
  <option ref={ref} {...rest}>
    {children}
  </option>
))

SelectOption.displayName = "Select.Option"

/**
 * SelectOptionGroup component
 * A grouped set of options within a Select dropdown
 */
export const SelectOptionGroup = forwardRef<HTMLOptGroupElement, SelectOptionGroupProps>(
  ({ label, children, ...rest }, ref) => (
    <optgroup ref={ref} label={label} {...rest}>
      {children}
    </optgroup>
  ),
)

SelectOptionGroup.displayName = "Select.OptionGroup"

/**
 * Select component
 * Native select dropdown with label, validation states, and helper text
 */
const SelectComponent = forwardRef<HTMLSelectElement, SelectProps>(
  (
    { label, helper, error, required = false, disabled = false, placeholder, children, id: providedId, className, ...rest },
    ref,
  ) => {
    // Generate unique IDs for accessibility
    const generatedId = useId()
    const selectId = providedId || generatedId
    const helperId = helper ? `${selectId}-helper` : undefined
    const errorId = error ? `${selectId}-error` : undefined
    const describedBy = [helperId, errorId].filter(Boolean).join(" ")

    // Convert props to data attributes
    const dataAttrs = useDataAttrs({
      disabled,
      invalid: Boolean(error),
    })

    return (
      <div className={cx(selectStyles.field, className)}>
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
    )
  },
)

SelectComponent.displayName = "Select"

export interface SelectComponent extends ForwardRefExoticComponent<SelectProps & RefAttributes<HTMLSelectElement>> {
  Option: typeof SelectOption
  OptionGroup: typeof SelectOptionGroup
}

export const Select = SelectComponent as SelectComponent
Select.Option = SelectOption
Select.OptionGroup = SelectOptionGroup
