import type { CheckboxGroup as CheckboxGroupCore } from "@versaur/core";
import type {
  CheckboxGroupRootProps,
  CheckboxGroupOptionProps,
} from "./checkbox-group.types";
import { CheckboxGroup } from "./checkbox-group";

export type { CheckboxGroupRootProps, CheckboxGroupOptionProps };
export * from "./preview";

// Namespace declaration merging
declare namespace CheckboxGroup {
  export type Props = CheckboxGroupRootProps;
  export type OptionProps = CheckboxGroupOptionProps;
  export type Variant = CheckboxGroupCore.Variant;
  export type Size = CheckboxGroupCore.Size;
  export type DataAttrs = CheckboxGroupCore.DataAttrs;
}

export { CheckboxGroup };
