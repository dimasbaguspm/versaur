import { checkboxGroupStyles } from "@versaur/core/forms"
import { createContext, forwardRef, useContext, useId } from "react"

import { useDataAttrs } from "../../../hooks/use-data-attrs"
import { cx } from "../../../utils/cx"
import { Checkbox } from "../checkbox"
import { ErrorText } from "../error-text"
import { HelperText } from "../helper-text"
import { Label } from "../label"
import type { CheckboxGroupOptionProps, CheckboxGroupRootProps } from "./checkbox-group.types"

/**
 * Private context for managing checkbox group state
 */
interface CheckboxGroupContextType {
  value: string[]
  onChange: (value: string[]) => void
  name?: string
  disabled?: boolean
}

const CheckboxGroupContext = createContext<CheckboxGroupContextType | undefined>(undefined)

function useCheckboxGroupContext() {
  const context = useContext(CheckboxGroupContext)
  if (!context) {
    throw new Error("CheckboxGroup.Option must be used within CheckboxGroup")
  }
  return context
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
      className,
      ...rest
    },
    ref,
  ) => {
    const generatedId = useId()
    const groupId = rest.id || generatedId
    const helperId = helper ? `${groupId}-helper` : undefined
    const errorId = error ? `${groupId}-error` : undefined
    const describedBy = [helperId, errorId].filter(Boolean).join(" ")

    const handleChange = (newValue: string[]) => {
      if (!disabled && onChange) {
        onChange(newValue)
      }
    }

    const dataAttrs = useDataAttrs({
      disabled,
    })

    return (
      <div ref={ref} className={cx(checkboxGroupStyles.field, className)} {...dataAttrs} {...rest}>
        {label && (
          <Label required={required} disabled={disabled}>
            {label}
          </Label>
        )}

        <CheckboxGroupContext.Provider value={{ disabled, name, onChange: handleChange, value }}>
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
    )
  },
)

CheckboxGroupRoot.displayName = "CheckboxGroup"

/**
 * CheckboxGroup.Option Component
 *
 * Individual checkbox option within a CheckboxGroup using the Checkbox component
 *
 * @example
 * ```tsx
 * <CheckboxGroup.Option value="analytics">Advanced Analytics</CheckboxGroup.Option>
 * ```
 */
const CheckboxGroupOption = forwardRef<HTMLInputElement, CheckboxGroupOptionProps>(
  ({ value, children, disabled: optionDisabled, ...rest }, ref) => {
    const context = useCheckboxGroupContext()
    const isChecked = context.value.includes(value)
    const isDisabled = context.disabled || optionDisabled

    const handleChange = () => {
      if (!isDisabled) {
        const newValue = isChecked ? context.value.filter((v) => v !== value) : [...context.value, value]
        context.onChange(newValue)
      }
    }

    return (
      <Checkbox
        ref={ref}
        name={context.name}
        value={value}
        checked={isChecked}
        disabled={isDisabled}
        onChange={handleChange}
        {...rest}
      >
        {children}
      </Checkbox>
    )
  },
)

CheckboxGroupOption.displayName = "CheckboxGroup.Option"

/**
 * CheckboxGroup compound component with Option subcomponent
 */
export const CheckboxGroup = Object.assign(CheckboxGroupRoot, {
  Option: CheckboxGroupOption,
})
