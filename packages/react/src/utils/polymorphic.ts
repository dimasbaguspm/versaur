import type { ReactNode } from "react"

/**
 * Helper to check if component is a string (HTML element) or function component
 */
export function isStringComponent(component: unknown): component is keyof JSX.IntrinsicElements {
  return typeof component === "string"
}

/**
 * Type-safe way to compare polymorphic components
 * Handles both string and function component references.
 */
export function isComponentType<T extends keyof JSX.IntrinsicElements>(component: unknown, elementName: T): boolean {
  return component === elementName
}

/**
 * Props for polymorphic components that render as different elements
 */
export interface PolymorphicComponentProps {
  as?: string | React.ComponentType<any>
  children?: ReactNode
  [key: string]: any
}
