import { buttonGroupStyles } from "@versaur/core"
import { forwardRef } from "react"

import { useDataAttrs } from "../../hooks/use-data-attrs"
import type { ButtonGroupProps } from "./button-group.types"

/**
 * ButtonGroup component for grouping multiple buttons with customizable spacing and layout
 *
 * @example
 * ```tsx
 * <ButtonGroup gap="md" direction="horizontal" align="center">
 *   <Button variant="primary">Save</Button>
 *   <Button variant="secondary">Cancel</Button>
 * </ButtonGroup>
 * ```
 */
export const ButtonGroup = forwardRef<HTMLDivElement, ButtonGroupProps>(
  (
    {
      gap = "md",
      direction = "horizontal",
      align = "center",
      wrap = "nowrap",
      "aria-label": ariaLabel = "Button group",
      children,
      ...rest
    },
    ref,
  ) => {
    const dataAttrs = useDataAttrs({
      align,
      direction,
      gap,
      wrap,
    })

    return (
      <div
        ref={ref}
        className={buttonGroupStyles["button-group"]}
        role="group"
        aria-label={ariaLabel}
        {...dataAttrs}
        {...rest}
      >
        {children}
      </div>
    )
  },
)

ButtonGroup.displayName = "ButtonGroup"
