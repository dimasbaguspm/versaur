import type { ForwardRefExoticComponent, RefAttributes, ReactNode } from "react"

export interface AppLayoutRootProps {
  className?: string
  children?: ReactNode
}

export interface AppLayoutBodyProps {
  /** Constrains Main content to max-width and centers it */
  centered?: boolean
  className?: string
  children?: ReactNode
}

export interface AppLayoutRegionProps {
  className?: string
  children?: ReactNode
}

export interface AppLayoutType extends ForwardRefExoticComponent<AppLayoutRootProps & RefAttributes<HTMLDivElement>> {
  Body: ForwardRefExoticComponent<AppLayoutBodyProps & RefAttributes<HTMLDivElement>>
  Footer: ForwardRefExoticComponent<AppLayoutRegionProps & RefAttributes<HTMLElement>>
  Header: ForwardRefExoticComponent<AppLayoutRegionProps & RefAttributes<HTMLElement>>
  Main: ForwardRefExoticComponent<AppLayoutRegionProps & RefAttributes<HTMLElement>>
  SideLeft: ForwardRefExoticComponent<AppLayoutRegionProps & RefAttributes<HTMLElement>>
  SideRight: ForwardRefExoticComponent<AppLayoutRegionProps & RefAttributes<HTMLElement>>
}
