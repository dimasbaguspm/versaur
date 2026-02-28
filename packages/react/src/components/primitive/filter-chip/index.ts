import type { FilterChip as CoreFilterChip } from "@versaur/core/primitive"
import { FilterChip } from "./filter-chip"
import type { FilterChipProps } from "./filter-chip.types"

declare namespace FilterChip {
  export type DataAttrs = CoreFilterChip.DataAttrs
  export type Props = FilterChipProps
}

export { FilterChip }
export type { FilterChipProps }
