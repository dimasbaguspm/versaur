import { forwardRef } from "react";
import { buttonIconStyles } from "@versaur/core";
import "@versaur/core/button-icon.css";
import { LoaderIcon } from "@versaur/icons";
import { Icon } from "../icon";
import { useDataAttrs } from "../../hooks/use-data-attrs";
import type { ButtonIconProps } from "./button-icon.types";

/**
 * ButtonIcon component - an icon-only button with full Button styling
 *
 * Requires aria-label for accessibility since there's no text content.
 *
 * @example
 * ```tsx
 * import { ButtonIcon } from '@versaur/react';
 * import { StarIcon } from '@versaur/icons';
 *
 * <ButtonIcon as={StarIcon} aria-label="Add to favorites" variant="primary" />
 * ```
 */
export const ButtonIcon = forwardRef<HTMLButtonElement, ButtonIconProps>(
  (
    {
      as: IconComponent,
      variant = "primary",
      size = "medium",
      loading = false,
      disabled = false,
      pressed = false,
      type = "button",
      onClick,
      iconProps = {},
      "aria-label": ariaLabel,
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

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (disabled || loading) {
        e.preventDefault();
        return;
      }
      onClick?.(e);
    };

    return (
      <button
        ref={ref}
        type={type}
        className={buttonIconStyles["button-icon"]}
        aria-label={ariaLabel}
        aria-pressed={pressed ? "true" : undefined}
        aria-busy={loading ? "true" : undefined}
        aria-disabled={disabled || loading ? "true" : undefined}
        {...dataAttrs}
        {...rest}
        onClick={handleClick}
      >
        {loading ? (
          <Icon
            as={LoaderIcon}
            aria-label="Loading"
            data-loading-icon="loader"
          />
        ) : (
          <Icon
            as={IconComponent}
            {...(iconProps as Record<string, unknown>)}
          />
        )}
      </button>
    );
  },
);

ButtonIcon.displayName = "ButtonIcon";
