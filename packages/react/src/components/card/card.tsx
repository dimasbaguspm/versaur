import { forwardRef } from "react";
import { cardStyles } from "@versaur/core";
import "@versaur/core/card.css";
import { useDataAttrs } from "../../hooks/use-data-attrs";
import { Avatar } from "../avatar";
import { Badge } from "../badge";
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

/**
 * Card Root Component
 *
 * Main card container that can render as either a div (default) or button.
 * Only the button variant includes interactive styling (hover, cursor, focus ring).
 *
 * @example
 * ```tsx
 * <Card size="md" shape="rounded" bordered>
 *   <Card.Header>
 *     <Card.Title>Title</Card.Title>
 *   </Card.Header>
 * </Card>
 * ```
 */
function CardRootInternal(
  {
    as = "div",
    size = "md",
    shape = "rounded",
    bordered = false,
    children,
    ...rest
  }: CardRootProps & CardButtonProps,
  ref: any,
) {
  const dataAttrs = useDataAttrs({
    size,
    shape,
    bordered,
    interactive: as === "button",
  });

  const Element = as === "button" ? "button" : "div";

  return (
    <Element ref={ref} className={cardStyles.card} {...dataAttrs} {...rest}>
      {children}
    </Element>
  );
}

export const CardRoot = forwardRef<
  HTMLDivElement | HTMLButtonElement,
  CardRootProps & CardButtonProps
>(CardRootInternal);

CardRoot.displayName = "Card";

/**
 * Card Header - Top section for title and subtitle
 * Optionally displays an avatar on the left side with flex-start alignment
 */
export const CardHeader = forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ avatar, avatarProps, children, ...rest }, ref) => {
    const hasAvatar = avatar !== undefined;

    if (hasAvatar) {
      return (
        <div
          ref={ref}
          className={cardStyles["card-header"]}
          style={{
            display: "flex",
            gap: "var(--_gap)",
            alignItems: "flex-start",
          }}
          {...rest}
        >
          <Avatar {...avatarProps} />
          <div style={{ flex: 1 }}>{children}</div>
        </div>
      );
    }

    return (
      <div ref={ref} className={cardStyles["card-header"]} {...rest}>
        {children}
      </div>
    );
  },
);
CardHeader.displayName = "Card.Header";

/**
 * Card Title - Heading for the card
 */
export const CardTitle = forwardRef<HTMLHeadingElement, CardTitleProps>(
  ({ children, ...rest }, ref) => (
    <h6 ref={ref} className={cardStyles["card-title"]} {...rest}>
      {children}
    </h6>
  ),
);
CardTitle.displayName = "Card.Title";

/**
 * Card Subtitle - Secondary heading or description
 */
export const CardSubtitle = forwardRef<HTMLDivElement, CardSubtitleProps>(
  ({ children, ...rest }, ref) => (
    <div ref={ref} className={cardStyles["card-subtitle"]} {...rest}>
      {children}
    </div>
  ),
);
CardSubtitle.displayName = "Card.Subtitle";

/**
 * Card Footer - Bottom section for badges and supplementary info
 */
export const CardFooter = forwardRef<HTMLDivElement, CardFooterProps>(
  ({ children, ...rest }, ref) => (
    <div ref={ref} className={cardStyles["card-footer"]} {...rest}>
      {children}
    </div>
  ),
);
CardFooter.displayName = "Card.Footer";

/**
 * Card Badge Group - Container for multiple badges with spacing
 */
export const CardBadgeGroup = forwardRef<HTMLDivElement, CardBadgeGroupProps>(
  ({ children, ...rest }, ref) => (
    <div ref={ref} className={cardStyles["card-badge-group"]} {...rest}>
      {children}
    </div>
  ),
);
CardBadgeGroup.displayName = "Card.BadgeGroup";

/**
 * Card Supplementary - Additional info slot (price, status, etc)
 */
export const CardSupplementary = forwardRef<
  HTMLDivElement,
  CardSupplementaryProps
>(({ children, ...rest }, ref) => (
  <div ref={ref} className={cardStyles["card-supplementary"]} {...rest}>
    {children}
  </div>
));
CardSupplementary.displayName = "Card.Supplementary";

/**
 * Card List - List wrapper for list items
 */
export const CardList = forwardRef<HTMLUListElement, CardListProps>(
  ({ children, ...rest }, ref) => (
    <ul ref={ref} className={cardStyles["card-list"]} {...rest}>
      {children}
    </ul>
  ),
);
CardList.displayName = "Card.List";

/**
 * Card List Item - Individual list item with separator dot
 */
export const CardListItem = forwardRef<HTMLLIElement, CardListItemProps>(
  ({ children, ...rest }, ref) => (
    <li ref={ref} className={cardStyles["card-list-item"]} {...rest}>
      {children}
    </li>
  ),
);
CardListItem.displayName = "Card.ListItem";

/**
 * Card Avatar - Namespace wrapper for Avatar component
 */
const CardAvatarNamespace = forwardRef<HTMLSpanElement, Partial<any>>(
  (props, ref) => <Avatar ref={ref} {...props} />,
);
CardAvatarNamespace.displayName = "Card.Avatar";

/**
 * Card Badge - Namespace wrapper for Badge component
 */
const CardBadgeNamespace = forwardRef<HTMLDivElement, Partial<any>>(
  (props, ref) => <Badge ref={ref} {...props} />,
);
CardBadgeNamespace.displayName = "Card.Badge";

/**
 * Card Component - Compound component with all sub-components attached
 */
interface CardComponent extends React.ForwardRefExoticComponent<
  CardRootProps & React.RefAttributes<HTMLDivElement | HTMLButtonElement>
> {
  Avatar: typeof CardAvatarNamespace;
  Header: typeof CardHeader;
  Title: typeof CardTitle;
  Subtitle: typeof CardSubtitle;
  Footer: typeof CardFooter;
  Badge: typeof CardBadgeNamespace;
  BadgeGroup: typeof CardBadgeGroup;
  Supplementary: typeof CardSupplementary;
  List: typeof CardList;
  ListItem: typeof CardListItem;
}

export const Card = Object.assign(CardRoot, {
  Avatar: CardAvatarNamespace,
  Header: CardHeader,
  Title: CardTitle,
  Subtitle: CardSubtitle,
  Footer: CardFooter,
  Badge: CardBadgeNamespace,
  BadgeGroup: CardBadgeGroup,
  Supplementary: CardSupplementary,
  List: CardList,
  ListItem: CardListItem,
}) as CardComponent;
