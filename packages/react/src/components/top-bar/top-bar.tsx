"use client";

import { forwardRef } from "react";
import { topBarStyles } from "@versaur/core";
import "@versaur/core/top-bar.css";
import type {
  TopBarProps,
  TopBarLeadingProps,
  TopBarCentredProps,
  TopBarTrailingProps,
  TopBarComponent,
} from "./top-bar.types";

/**
 * TopBar - Pure layout component with CSS Grid
 * Renders as <header> with three optional grid areas: leading, centred, trailing
 * No built-in styling; compose with other components for functionality
 *
 * @example
 * ```tsx
 * <TopBar>
 *   <TopBar.Leading>
 *     <Logo />
 *   </TopBar.Leading>
 *   <TopBar.Centred>
 *     <SearchBar />
 *   </TopBar.Centred>
 *   <TopBar.Trailing>
 *     <Avatar />
 *   </TopBar.Trailing>
 * </TopBar>
 * ```
 */
const TopBar = forwardRef<HTMLElement, TopBarProps>(
  ({ children, ...props }, ref) => {
    return (
      <header ref={ref} className={topBarStyles["top-bar"]} {...props}>
        {children}
      </header>
    );
  },
);
TopBar.displayName = "TopBar";

/**
 * TopBar.Leading - Left grid area
 * Typically contains logo, brand, and navigation
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
 * TopBar.Centred - Center grid area
 * Typically contains search, title, or other center content
 */
const TopBarCentred = forwardRef<HTMLDivElement, TopBarCentredProps>(
  ({ children, ...props }, ref) => {
    return (
      <div ref={ref} className={topBarStyles["top-bar-centred"]} {...props}>
        {children}
      </div>
    );
  },
);
TopBarCentred.displayName = "TopBar.Centred";

/**
 * TopBar.Trailing - Right grid area
 * Typically contains actions, user menu, and notifications
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
 * Compound component assembly
 * Attaches sub-components to TopBar for namespace-based API
 */
const TopBarCompound = Object.assign(TopBar, {
  Leading: TopBarLeading,
  Centred: TopBarCentred,
  Trailing: TopBarTrailing,
}) as React.ForwardRefExoticComponent<
  TopBarProps & React.RefAttributes<HTMLElement>
> &
  TopBarComponent;

export {
  TopBarCompound as TopBar,
  TopBarLeading,
  TopBarCentred,
  TopBarTrailing,
};
