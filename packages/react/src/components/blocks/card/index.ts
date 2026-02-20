import type { CardAlign, CardBorder, CardGap, CardJustify, CardSize } from "@versaur/core/blocks"

import { Card } from "./card"
import type { CardBodyProps, CardButtonProps, CardFooterProps, CardHeaderProps, CardRootProps } from "./card.types"

// Declaration merging: namespace + const = Card.Variant, Card.Props, etc.
declare namespace Card {
  export type Size = CardSize
  export type Border = CardBorder
  export type Align = CardAlign
  export type Justify = CardJustify
  export type Gap = CardGap
  export type RootProps = CardRootProps
  export type ButtonProps = CardButtonProps
  export type HeaderProps = CardHeaderProps
  export type BodyProps = CardBodyProps
  export type FooterProps = CardFooterProps
}

export type { CardComponent } from "./card"
export { Card }

// Flat type exports
export type { CardBodyProps, CardBorder, CardButtonProps, CardFooterProps, CardHeaderProps, CardRootProps }

export type { CardAlign, CardGap, CardJustify, CardSize }
