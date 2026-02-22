import type { Text as CoreText } from "@versaur/core/primitive"

import { Text } from "./text"
import type { TextProps } from "./text.types"

// Declaration merging: namespace + const = Text.Props, Text.As, etc.
declare namespace Text {
  export type As = CoreText.As
  export type Size = CoreText.Size
  export type Weight = CoreText.Weight
  export type Intent = CoreText.Intent
  export type Case = CoreText.Case
  export type Transform = CoreText.Transform
  export type DataAttrs = CoreText.DataAttrs
  export type Props = TextProps
}
export { Text }

// Flat type exports
export type { TextProps }
export type { TextAs, TextSize, TextWeight, TextIntent, TextCase, TextTransform } from "@versaur/core/primitive"
