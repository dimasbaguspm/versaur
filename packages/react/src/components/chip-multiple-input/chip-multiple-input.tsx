import { createContext, useContext, forwardRef, useId } from "react";
import { chipMultipleInputStyles } from "@versaur/core";
import { useDataAttrs } from "../../hooks/use-data-attrs";
import { Label } from "../label";
import { HelperText } from "../helper-text";
import { ErrorText } from "../error-text";
import type {
  ChipMultipleInputRootProps,
  ChipMultipleInputOptionProps,
} from "./chip-multiple-input.types";

/**
 * Private context for managing chip multiple input state
 */
interface ChipMultipleInputContextType {
  value: string[];
  onChange: (value: string[]) => void;
  name?: string;
  disabled?: boolean;
}

const ChipMultipleInputContext = createContext<
  ChipMultipleInputContextType | undefined
>(undefined);

function useChipMultipleInputContext() {
  const context = useContext(ChipMultipleInputContext);
  if (!context) {
    throw new Error(
      "ChipMultipleInput.Option must be used within ChipMultipleInput",
    );
  }
  return context;
}

/**
 * ChipMultipleInput Root Component
 *
 * Multi-selection chip input (checkbox alternative with custom UI)
 *
 * @example
 * ```tsx
 * const [interests, setInterests] = useState<string[]>([]);
 *
 * <ChipMultipleInput
 *   name="interests"
 *   value={interests}
 *   onChange={setInterests}
 *   label="Select interests"
 *   helper="Choose all that apply"
 * >
 *   <ChipMultipleInput.Option value="design">Design</ChipMultipleInput.Option>
 *   <ChipMultipleInput.Option value="dev">Development</ChipMultipleInput.Option>
 *   <ChipMultipleInput.Option value="marketing">Marketing</ChipMultipleInput.Option>
 * </ChipMultipleInput>
 * ```
 */
const ChipMultipleInputRoot = forwardRef<
  HTMLDivElement,
  ChipMultipleInputRootProps
>(
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
      gap = "2",
      wrap = true,
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
    });

    return (
      <div
        ref={ref}
        className={chipMultipleInputStyles.field}
        {...dataAttrs}
        {...rest}
      >
        {label && (
          <Label required={required} disabled={disabled}>
            {label}
          </Label>
        )}

        <ChipMultipleInputContext.Provider
          value={{
            value,
            onChange: handleChange,
            name,
            disabled,
          }}
        >
          <div
            className={chipMultipleInputStyles.options}
            data-gap={gap}
            data-wrap={wrap}
            role="group"
            aria-describedby={describedBy || undefined}
            aria-invalid={error ? "true" : undefined}
          >
            {children}
          </div>
        </ChipMultipleInputContext.Provider>

        {error && <ErrorText id={errorId}>{error}</ErrorText>}
        {!error && helper && <HelperText id={helperId}>{helper}</HelperText>}
      </div>
    );
  },
);

ChipMultipleInputRoot.displayName = "ChipMultipleInput";

/**
 * ChipMultipleInput.Option Component
 *
 * Individual chip option within a ChipMultipleInput
 *
 * @example
 * ```tsx
 * <ChipMultipleInput.Option value="design">Design</ChipMultipleInput.Option>
 * ```
 */
const ChipMultipleInputOption = forwardRef<
  HTMLButtonElement,
  ChipMultipleInputOptionProps
>(({ value, children, disabled: optionDisabled, ...rest }, ref) => {
  const context = useChipMultipleInputContext();
  const isSelected = context.value.includes(value);
  const isDisabled = context.disabled || optionDisabled;

  const handleClick = () => {
    if (!isDisabled && context.onChange) {
      const newValue = isSelected
        ? context.value.filter((v) => v !== value)
        : [...context.value, value];
      context.onChange(newValue);
    }
  };

  const dataAttrs = useDataAttrs({
    selected: isSelected,
    disabled: isDisabled,
  });

  return (
    <button
      ref={ref}
      type="button"
      className={chipMultipleInputStyles.option}
      onClick={handleClick}
      disabled={isDisabled}
      aria-pressed={isSelected}
      {...dataAttrs}
      {...rest}
    >
      {children}
    </button>
  );
});

ChipMultipleInputOption.displayName = "ChipMultipleInput.Option";

/**
 * ChipMultipleInput compound component with Option subcomponent
 */
export const ChipMultipleInput = Object.assign(ChipMultipleInputRoot, {
  Option: ChipMultipleInputOption,
});
