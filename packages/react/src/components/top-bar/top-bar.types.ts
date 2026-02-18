import type { ForwardRefExoticComponent, HTMLAttributes, ReactNode, RefAttributes } from "react";

/**
 * TopBar root component props
 * Pure layout component - no variant styling
 */
export interface TopBarProps extends HTMLAttributes<HTMLElement> {
  children?: ReactNode;
}

/**
 * TopBar.Leading - Left grid area (logo, brand, navigation)
 */
export interface TopBarLeadingProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
}

/**
 * TopBar.Centred - Center grid area (search, title, etc)
 */
export interface TopBarCentredProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
}

/**
 * TopBar.Trailing - Right grid area (actions, user menu, etc)
 */
export interface TopBarTrailingProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
}

/**
 * Component types for compound interface
 */
type TopBarLeadingComponent = ForwardRefExoticComponent<
  TopBarLeadingProps & RefAttributes<HTMLDivElement>
>;
type TopBarCentredComponent = ForwardRefExoticComponent<
  TopBarCentredProps & RefAttributes<HTMLDivElement>
>;
type TopBarTrailingComponent = ForwardRefExoticComponent<
  TopBarTrailingProps & RefAttributes<HTMLDivElement>
>;

/**
 * Compound component interface for type safety
 */
export interface TopBarComponent {
  Leading: TopBarLeadingComponent;
  Centred: TopBarCentredComponent;
  Trailing: TopBarTrailingComponent;
}

// Forward ref types for each sub-component
export type TopBarRef = HTMLElement;
export type TopBarLeadingRef = HTMLDivElement;
export type TopBarCentredRef = HTMLDivElement;
export type TopBarTrailingRef = HTMLDivElement;
