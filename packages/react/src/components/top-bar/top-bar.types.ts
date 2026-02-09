import type {
  ComponentType,
  ElementType,
  ReactNode,
  HTMLAttributes,
  SVGProps,
  ForwardRefExoticComponent,
  RefAttributes,
} from "react";
import type { TopBarVariant } from "@versaur/core";

/**
 * Polymorphic type utilities for flexible element composition
 */
type AsProp<C extends ElementType = ElementType> = { as?: C };

/**
 * PolymorphicProps - Combines custom props with the target element's props
 * Allows proper type inference for props based on the "as" element
 */
type PolymorphicProps<C extends ElementType = ElementType, Props = {}> = Props &
  AsProp<C> &
  Omit<React.ComponentPropsWithoutRef<C>, keyof Props | "as">;

/**
 * TopBar root component props
 */
export interface TopBarProps extends HTMLAttributes<HTMLElement> {
  /**
   * Color variant for the top bar
   */
  variant?: TopBarVariant;
  children?: ReactNode;
}

/**
 * TopBar.Leading - Left section with flex-1 growth for logo and nav
 */
export interface TopBarLeadingProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
}

/**
 * TopBar.Trailing - Right section for actions and menu toggle
 */
export interface TopBarTrailingProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
}

/**
 * TopBar.Nav - Semantic navigation container
 */
export interface TopBarNavProps extends HTMLAttributes<HTMLElement> {
  children?: ReactNode;
}

/**
 * TopBar.NavItem - Polymorphic navigation item (button, a, Link, etc)
 * Base props that work with any element type
 */
export interface TopBarNavItemBaseProps {
  /**
   * Whether this nav item represents the current page
   * Sets aria-current="page" when true
   */
  active?: boolean;
  children?: ReactNode;
}

/**
 * TopBar.NavItem - Full polymorphic type
 * Defaults to "button" element, but supports any ElementType (a, Link, etc)
 * You can pass as="a" for anchor, as={Link} for Next.js/React Router links, etc.
 */
export type TopBarNavItemProps<C extends ElementType = "button"> =
  PolymorphicProps<C, TopBarNavItemBaseProps>;

/**
 * TopBar.Actions - Container for icon buttons, avatars, etc
 */
export interface TopBarActionsProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
}

/**
 * TopBar.MobileToggle - Mobile menu toggle button
 * Wraps ButtonIcon internally for icon support
 */
export interface TopBarMobileToggleProps extends HTMLAttributes<HTMLButtonElement> {
  /**
   * Icon component to render (e.g., MenuIcon, HamburgerIcon)
   * Should be an SVG icon component
   */
  icon: ComponentType<SVGProps<SVGSVGElement>>;

  /**
   * Whether mobile menu is open
   * Used for aria-expanded attribute
   */
  isOpen?: boolean;

  /**
   * aria-label for accessibility (required for icon buttons)
   */
  "aria-label"?: string;
}

/**
 * Component types for compound interface
 */
type TopBarLeadingComponent = ForwardRefExoticComponent<
  TopBarLeadingProps & RefAttributes<HTMLDivElement>
>;
type TopBarTrailingComponent = ForwardRefExoticComponent<
  TopBarTrailingProps & RefAttributes<HTMLDivElement>
>;
type TopBarNavComponent = ForwardRefExoticComponent<
  TopBarNavProps & RefAttributes<HTMLElement>
>;
type TopBarNavItemComponent = ForwardRefExoticComponent<
  TopBarNavItemProps & RefAttributes<HTMLButtonElement | HTMLAnchorElement>
>;
type TopBarActionsComponent = ForwardRefExoticComponent<
  TopBarActionsProps & RefAttributes<HTMLDivElement>
>;
type TopBarMobileToggleComponent = ForwardRefExoticComponent<
  TopBarMobileToggleProps & RefAttributes<HTMLButtonElement>
>;

/**
 * Compound component interface for type safety
 */
export interface TopBarComponent {
  Leading: TopBarLeadingComponent;
  Trailing: TopBarTrailingComponent;
  Nav: TopBarNavComponent;
  NavItem: TopBarNavItemComponent;
  Actions: TopBarActionsComponent;
  MobileToggle: TopBarMobileToggleComponent;
}

// Forward ref types for each sub-component
export type TopBarRef = HTMLElement;
export type TopBarLeadingRef = HTMLDivElement;
export type TopBarTrailingRef = HTMLDivElement;
export type TopBarNavRef = HTMLElement;
export type TopBarActionsRef = HTMLDivElement;
export type TopBarMobileToggleRef = HTMLButtonElement;
