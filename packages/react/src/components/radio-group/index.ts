import type { RadioGroup as RadioGroupCore } from "@versaur/core";
import type {
  RadioGroupRootProps,
  RadioGroupOptionProps,
} from "./radio-group.types";

import { RadioGroup } from "./radio-group";
export type { RadioGroupRootProps, RadioGroupOptionProps };
export * from "./preview";

// Namespace declaration merging
declare namespace RadioGroup {
  export type Props = RadioGroupRootProps;
  export type OptionProps = RadioGroupOptionProps;
  export type Variant = RadioGroupCore.Variant;
  export type Size = RadioGroupCore.Size;
  export type DataAttrs = RadioGroupCore.DataAttrs;
}

export { RadioGroup };
