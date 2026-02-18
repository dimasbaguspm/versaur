import type { Heading as CoreHeading } from "@versaur/core"

import { Heading } from "./heading"
import type { HeadingProps } from "./heading.types"

// Declaration merging: namespace + const = Heading.Props, Heading.As, etc.
declare namespace Heading {
  export type As = CoreHeading.As
  export type Size = CoreHeading.Size
  export type Weight = CoreHeading.Weight
  export type Intent = CoreHeading.Intent
  export type Case = CoreHeading.Case
  export type Transform = CoreHeading.Transform
  export type DataAttrs = CoreHeading.DataAttrs
  export type Props = HeadingProps
}
export { Heading }

// Flat type exports
export type { HeadingProps }
export type { HeadingAs, HeadingSize, HeadingWeight, HeadingIntent, HeadingCase, HeadingTransform } from "@versaur/core"

export { HeadingPreview, headingSections, headingProps } from "./preview"
export type { HeadingSection } from "./preview"
