import { chipInputStyles } from "@versaur/core/forms"
import { createContext, forwardRef, useContext, useId } from "react"

import { useDataAttrs } from "../../../hooks/use-data-attrs"
import { cx } from "../../../utils/cx"
import { ErrorText } from "../error-text"
import { HelperText } from "../helper-text"
import { Label } from "../label"
import type { ChipInputOptionProps, ChipInputRootProps } from "./chip-input.types"

/**
 * Private context for managing chip input state (unified for both modes)
 */
interface ChipInputContextType {
  value: string | string[]
  onChange: (value: string | string[]) => void
  multiple: boolean
  name?: string
  disabled?: boolean
}

const ChipInputContext = createContext<ChipInputContextType | undefined>(undefined)

function useChipInputContext(): ChipInputContextType {
  const context = useContext(ChipInputContext)
  if (!context) {
    throw new Error("ChipInput.Option must be used within ChipInput")
  }
  return context
}

/**
 * ChipInput Root Component
 *
 * Unified chip input supporting both single and multiple selection modes
 * via discriminated union types on the `multiple` prop
 *
 * @example Single selection (default)
 * ```tsx
 * const [size, setSize] = useState<string>();
 *
 * <ChipInput
 *   name="size"
 *   value={size}
 *   onChange={setSize}
 *   label="Select size"
 * >
 *   <ChipInput.Option value="small">Small</ChipInput.Option>
 *   <ChipInput.Option value="medium">Medium</ChipInput.Option>
 * </ChipInput>
 * ```
 *
 * @example Multiple selection
 * ```tsx
 * const [interests, setInterests] = useState<string[]>([]);
 *
 * <ChipInput
 *   multiple
 *   name="interests"
 *   value={interests}
 *   onChange={setInterests}
 *   label="Select interests"
 * >
 *   <ChipInput.Option value="design">Design</ChipInput.Option>
 *   <ChipInput.Option value="dev">Development</ChipInput.Option>
 * </ChipInput>
 * ```
 */
const ChipInputRoot = forwardRef<HTMLDivElement, ChipInputRootProps>(
  (
    {
      value,
      onChange,
      multiple = false,
      name,
      label,
      helper,
      error,
      required = false,
      disabled = false,
      gap = "2",
      wrap = true,
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

    const handleChange = (newValue: string | string[]) => {
      if (!disabled) {
        // Type cast: we know onChange matches the newValue type based on discriminated union
        ;(onChange as (v: string | string[]) => void)(newValue)
      }
    }

    const dataAttrs = useDataAttrs({
      invalid: Boolean(error),
    })

    const role = multiple ? "group" : "radiogroup"

    return (
      <div ref={ref} className={cx(chipInputStyles.field, className)} {...dataAttrs} {...rest}>
        {label && (
          <Label required={required} disabled={disabled}>
            {label}
          </Label>
        )}

        <ChipInputContext.Provider
          value={{
            disabled,
            multiple,
            name,
            onChange: handleChange,
            value,
          } as ChipInputContextType}
        >
          <div
            className={chipInputStyles.options}
            data-gap={gap}
            data-wrap={wrap}
            role={role}
            aria-describedby={describedBy || undefined}
            aria-invalid={error ? "true" : undefined}
          >
            {children}
          </div>
        </ChipInputContext.Provider>

        {error && <ErrorText id={errorId}>{error}</ErrorText>}
        {!error && helper && <HelperText id={helperId}>{helper}</HelperText>}
      </div>
    )
  },
)

ChipInputRoot.displayName = "ChipInput"

/**
 * ChipInput.Option Component
 *
 * Individual chip option within a ChipInput
 * Behavior changes based on parent's `multiple` prop:
 * - Single mode: clicking replaces the selection
 * - Multiple mode: clicking toggles inclusion in the array
 *
 * @example Single text
 * ```tsx
 * <ChipInput.Option value="small">Small</ChipInput.Option>
 * ```
 *
 * @example With icons
 * ```tsx
 * <ChipInput.Option value="react" iconLeft={<ReactIcon />}>
 *   React
 * </ChipInput.Option>
 * ```
 */
const ChipInputOption = forwardRef<HTMLButtonElement, ChipInputOptionProps>(
  ({ value, children, disabled: optionDisabled, iconLeft, iconRight, ...rest }, ref) => {
    const context = useChipInputContext()
    const isDisabled = context.disabled || optionDisabled
    const hasIcon = Boolean(iconLeft || iconRight)

    // Determine if this option is selected based on single or multiple mode
    let isSelected = false
    if (context.multiple) {
      isSelected = Array.isArray(context.value) && context.value.includes(value)
    } else {
      isSelected = context.value === value
    }

    const handleClick = () => {
      if (isDisabled) return

      if (context.multiple) {
        // Multiple selection: toggle inclusion
        const arrayValue = Array.isArray(context.value) ? context.value : []
        const newValue = isSelected ? arrayValue.filter((v) => v !== value) : [...arrayValue, value]
        context.onChange(newValue)
      } else {
        // Single selection: replace value
        context.onChange(value)
      }
    }

    const dataAttrs = useDataAttrs({
      disabled: isDisabled,
      selected: isSelected,
      ...(hasIcon && { "has-icon": true }),
    })

    return (
      <button
        ref={ref}
        type="button"
        className={chipInputStyles.option}
        onClick={handleClick}
        disabled={isDisabled}
        aria-pressed={isSelected}
        {...dataAttrs}
        {...rest}
      >
        {iconLeft}
        {children}
        {iconRight}
      </button>
    )
  },
)

ChipInputOption.displayName = "ChipInput.Option"

/**
 * ChipInput compound component with Option subcomponent
 */
export const ChipInput = Object.assign(ChipInputRoot, {
  Option: ChipInputOption,
})
