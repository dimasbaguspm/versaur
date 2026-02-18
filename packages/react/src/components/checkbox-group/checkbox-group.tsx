import { createContext, useContext, forwardRef, useId } from "react";
import { checkboxGroupStyles } from "@versaur/core";
import { useDataAttrs } from "../../hooks/use-data-attrs";
import { Label } from "../label";
import { HelperText } from "../helper-text";
import { ErrorText } from "../error-text";
import type {
  CheckboxGroupRootProps,
  CheckboxGroupOptionProps,
} from "./checkbox-group.types";

/**
 * Private context for managing checkbox group state
 */
interface CheckboxGroupContextType {
  value: string[];
  onChange: (value: string[]) => void;
  name?: string;
  disabled?: boolean;
}

const CheckboxGroupContext = createContext<
  CheckboxGroupContextType | undefined
>(undefined);

function useCheckboxGroupContext() {
  const context = useContext(CheckboxGroupContext);
  if (!context) {
    throw new Error("CheckboxGroup.Option must be used within CheckboxGroup");
  }
  return context;
}

/**
 * CheckboxGroup Root Component
 *
 * Grouped checkboxes for multi-selection
 *
 * @example
 * ```tsx
 * const [features, setFeatures] = useState<string[]>([]);
 *
 * <CheckboxGroup
 *   value={features}
 *   onChange={setFeatures}
 *   label="Select features"
 *   helper="Choose all that apply"
 * >
 *   <CheckboxGroup.Option value="analytics">Advanced Analytics</CheckboxGroup.Option>
 *   <CheckboxGroup.Option value="api">API Access</CheckboxGroup.Option>
 * </CheckboxGroup>
 * ```
 */
const CheckboxGroupRoot = forwardRef<HTMLDivElement, CheckboxGroupRootProps>(
  (
    {
      value,
      onChange,
      name,
      label,
      helper,
      error,
      required = false,
      disabled = false,
      direction = "column",
      children,
      ...rest
    },
    ref,
  ) => {
    const generatedId = useId();
    const groupId = rest.id || generatedId;
    const helperId = helper ? `${groupId}-helper` : undefined;
    const errorId = error ? `${groupId}-error` : undefined;
    const describedBy = [helperId, errorId].filter(Boolean).join(" ");

    const handleChange = (newValue: string[]) => {
      if (!disabled && onChange) {
        onChange(newValue);
      }
    };

    const dataAttrs = useDataAttrs({
      invalid: !!error,
      disabled,
    });

    return (
      <div
        ref={ref}
        className={checkboxGroupStyles.field}
        {...dataAttrs}
        {...rest}
      >
        {label && (
          <Label required={required} disabled={disabled}>
            {label}
          </Label>
        )}

        <CheckboxGroupContext.Provider
          value={{ value, onChange: handleChange, name, disabled }}
        >
          <div
            className={checkboxGroupStyles.options}
            data-direction={direction}
            role="group"
            aria-describedby={describedBy || undefined}
            aria-invalid={error ? "true" : undefined}
          >
            {children}
          </div>
        </CheckboxGroupContext.Provider>

        {error && <ErrorText id={errorId}>{error}</ErrorText>}
        {!error && helper && <HelperText id={helperId}>{helper}</HelperText>}
      </div>
    );
  },
);

CheckboxGroupRoot.displayName = "CheckboxGroup";

/**
 * CheckboxGroup.Option Component
 *
 * Individual checkbox option within a CheckboxGroup
 * Each option can have its own required indicator
 *
 * @example
 * ```tsx
 * <CheckboxGroup.Option value="analytics" required>Advanced Analytics</CheckboxGroup.Option>
 * ```
 */
const CheckboxGroupOption = forwardRef<
  HTMLInputElement,
  CheckboxGroupOptionProps
>(
  (
    {
      value,
      children,
      disabled: optionDisabled,
      required: optionRequired = false,
      ...rest
    },
    ref,
  ) => {
    const generatedId = useId();
    const context = useCheckboxGroupContext();
    const isChecked = context.value.includes(value);
    const isDisabled = context.disabled || optionDisabled;

    const handleChange = () => {
      if (!isDisabled) {
        const newValue = isChecked
          ? context.value.filter((v) => v !== value)
          : [...context.value, value];
        context.onChange(newValue);
      }
    };

    const dataAttrs = useDataAttrs({
      disabled: isDisabled,
      required: optionRequired,
    });

    return (
      <label className={checkboxGroupStyles.option} {...dataAttrs}>
        <input
          ref={ref}
          type="checkbox"
          name={context.name}
          value={value}
          checked={isChecked}
          disabled={isDisabled}
          required={optionRequired}
          onChange={handleChange}
          className={checkboxGroupStyles.input}
          aria-required={optionRequired || undefined}
          {...rest}
          id={generatedId}
        />
        <span className={checkboxGroupStyles.indicator} />
        {children && (
          <Label
            required={optionRequired}
            disabled={isDisabled}
            htmlFor={generatedId}
          >
            {children}
          </Label>
        )}
      </label>
    );
  },
);

CheckboxGroupOption.displayName = "CheckboxGroup.Option";

/**
 * CheckboxGroup compound component with Option subcomponent
 */
export const CheckboxGroup = Object.assign(CheckboxGroupRoot, {
  Option: CheckboxGroupOption,
});
