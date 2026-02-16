import type { HTMLAttributes, ReactNode, ElementType } from "react";

export interface OverlayHeaderProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
}

export interface OverlayTitleProps extends HTMLAttributes<HTMLHeadingElement> {
  children?: ReactNode;
  /**
   * The HTML element to render as
   * @default 'h2'
   */
  as?: ElementType;
}

export interface OverlayCloseButtonProps extends HTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
}

export interface OverlayBodyProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
}

export interface OverlayFooterProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
}
