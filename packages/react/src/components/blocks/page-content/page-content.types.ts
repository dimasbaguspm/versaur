import type { ReactNode } from "react"

export interface PageContentProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Page content to render */
  children?: ReactNode
}
