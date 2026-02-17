import { Nav as NavRoot } from "./nav";
import { NavItem } from "./nav-item";
import type { NavProps, NavItemProps, NavContextValue } from "./nav.types";
import {
  navSections,
  navInstallation,
  navProps,
  navItemProps,
} from "./preview";

/**
 * Namespace merging: Nav.Item syntax
 */
const Nav = Object.assign(NavRoot, {
  Item: NavItem,
});

export { Nav, NavItem };
export type { NavProps, NavItemProps, NavContextValue };
export { navSections, navInstallation, navProps, navItemProps };
