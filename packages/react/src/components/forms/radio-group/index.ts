import { RadioGroup } from "./radio-group"
import type { RadioGroupOptionProps, RadioGroupRootProps } from "./radio-group.types"
export type { RadioGroupRootProps, RadioGroupOptionProps }

// Namespace declaration merging
declare namespace RadioGroup {
  export type Props = RadioGroupRootProps
  export type OptionProps = RadioGroupOptionProps
}

export { RadioGroup }
