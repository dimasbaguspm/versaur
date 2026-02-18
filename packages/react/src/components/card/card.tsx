import { forwardRef } from "react";
import { cardStyles } from "@versaur/core";
import { useDataAttrs } from "../../hooks/use-data-attrs";
import type {
  CardBodyProps,
  CardButtonProps,
  CardFooterProps,
  CardHeaderProps,
  CardRootProps,
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
 *   <Card.Header gap="md" justify="start">
 *     <Avatar name="AC" shape="circle" size="lg" />
 *     <Heading as="h3" size="md">Alice Chen</Heading>
 *   </Card.Header>
 * </Card>
 * ```
 */
function CardRootInternal(
  { as = "div", size = "md", border, children, ...rest }: CardRootProps & CardButtonProps,
  ref: any,
) {
  const dataAttrs = useDataAttrs({
    border,
    interactive: as === "button" ? "true" : "false",
    size,
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
 * Card Header - Flexible layout container for top section
 * Supports alignment and spacing controls
 */
export const CardHeader = forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ justify, gap, children, ...rest }, ref) => {
    const dataAttrs = useDataAttrs({ gap, justify });
    return (
      <div ref={ref} className={cardStyles.header} {...dataAttrs} {...rest}>
        {children}
      </div>
    );
  },
);
CardHeader.displayName = "Card.Header";

/**
 * Card Body - Flexible column layout container for main content
 * Supports alignment and spacing controls
 */
export const CardBody = forwardRef<HTMLDivElement, CardBodyProps>(
  ({ align, gap, children, ...rest }, ref) => {
    const dataAttrs = useDataAttrs({ align, gap });
    return (
      <div ref={ref} className={cardStyles.body} {...dataAttrs} {...rest}>
        {children}
      </div>
    );
  },
);
CardBody.displayName = "Card.Body";

/**
 * Card Footer - Flexible layout container for bottom section
 * Supports alignment and spacing controls
 */
export const CardFooter = forwardRef<HTMLDivElement, CardFooterProps>(
  ({ justify, gap, children, ...rest }, ref) => {
    const dataAttrs = useDataAttrs({ gap, justify });
    return (
      <div ref={ref} className={cardStyles.footer} {...dataAttrs} {...rest}>
        {children}
      </div>
    );
  },
);
CardFooter.displayName = "Card.Footer";

/**
 * Card Component - Compound component with layout regions
 */
interface CardComponent extends React.ForwardRefExoticComponent<
  CardRootProps & React.RefAttributes<HTMLDivElement | HTMLButtonElement>
> {
  Header: typeof CardHeader;
  Body: typeof CardBody;
  Footer: typeof CardFooter;
}

export const Card = Object.assign(CardRoot, {
  Body: CardBody,
  Footer: CardFooter,
  Header: CardHeader,
}) as CardComponent;
