import { forwardRef } from "react";
import { hrStyles } from "@versaur/core";
import { useDataAttrs } from "../../hooks/use-data-attrs";
import type { HrProps } from "./hr.types";

/**
 * Hr component — a divider for visually separating content sections
 *
 * @example
 * ```tsx
 * <Hr />
 *
 * <Hr variant="dashed" size="md" spacing="lg" />
 *
 * <Hr orientation="vertical" />
 * ```
 */
export const Hr = forwardRef<HTMLHRElement, HrProps>(
  ({ orientation, variant, size, spacing, ...rest }, ref) => {
    const dataAttrs = useDataAttrs({
      orientation,
      size,
      spacing,
      variant,
    });

    return (
      <hr
        ref={ref}
        className={hrStyles.hr}
        role="separator"
        aria-orientation={orientation === "vertical" ? "vertical" : undefined}
        {...dataAttrs}
        {...rest}
      />
    );
  },
);

Hr.displayName = "Hr";
