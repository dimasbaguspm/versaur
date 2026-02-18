import type {
  ComponentType,
  ElementType,
  ForwardRefExoticComponent,
  HTMLAttributes,
  ReactNode,
  RefAttributes,
  SVGProps,
} from "react";

/* Polymorphic utilities */
interface AsProp<C extends ElementType = ElementType> {
  as?: C;
}
type PolymorphicProps<C extends ElementType = ElementType, Props = {}> = Props &
  AsProp<C> &
  Omit<React.ComponentPropsWithoutRef<C>, keyof Props | "as">;

/**
 * Nav Context for managing active state across items
 */
export interface NavContextValue {
  /** Currently active item value */
  value?: string | number;
  /** Callback when an item is selected */
  onChange?: (value: string | number) => void;
}

/**
 * Nav props
 */
export interface NavProps extends Omit<HTMLAttributes<HTMLElement>, "onChange"> {
  /**
   * Layout direction for the navigation container
   * @default "horizontal"
   */
  direction?: "horizontal" | "vertical";

  /**
   * Gap between nav items
   * Uses Versaur spacing scale: xs, sm, md, lg
   */
  gap?: "xs" | "sm" | "md" | "lg";

  /**
   * Controlled value - which nav item is currently active
   * @default undefined
   */
  value?: string | number;

  /**
   * Callback when a nav item is selected
   */
  onChange?: (value: string | number) => void;

  children?: ReactNode;
}

/**
 * NavItem base props
 */
export interface NavItemBaseProps {
  /**
   * Whether this nav item represents current page (uncontrolled)
   * Sets aria-current="page" for anchor/Link elements
   * Ignored if Nav has value/onChange (controlled mode)
   */
  active?: boolean;

  /**
   * Unique identifier for this item in controlled mode
   * When Nav has onChange, this value is passed to onChange when clicked
   */
  value?: string | number;

  /**
   * Icon to render on the left side of the text
   */
  leftIcon?: ComponentType<SVGProps<SVGSVGElement>>;

  /**
   * Icon to render on the right side of the text
   */
  rightIcon?: ComponentType<SVGProps<SVGSVGElement>>;

  /**
   * Loading state - disables interaction and shows visual loading indicator
   */
  loading?: boolean;

  /**
   * Disabled state - prevents all interactions
   */
  disabled?: boolean;

  children?: ReactNode;
}

/**
 * Polymorphic NavItem type
 * Defaults to "button" but supports "a", Next.js Link, React Router Link, or any custom component
 */
export type NavItemProps<C extends ElementType = ElementType> = PolymorphicProps<
  C,
  NavItemBaseProps
>;

/* Component types for namespace */
type NavItemComponent = ForwardRefExoticComponent<
  NavItemProps & RefAttributes<HTMLButtonElement | HTMLAnchorElement>
>;

export interface NavExportedComponent {
  Item: NavItemComponent;
}
