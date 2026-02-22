import type { HTMLAttributes, ReactNode } from "react"

export interface AccordionRootProps extends Omit<HTMLAttributes<HTMLDetailsElement>, "onToggle"> {
  summary: ReactNode
  open?: boolean
  onOpenChange?: (open: boolean) => void
  children?: ReactNode
  className?: string
}

export interface AccordionSummaryProps extends HTMLAttributes<HTMLElement> {
  children?: ReactNode
  right?: ReactNode
  clamp?: number
  className?: string
}
