import type {
  ComponentPropsWithoutRef,
  ElementType,
  ForwardRefExoticComponent,
  HTMLAttributes,
  ReactNode,
  RefAttributes,
} from "react"

/**
 * TopBar root component props
 * Pure layout component - no variant styling
 */
export interface TopBarProps extends HTMLAttributes<HTMLElement> {
  children?: ReactNode
}

/**
 * TopBar.Leading - Left grid area (logo, brand, navigation)
 */
export interface TopBarLeadingProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode
}

/**
 * TopBar.Centred - Center grid area (search, title, etc)
 */
export interface TopBarCentredProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode
}

/**
 * TopBar.Trailing - Right grid area (actions, user menu, etc)
 */
export interface TopBarTrailingProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode
}

/**
 * TopBar.Item - Polymorphic navigation item (button or link)
 */
export type TopBarItemProps<T extends ElementType = "button"> = {
  as?: T
  active?: boolean
  disabled?: boolean
  icon?: ReactNode
  className?: string
  children?: ReactNode
} & Omit<ComponentPropsWithoutRef<T>, "children">

/**
 * TopBar.ListItem - Horizontal flex container for navigation items
 */
export interface TopBarItemListProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode
}

/**
 * Component types for compound interface
 */
type TopBarLeadingComponent = ForwardRefExoticComponent<TopBarLeadingProps & RefAttributes<HTMLDivElement>>
type TopBarCentredComponent = ForwardRefExoticComponent<TopBarCentredProps & RefAttributes<HTMLDivElement>>
type TopBarTrailingComponent = ForwardRefExoticComponent<TopBarTrailingProps & RefAttributes<HTMLDivElement>>

/**
 * Compound component interface for type safety
 */
export interface TopBarComponent {
  Leading: TopBarLeadingComponent
  Centred: TopBarCentredComponent
  Trailing: TopBarTrailingComponent
  Item: <T extends ElementType = "button">(props: TopBarItemProps<T> & RefAttributes<HTMLElement>) => JSX.Element
  ListItem: ForwardRefExoticComponent<TopBarItemListProps & RefAttributes<HTMLDivElement>>
}

// Forward ref types for each sub-component
export type TopBarRef = HTMLElement
export type TopBarLeadingRef = HTMLDivElement
export type TopBarCentredRef = HTMLDivElement
export type TopBarTrailingRef = HTMLDivElement
