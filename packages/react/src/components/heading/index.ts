import { Heading } from "./heading";
import type { Heading as CoreHeading } from "@versaur/core";
import type { HeadingProps } from "./heading.types";

// Declaration merging: namespace + const = Heading.Props, Heading.As, etc.
declare namespace Heading {
  export type As = CoreHeading.As;
  export type Size = CoreHeading.Size;
  export type Weight = CoreHeading.Weight;
  export type Intent = CoreHeading.Intent;
  export type DataAttrs = CoreHeading.DataAttrs;
  export type Props = HeadingProps;
}
export { Heading };

// Flat type exports
export type { HeadingProps };
export type { HeadingAs, HeadingSize, HeadingWeight, HeadingIntent } from "@versaur/core";

export {
  HeadingPreview,
  headingSections,
  headingInstallation,
  headingProps,
} from "./preview";
export type { HeadingSection } from "./preview";
