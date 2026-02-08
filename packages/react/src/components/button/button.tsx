import { forwardRef } from "react";
import { buttonStyles } from "@versaur/core";
import "@versaur/core/button.css";
import { LoaderIcon } from "@versaur/icons";
import { Icon } from "../icon";
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
 *
 * <Button variant="ghost" size="small" loading>
 *   Loading...
 * </Button>
 *
 * <Button variant="outline">
 *   Outline Button
 * </Button>
 * ```
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
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
    const dataAttrs = useDataAttrs({
      variant,
      size,
      loading,
      disabled: disabled || loading,
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
        {loading ? (
          <Icon as={LoaderIcon} aria-label="Loading" data-icon="loader" />
        ) : null}
        {children}
      </button>
    );
  },
);

Button.displayName = "Button";
