import type { CardAlign, CardGap, CardJustify, CardSize } from "@versaur/core"

import { Card } from "./card"
import type {
  CardBodyProps,
  CardBorder,
  CardButtonProps,
  CardFooterProps,
  CardHeaderProps,
  CardRootProps,
} from "./card.types"

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

export { Card }
export type { CardComponent } from "./card"

// Flat type exports
export type { CardRootProps, CardButtonProps, CardBorder, CardHeaderProps, CardBodyProps, CardFooterProps }

export type { CardSize, CardAlign, CardJustify, CardGap }

export { CardPreview, cardSections, cardProps, cardInstallation, type CardSection } from "./preview"
