import { forwardRef } from "react";
import { dotStyles } from "@versaur/core";
import { useDataAttrs } from "../../hooks/use-data-attrs";
import type { DotProps } from "./dot.types";

/**
 * Dot component for status indicators and visual markers
 *
 * @example
 * ```tsx
 * <Dot variant="success" />
 * <Dot variant="danger" size="small" />
 * <Dot variant="accent-1" aria-label="Active status" />
 * ```
 */
export const Dot = forwardRef<HTMLSpanElement, DotProps>(
  ({ variant = "primary", size = "medium", ...rest }, ref) => {
    const dataAttrs = useDataAttrs({
      size,
      variant,
    });

    return <span ref={ref} className={dotStyles.dot} {...dataAttrs} {...rest} />;
  },
);

Dot.displayName = "Dot";
