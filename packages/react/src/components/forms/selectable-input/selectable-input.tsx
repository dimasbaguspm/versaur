import { selectableInputStyles } from "@versaur/core/forms"
import type { SelectableInput as SelectableInputCore } from "@versaur/core/forms"
import { createContext, forwardRef, useContext } from "react"

import { useDataAttrs } from "../../../hooks/use-data-attrs"
import { cx } from "../../../utils/cx"
import type { SelectableInputOptionProps, SelectableInputRootProps } from "./selectable-input.types"

/**
 * Private context for managing selectable input state (unified for both modes)
 */
interface SelectableInputContextType {
  value: string | string[]
  onChange: (value: string | string[]) => void
  multiple: boolean
  name?: string
  disabled?: boolean
  placement: SelectableInputCore.Placement
}

const SelectableInputContext = createContext<SelectableInputContextType | undefined>(undefined)

function useSelectableInputContext(): SelectableInputContextType {
  const context = useContext(SelectableInputContext)
  if (!context) {
    throw new Error("SelectableInput.Option must be used within SelectableInput")
  }
  return context
}

/**
 * SelectableInput Root Component
 *
 * Unified selectable input supporting both single and multiple selection modes
 * via discriminated union types on the `multiple` prop.
 * Combines ChipInput's controlled state model with Checkbox's visual indicator.
 *
 * @example Single selection (default)
 * ```tsx
 * const [size, setSize] = useState<string>();
 *
 * <SelectableInput
 *   name="size"
 *   value={size}
 *   onChange={setSize}
 * >
 *   <SelectableInput.Option value="small">Small</SelectableInput.Option>
 *   <SelectableInput.Option value="medium">Medium</SelectableInput.Option>
 * </SelectableInput>
 * ```
 *
 * @example Multiple selection
 * ```tsx
 * const [selected, setSelected] = useState<string[]>([]);
 *
 * <SelectableInput
 *   multiple
 *   name="items"
 *   value={selected}
 *   onChange={setSelected}
 * >
 *   <SelectableInput.Option value="item1">Item 1</SelectableInput.Option>
 *   <SelectableInput.Option value="item2">Item 2</SelectableInput.Option>
 * </SelectableInput>
 * ```
 *
 * @example With custom content (Card)
 * ```tsx
 * <SelectableInput value={selected} onChange={setSelected} multiple>
 *   <SelectableInput.Option value="tx1">
 *     <Card>
 *       <Card.Header>Transaction 1</Card.Header>
 *       <Card.Body>$100.00</Card.Body>
 *     </Card>
 *   </SelectableInput.Option>
 * </SelectableInput>
 * ```
 */
const SelectableInputRoot = forwardRef<HTMLDivElement, SelectableInputRootProps>(
  (
    {
      value,
      onChange,
      multiple = false,
      name,
      disabled = false,
      placement = "top",
      children,
      className,
      ...rest
    },
    ref,
  ) => {
    const handleChange = (newValue: string | string[]) => {
      if (!disabled) {
        // Type cast: we know onChange matches the newValue type based on discriminated union
        ;(onChange as (v: string | string[]) => void)(newValue)
      }
    }

    const dataAttrs = useDataAttrs({
      disabled: disabled,
    })

    const role = multiple ? "group" : "radiogroup"

    return (
      <div ref={ref} className={cx(selectableInputStyles.field, className)} {...dataAttrs} {...rest}>
        <SelectableInputContext.Provider
          value={
            {
              disabled,
              multiple,
              name,
              onChange: handleChange,
              value,
              placement,
            } as SelectableInputContextType
          }
        >
          <div role={role}>{children}</div>
        </SelectableInputContext.Provider>
      </div>
    )
  },
)

SelectableInputRoot.displayName = "SelectableInput"

/**
 * SelectableInput.Option Component
 *
 * Individual option within a SelectableInput
 * Behavior changes based on parent's `multiple` prop:
 * - Single mode: clicking selects this option and deselects previous
 * - Multiple mode: clicking toggles inclusion in the array
 *
 * @example Single text
 * ```tsx
 * <SelectableInput.Option value="small">Small</SelectableInput.Option>
 * ```
 *
 * @example With custom content
 * ```tsx
 * <SelectableInput.Option value="card1">
 *   <Card>Custom card content</Card>
 * </SelectableInput.Option>
 * ```
 */
const SelectableInputOption = forwardRef<HTMLLabelElement, SelectableInputOptionProps>(
  ({ value, children, disabled: optionDisabled, className, ...rest }, ref) => {
    const context = useSelectableInputContext()
    const isDisabled = context.disabled || optionDisabled

    // Determine if this option is selected based on single or multiple mode
    let isSelected = false
    if (context.multiple) {
      isSelected = Array.isArray(context.value) && context.value.includes(value)
    } else {
      isSelected = context.value === value
    }

    const handleChange = () => {
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
      placement: context.placement,
    })

    return (
      <label
        ref={ref}
        className={cx(selectableInputStyles.option, className)}
        {...dataAttrs}
        {...rest}
      >
        <input
          type="checkbox"
          className={selectableInputStyles.input}
          name={context.name}
          value={value}
          checked={isSelected}
          onChange={handleChange}
          disabled={isDisabled}
          aria-disabled={isDisabled}
        />
        <span className={selectableInputStyles.indicator} />
        <div className={selectableInputStyles.content}>{children}</div>
      </label>
    )
  },
)

SelectableInputOption.displayName = "SelectableInput.Option"

/**
 * SelectableInput compound component with Option subcomponent
 */
export const SelectableInput = Object.assign(SelectableInputRoot, {
  Option: SelectableInputOption,
})
