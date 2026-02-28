import { filterChipStyles } from "@versaur/core/primitive"
import { XIcon } from "@versaur/icons"
import { forwardRef } from "react"

import { useDataAttrs } from "../../../hooks/use-data-attrs"
import { cx } from "../../../utils/cx"
import { Icon } from "../icon"
import type { FilterChipProps } from "./filter-chip.types"

export const FilterChip = forwardRef<HTMLButtonElement, FilterChipProps>(
  ({ disabled = false, onClick, maxWidth, className, children, style, ...rest }, ref) => {
    const dataAttrs = useDataAttrs({ disabled })

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (disabled) {
        e.preventDefault()
        return
      }
      onClick?.(e)
    }

    return (
      <button
        ref={ref}
        type="button"
        className={cx(filterChipStyles.chip, className)}
        style={maxWidth ? ({ "--_max-width": maxWidth, ...style } as React.CSSProperties) : style}
        aria-disabled={disabled ? "true" : undefined}
        onClick={handleClick}
        {...dataAttrs}
        {...rest}
      >
        <span className={filterChipStyles.label}>{children}</span>
        <Icon as={XIcon} />
      </button>
    )
  },
)

FilterChip.displayName = "FilterChip"
