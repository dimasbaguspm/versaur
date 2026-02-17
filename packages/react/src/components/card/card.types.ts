import type { ReactNode, HTMLAttributes, ButtonHTMLAttributes } from "react";
import type { CardSize, CardShape, CardAlign, CardJustify, CardGap } from "@versaur/core";

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

/* Card Region Props */
export interface CardHeaderProps extends HTMLAttributes<HTMLDivElement> {
  /** Flex justify-content alignment */
  justify?: CardJustify;
  /** Internal spacing between items */
  gap?: CardGap;
  children?: ReactNode;
}

export interface CardBodyProps extends HTMLAttributes<HTMLDivElement> {
  /** Horizontal alignment of items */
  align?: CardAlign;
  /** Internal spacing between items */
  gap?: CardGap;
  children?: ReactNode;
}

export interface CardFooterProps extends HTMLAttributes<HTMLDivElement> {
  /** Flex justify-content alignment */
  justify?: CardJustify;
  /** Internal spacing between items */
  gap?: CardGap;
  children?: ReactNode;
}
