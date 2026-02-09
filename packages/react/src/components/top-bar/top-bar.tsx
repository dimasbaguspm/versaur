"use client";

import { forwardRef, ElementType } from "react";
import { topBarStyles } from "@versaur/core";
import "@versaur/core/top-bar.css";
import { ButtonIcon } from "../button-icon";
import { useDataAttrs } from "../../hooks/use-data-attrs";
import type {
  TopBarProps,
  TopBarLeadingProps,
  TopBarTrailingProps,
  TopBarNavProps,
  TopBarNavItemProps,
  TopBarActionsProps,
  TopBarMobileToggleProps,
  TopBarComponent,
} from "./top-bar.types";

/**
 * TopBar - Semantic navigation header component
 * Renders as <header> with flexbox layout
 *
 * @example
 * ```tsx
 * <TopBar variant="primary">
 *   <TopBar.Leading>
 *     <Logo />
 *     <TopBar.Nav>
 *       <TopBar.NavItem active>Home</TopBar.NavItem>
 *       <TopBar.NavItem>Docs</TopBar.NavItem>
 *     </TopBar.Nav>
 *   </TopBar.Leading>
 *   <TopBar.Trailing>
 *     <TopBar.Actions>
 *       <ButtonIcon as={BellIcon} aria-label="Notifications" />
 *     </TopBar.Actions>
 *   </TopBar.Trailing>
 * </TopBar>
 * ```
 */
const TopBar = forwardRef<HTMLElement, TopBarProps>(
  ({ variant = "primary", children, ...props }, ref) => {
    const dataAttrs = useDataAttrs({ variant });
    return (
      <header
        ref={ref}
        className={topBarStyles["top-bar"]}
        {...dataAttrs}
        {...props}
      >
        {children}
      </header>
    );
  },
);
TopBar.displayName = "TopBar";

/**
 * TopBar.Leading - Left section that grows to fill available space
 * Typically contains logo/brand and navigation
 */
const TopBarLeading = forwardRef<HTMLDivElement, TopBarLeadingProps>(
  ({ children, ...props }, ref) => {
    return (
      <div ref={ref} className={topBarStyles["top-bar-leading"]} {...props}>
        {children}
      </div>
    );
  },
);
TopBarLeading.displayName = "TopBar.Leading";

/**
 * TopBar.Trailing - Right section pushed to the right
 * Typically contains actions, avatar, and mobile menu toggle
 */
const TopBarTrailing = forwardRef<HTMLDivElement, TopBarTrailingProps>(
  ({ children, ...props }, ref) => {
    return (
      <div ref={ref} className={topBarStyles["top-bar-trailing"]} {...props}>
        {children}
      </div>
    );
  },
);
TopBarTrailing.displayName = "TopBar.Trailing";

/**
 * TopBar.Nav - Semantic <nav> container for navigation items
 */
const TopBarNav = forwardRef<HTMLElement, TopBarNavProps>(
  ({ children, ...props }, ref) => {
    return (
      <nav ref={ref} className={topBarStyles["top-bar-nav"]} {...props}>
        {children}
      </nav>
    );
  },
);
TopBarNav.displayName = "TopBar.Nav";

/**
 * TopBar.NavItem - Polymorphic navigation item
 * Supports rendering as <button>, <a>, <Link>, or any custom component
 * Automatically sets aria-current="page" when active
 *
 * @example
 * ```tsx
 * // As button (default)
 * <TopBar.NavItem active>Home</TopBar.NavItem>
 *
 * // As anchor link
 * <TopBar.NavItem as="a" href="/">Home</TopBar.NavItem>
 *
 * // As Next.js Link
 * <TopBar.NavItem as={Link} href="/">Home</TopBar.NavItem>
 * ```
 */
const TopBarNavItem = forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  TopBarNavItemProps
>(
  (
    {
      as: Component = "button" as ElementType,
      active = false,
      children,
      ...props
    },
    ref,
  ) => {
    const dataAttrs = useDataAttrs({ active });

    return (
      <Component
        ref={ref}
        className={topBarStyles["top-bar-nav-item"]}
        aria-current={active ? "page" : undefined}
        {...dataAttrs}
        {...props}
      >
        {children}
      </Component>
    );
  },
);
TopBarNavItem.displayName = "TopBar.NavItem";

/**
 * TopBar.Actions - Container for action items
 * Typically contains icon buttons, avatar, etc
 */
const TopBarActions = forwardRef<HTMLDivElement, TopBarActionsProps>(
  ({ children, ...props }, ref) => {
    return (
      <div ref={ref} className={topBarStyles["top-bar-actions"]} {...props}>
        {children}
      </div>
    );
  },
);
TopBarActions.displayName = "TopBar.Actions";

/**
 * TopBar.MobileToggle - Mobile menu toggle button
 * Uses ButtonIcon internally for icon rendering
 *
 * @example
 * ```tsx
 * const [isOpen, setIsOpen] = useState(false);
 * <TopBar.MobileToggle
 *   icon={MenuIcon}
 *   isOpen={isOpen}
 *   onClick={() => setIsOpen(!isOpen)}
 * />
 * ```
 */
const TopBarMobileToggle = forwardRef<
  HTMLButtonElement,
  TopBarMobileToggleProps
>(
  (
    { icon, isOpen = false, "aria-label": ariaLabel = "Toggle menu", ...props },
    ref,
  ) => {
    return (
      <ButtonIcon
        ref={ref}
        as={icon}
        aria-label={ariaLabel}
        aria-expanded={isOpen}
        className={topBarStyles["top-bar-mobile-toggle"]}
        {...props}
      />
    );
  },
);
TopBarMobileToggle.displayName = "TopBar.MobileToggle";

/**
 * Compound component assembly
 * Attaches sub-components to TopBar for namespace-based API
 */
const TopBarCompound = Object.assign(TopBar, {
  Leading: TopBarLeading,
  Trailing: TopBarTrailing,
  Nav: TopBarNav,
  NavItem: TopBarNavItem,
  Actions: TopBarActions,
  MobileToggle: TopBarMobileToggle,
}) as React.ForwardRefExoticComponent<
  TopBarProps & React.RefAttributes<HTMLElement>
> &
  TopBarComponent;

export {
  TopBarCompound as TopBar,
  TopBarLeading,
  TopBarTrailing,
  TopBarNav,
  TopBarNavItem,
  TopBarActions,
  TopBarMobileToggle,
};
