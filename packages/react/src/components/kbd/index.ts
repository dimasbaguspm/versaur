import { Kbd } from "./kbd";
import type { Kbd as CoreKbd } from "@versaur/core";
import type { KbdProps } from "./kbd.types";

declare namespace Kbd {
  export type Variant = CoreKbd.Variant;
  export type Size = CoreKbd.Size;
  export type DataAttrs = CoreKbd.DataAttrs;
  export type Props = KbdProps;
}
export { Kbd };

export { kbdSections, kbdProps } from "./kbd.preview";
