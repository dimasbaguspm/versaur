import type { Button as CoreButton } from "@versaur/core/primitive"
import { buttonStyles } from "@versaur/core/primitive"
import { LoaderIcon } from "@versaur/icons"
import { forwardRef } from "react"

import { useDataAttrs } from "../../../hooks/use-data-attrs"
import { cx } from "../../../utils/cx"
import { Icon } from "../icon"
import type { ButtonProps } from "./button.types"

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
 * ```
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary" as CoreButton.Variant,
      size = "medium" as CoreButton.Size,
      loading = false,
      disabled = false,
      pressed = false,
      leftIcon,
      rightIcon,
      children,
      type = "button",
      onClick,
      className,
      ...rest
    },
    ref,
  ) => {
    const hasLeftIcon = Boolean(leftIcon)
    const hasRightIcon = Boolean(rightIcon)
    const hasText = Boolean(children)

    let iconConfig: CoreButton.IconConfig | undefined
    if (hasLeftIcon && hasRightIcon && hasText) {
      iconConfig = "both-text"
    } else if (hasLeftIcon && hasText) {
      iconConfig = "left-text"
    } else if (hasRightIcon && hasText) {
      iconConfig = "right-text"
    } else if (hasLeftIcon && hasRightIcon) {
      iconConfig = "both"
    } else if (hasLeftIcon) {
      iconConfig = "left"
    } else if (hasRightIcon) {
      iconConfig = "right"
    }

    const dataAttrs = useDataAttrs({
      disabled: disabled || loading,
      loading,
      size,
      variant,
      ...(iconConfig && { iconConfig }),
    })

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (disabled || loading) {
        e.preventDefault()
        return
      }
      onClick?.(e)
    }

    return (
      <button
        ref={ref}
        type={type}
        className={cx(buttonStyles.button, className)}
        aria-pressed={pressed ? "true" : undefined}
        aria-busy={loading ? "true" : undefined}
        aria-disabled={disabled || loading ? "true" : undefined}
        {...dataAttrs}
        {...rest}
        onClick={handleClick}
      >
        {loading ? <Icon as={LoaderIcon} aria-label="Loading" data-loading-icon="loader" /> : null}
        {leftIcon}
        {children}
        {rightIcon}
      </button>
    )
  },
)

Button.displayName = "Button"
