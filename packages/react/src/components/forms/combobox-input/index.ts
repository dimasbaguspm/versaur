export { ComboboxInput } from "./combobox-input"
export type {
  ComboboxInputRootProps,
  ComboboxInputButtonProps,
  ComboboxInputListboxProps,
  ComboboxInputOptionProps,
  ComboboxInputSelectionChipsProps,
  ComboboxInputVariant,
} from "./combobox-input.types"

/**
 * Import ComboboxInput from this module:
 * ```tsx
 * import { ComboboxInput } from "@versaur/react/forms"
 *
 * // Use compound component pattern
 * <ComboboxInput value={...} onChange={...}>
 *   <ComboboxInput.Button />
 *   <ComboboxInput.Listbox>
 *     <ComboboxInput.Option value="...">Label</ComboboxInput.Option>
 *   </ComboboxInput.Listbox>
 *   <ComboboxInput.SelectionChips />
 * </ComboboxInput>
 * ```
 */
