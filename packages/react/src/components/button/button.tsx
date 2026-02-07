import { forwardRef } from "react";
import { buttonStyles } from "@versaur/core";
import "@versaur/core/button.css";
import { useDataAttrs } from "../../hooks/use-data-attrs";
import type { ButtonProps } from "./button.types";

/**
 * Button component with data-attribute state machine pattern
 *
 * @example
 * ```tsx
 * <Button variant="primary" size="medium">
 *   Click me
 * </Button>
 * ```
 */
export const _Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "medium",
      loading = false,
      disabled = false,
      pressed = false,
      children,
      type = "button",
      ...rest
    },
    ref,
  ) => {
    // Convert component state to data attributes
    const dataAttrs = useDataAttrs({
      variant,
      size,
      loading,
      disabled: disabled || loading, // Loading also disables the button
    });

    return (
      <button
        ref={ref}
        type={type}
        className={buttonStyles.button}
        aria-pressed={pressed ? "true" : undefined}
        aria-busy={loading ? "true" : undefined}
        aria-disabled={disabled || loading ? "true" : undefined}
        {...dataAttrs}
        {...rest}
      >
        {children}
      </button>
    );
  },
);

_Button.displayName = "Button";
