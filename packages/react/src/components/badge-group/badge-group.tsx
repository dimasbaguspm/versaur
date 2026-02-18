import { forwardRef } from "react";
import { badgeGroupStyles } from "@versaur/core";
import { useDataAttrs } from "../../hooks/use-data-attrs";
import type { BadgeGroupProps } from "./badge-group.types";

/**
 * BadgeGroup component for grouping multiple badges with customizable spacing and layout
 *
 * @example
 * ```tsx
 * <BadgeGroup gap="md" direction="horizontal" align="center">
 *   <Badge variant="primary">New</Badge>
 *   <Badge variant="success">Active</Badge>
 *   <Badge variant="danger">Critical</Badge>
 * </BadgeGroup>
 * ```
 */
export const BadgeGroup = forwardRef<HTMLDivElement, BadgeGroupProps>(
  (
    {
      gap = "md",
      direction = "horizontal",
      align = "center",
      wrap = "nowrap",
      "aria-label": ariaLabel = "Badge group",
      children,
      ...rest
    },
    ref,
  ) => {
    const dataAttrs = useDataAttrs({
      gap,
      direction,
      align,
      wrap,
    });

    return (
      <div
        ref={ref}
        className={badgeGroupStyles["badge-group"]}
        role="group"
        aria-label={ariaLabel}
        {...dataAttrs}
        {...rest}
      >
        {children}
      </div>
    );
  },
);

BadgeGroup.displayName = "BadgeGroup";
