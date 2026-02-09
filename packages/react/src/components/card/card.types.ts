import type { ReactNode, HTMLAttributes, ButtonHTMLAttributes } from "react";
import type { CardSize, CardShape } from "@versaur/core";
import type { AvatarProps } from "../avatar/avatar.types";
import type { Avatar } from "@versaur/core";
import type { Badge } from "@versaur/core";

/* Card Root Props */
export interface CardRootProps extends Omit<
  HTMLAttributes<HTMLDivElement>,
  "as"
> {
  /** Rendering element: 'div' (default) or 'button' */
  as?: "div" | "button";
  /** Card size variant */
  size?: CardSize;
  /** Card shape variant */
  shape?: CardShape;
  /** Whether to show border */
  bordered?: boolean;
  /** Children to render inside card */
  children?: ReactNode;
}

export interface CardButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Card size variant */
  size?: CardSize;
  /** Card shape variant */
  shape?: CardShape;
  /** Whether to show border */
  bordered?: boolean;
  /** Children to render inside card */
  children?: ReactNode;
}

/* Card Sub-Component Props */
export interface CardHeaderProps extends HTMLAttributes<HTMLDivElement> {
  /** Avatar to display on the left side of the header */
  avatar?: ReactNode;
  /** Props to pass to the embedded Avatar component */
  avatarProps?: Partial<AvatarProps>;
  children?: ReactNode;
}

export interface CardTitleProps extends HTMLAttributes<HTMLHeadingElement> {
  children?: ReactNode;
}

export interface CardSubtitleProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
}

export interface CardFooterProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
}

export interface CardBadgeProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
}

export interface CardBadgeGroupProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
}

export interface CardSupplementaryProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
}

export interface CardListProps extends HTMLAttributes<HTMLUListElement> {
  children?: ReactNode;
}

export interface CardListItemProps extends HTMLAttributes<HTMLLIElement> {
  children?: ReactNode;
}

/* Card namespace type exports for convenience */
export namespace Card {
  export type Variant = Avatar.Variant;
  export type AvatarSize = Avatar.Size;
  export type AvatarShape = Avatar.Shape;
  export type BadgeVariant = Badge.Variant;
  export type BadgeSize = Badge.Size;
  export type BadgeShape = Badge.Shape;
}
