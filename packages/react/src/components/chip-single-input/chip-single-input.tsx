import { createContext, useContext, forwardRef, useId } from "react";
import { chipSingleInputStyles } from "@versaur/core";
import "@versaur/core/chip-single-input.css";
import { useDataAttrs } from "../../hooks/use-data-attrs";
import { Label } from "../label";
import { HelperText } from "../helper-text";
import { ErrorText } from "../error-text";
import type {
  ChipSingleInputRootProps,
  ChipSingleInputOptionProps,
} from "./chip-single-input.types";

import type { ChipSingleInput as ChipSingleInputCore } from "@versaur/core";

/**
 * Private context for managing chip single input state
 */
interface ChipSingleInputContextType {
  value: string | undefined;
  onChange: (value: string) => void;
  name?: string;
  disabled?: boolean;
  variant?: ChipSingleInputCore.Variant;
  size?: ChipSingleInputCore.Size;
}

const ChipSingleInputContext = createContext<
  ChipSingleInputContextType | undefined
>(undefined);

function useChipSingleInputContext() {
  const context = useContext(ChipSingleInputContext);
  if (!context) {
    throw new Error(
      "ChipSingleInput.Option must be used within ChipSingleInput"
    );
  }
  return context;
}

/**
 * ChipSingleInput Root Component
 *
 * Single-selection chip input (radio alternative with custom UI)
 *
 * @example
 * ```tsx
 * const [size, setSize] = useState<string>();
 *
 * <ChipSingleInput
 *   name="size"
 *   value={size}
 *   onChange={setSize}
 *   label="Select size"
 *   helper="Choose your preferred size"
 * >
 *   <ChipSingleInput.Option value="small">Small</ChipSingleInput.Option>
 *   <ChipSingleInput.Option value="medium">Medium</ChipSingleInput.Option>
 *   <ChipSingleInput.Option value="large">Large</ChipSingleInput.Option>
 * </ChipSingleInput>
 * ```
 */
const ChipSingleInputRoot = forwardRef<
  HTMLDivElement,
  ChipSingleInputRootProps
>(
  (
    {
      value,
      onChange,
      name,
      variant = "outline",
      size = "medium",
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
    ref
  ) => {
    const generatedId = useId();
    const groupId = rest.id || generatedId;
    const helperId = helper ? `${groupId}-helper` : undefined;
    const errorId = error ? `${groupId}-error` : undefined;
    const describedBy = [helperId, errorId].filter(Boolean).join(" ");

    const handleChange = (newValue: string) => {
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
        className={chipSingleInputStyles.field}
        {...dataAttrs}
        {...rest}
      >
        {label && (
          <Label required={required} disabled={disabled}>
            {label}
          </Label>
        )}

        <ChipSingleInputContext.Provider
          value={{
            value,
            onChange: handleChange,
            name,
            disabled,
            variant,
            size: size as ChipSingleInputCore.Size,
          }}
        >
          <div
            className={chipSingleInputStyles.options}
            data-gap={gap}
            data-wrap={wrap}
            role="radiogroup"
            aria-describedby={describedBy || undefined}
            aria-invalid={error ? "true" : undefined}
          >
            {children}
          </div>
        </ChipSingleInputContext.Provider>

        {error && <ErrorText id={errorId}>{error}</ErrorText>}
        {!error && helper && <HelperText id={helperId}>{helper}</HelperText>}
      </div>
    );
  }
);

ChipSingleInputRoot.displayName = "ChipSingleInput";

/**
 * ChipSingleInput.Option Component
 *
 * Individual chip option within a ChipSingleInput
 *
 * @example
 * ```tsx
 * <ChipSingleInput.Option value="small">Small</ChipSingleInput.Option>
 * ```
 */
const ChipSingleInputOption = forwardRef<
  HTMLButtonElement,
  ChipSingleInputOptionProps
>(({ value, children, disabled: optionDisabled, ...rest }, ref) => {
  const context = useChipSingleInputContext();
  const isSelected = context.value === value;
  const isDisabled = context.disabled || optionDisabled;

  const handleClick = () => {
    if (!isDisabled && context.onChange) {
      context.onChange(value);
    }
  };

  const dataAttrs = useDataAttrs({
    variant: context.variant,
    size: context.size,
    selected: isSelected,
    disabled: isDisabled,
  });

  return (
    <button
      ref={ref}
      type="button"
      className={chipSingleInputStyles.option}
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

ChipSingleInputOption.displayName = "ChipSingleInput.Option";

/**
 * ChipSingleInput compound component with Option subcomponent
 */
export const ChipSingleInput = Object.assign(ChipSingleInputRoot, {
  Option: ChipSingleInputOption,
});
