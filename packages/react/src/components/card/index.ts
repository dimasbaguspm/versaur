import { Card } from "./card";
import type {
  CardRootProps,
  CardButtonProps,
  CardHeaderProps,
  CardTitleProps,
  CardSubtitleProps,
  CardFooterProps,
  CardBadgeGroupProps,
  CardSupplementaryProps,
  CardListProps,
  CardListItemProps,
} from "./card.types";
import type { CardSize, CardShape } from "@versaur/core";

// Declaration merging: namespace + const = Card.Variant, Card.Props, etc.
declare namespace Card {
  export type Size = CardSize;
  export type Shape = CardShape;
  export type RootProps = CardRootProps;
  export type ButtonProps = CardButtonProps;
  export type HeaderProps = CardHeaderProps;
  export type TitleProps = CardTitleProps;
  export type SubtitleProps = CardSubtitleProps;
  export type FooterProps = CardFooterProps;
  export type BadgeGroupProps = CardBadgeGroupProps;
  export type SupplementaryProps = CardSupplementaryProps;
  export type ListProps = CardListProps;
  export type ListItemProps = CardListItemProps;
}

export { Card };

// Backward-compat flat type exports
export type {
  CardRootProps,
  CardButtonProps,
  CardHeaderProps,
  CardTitleProps,
  CardSubtitleProps,
  CardFooterProps,
  CardBadgeGroupProps,
  CardSupplementaryProps,
  CardListProps,
  CardListItemProps,
};

export type { CardSize, CardShape };

export {
  CardPreview,
  cardSections,
  cardProps,
  cardInstallation,
  type CardSection,
} from "./preview";
