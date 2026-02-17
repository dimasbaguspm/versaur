import { Card } from "./card";
import type {
  CardRootProps,
  CardButtonProps,
  CardHeaderProps,
  CardBodyProps,
  CardFooterProps,
} from "./card.types";
import type { CardSize, CardShape, CardAlign, CardJustify, CardGap } from "@versaur/core";

// Declaration merging: namespace + const = Card.Variant, Card.Props, etc.
declare namespace Card {
  export type Size = CardSize;
  export type Shape = CardShape;
  export type Align = CardAlign;
  export type Justify = CardJustify;
  export type Gap = CardGap;
  export type RootProps = CardRootProps;
  export type ButtonProps = CardButtonProps;
  export type HeaderProps = CardHeaderProps;
  export type BodyProps = CardBodyProps;
  export type FooterProps = CardFooterProps;
}

export { Card };

// Flat type exports
export type {
  CardRootProps,
  CardButtonProps,
  CardHeaderProps,
  CardBodyProps,
  CardFooterProps,
};

export type { CardSize, CardShape, CardAlign, CardJustify, CardGap };

export {
  CardPreview,
  cardSections,
  cardProps,
  cardInstallation,
  type CardSection,
} from "./preview";
