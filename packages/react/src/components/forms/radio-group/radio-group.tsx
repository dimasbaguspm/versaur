import { radioGroupStyles } from "@versaur/core/forms"
import { createContext, forwardRef, useContext, useId } from "react"

import { Radio } from "../radio"
import { useDataAttrs } from "../../../hooks/use-data-attrs"
import { cx } from "../../../utils/cx"
import { ErrorText } from "../error-text"
import { HelperText } from "../helper-text"
import { Label } from "../label"
import type { RadioGroupOptionProps, RadioGroupRootProps } from "./radio-group.types"

/**
 * Private context for managing radio group state
 */
interface RadioGroupContextType {
  value: string | undefined
  onChange: (value: string) => void
  name?: string
  disabled?: boolean
}

const RadioGroupContext = createContext<RadioGroupContextType | undefined>(undefined)

function useRadioGroupContext() {
  const context = useContext(RadioGroupContext)
  if (!context) {
    throw new Error("RadioGroup.Option must be used within RadioGroup")
  }
  return context
}

/**
 * RadioGroup Root Component
 *
 * Grouped radio inputs with coordinated state management
 *
 * @example
 * ```tsx
 * const [plan, setPlan] = useState("basic");
 *
 * <RadioGroup
 *   name="plan"
 *   value={plan}
 *   onChange={setPlan}
 *   label="Choose a plan"
 *   helper="Select the plan that works for you"
 * >
 *   <RadioGroup.Option value="basic">Basic Plan</RadioGroup.Option>
 *   <RadioGroup.Option value="pro">Pro Plan</RadioGroup.Option>
 * </RadioGroup>
 * ```
 */
const RadioGroupRoot = forwardRef<HTMLDivElement, RadioGroupRootProps>(
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

    const handleChange = (newValue: string) => {
      if (!disabled && onChange) {
        onChange(newValue)
      }
    }

    const dataAttrs = useDataAttrs({
      disabled,
    })

    return (
      <div ref={ref} className={cx(radioGroupStyles.field, className)} {...dataAttrs} {...rest}>
        {label && (
          <Label required={required} disabled={disabled}>
            {label}
          </Label>
        )}

        <RadioGroupContext.Provider value={{ disabled, name, onChange: handleChange, value }}>
          <div
            className={radioGroupStyles.options}
            data-direction={direction}
            role="radiogroup"
            aria-describedby={describedBy || undefined}
            aria-invalid={error ? "true" : undefined}
          >
            {children}
          </div>
        </RadioGroupContext.Provider>

        {error && <ErrorText id={errorId}>{error}</ErrorText>}
        {!error && helper && <HelperText id={helperId}>{helper}</HelperText>}
      </div>
    )
  },
)

RadioGroupRoot.displayName = "RadioGroup"

/**
 * RadioGroup.Option Component
 *
 * Individual radio option within a RadioGroup using the Radio component
 *
 * @example
 * ```tsx
 * <RadioGroup.Option value="basic">Basic Plan - $10/month</RadioGroup.Option>
 * ```
 */
const RadioGroupOption = forwardRef<HTMLInputElement, RadioGroupOptionProps>(
  ({ value, children, disabled: optionDisabled, ...rest }, ref) => {
    const context = useRadioGroupContext()
    const isChecked = context.value === value
    const isDisabled = context.disabled || optionDisabled

    const handleChange = () => {
      if (!isDisabled) {
        context.onChange(value)
      }
    }

    return (
      <Radio
        ref={ref}
        name={context.name}
        value={value}
        checked={isChecked}
        disabled={isDisabled}
        onChange={handleChange}
        {...rest}
      >
        {children}
      </Radio>
    )
  },
)

RadioGroupOption.displayName = "RadioGroup.Option"

/**
 * RadioGroup compound component with Option subcomponent
 */
export const RadioGroup = Object.assign(RadioGroupRoot, {
  Option: RadioGroupOption,
})
