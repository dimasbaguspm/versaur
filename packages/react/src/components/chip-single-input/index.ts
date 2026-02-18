import type { ChipSingleInput as ChipSingleInputCore } from "@versaur/core";
import type {
  ChipSingleInputOptionProps,
  ChipSingleInputRootProps,
} from "./chip-single-input.types";
import { ChipSingleInput } from "./chip-single-input";

export type { ChipSingleInputRootProps, ChipSingleInputOptionProps };
export * from "./preview";

// Namespace declaration merging
declare namespace ChipSingleInput {
  export type Props = ChipSingleInputRootProps;
  export type OptionProps = ChipSingleInputOptionProps;
  export type Variant = ChipSingleInputCore.Variant;
  export type Size = ChipSingleInputCore.Size;
  export type DataAttrs = ChipSingleInputCore.DataAttrs;
}

export { ChipSingleInput };
