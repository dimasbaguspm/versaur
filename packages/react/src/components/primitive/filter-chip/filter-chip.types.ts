import type { ButtonHTMLAttributes, ReactNode } from "react"

export interface FilterChipProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "disabled"> {
  /** Whether the chip is disabled — prevents click and applies visual muted state */
  disabled?: boolean
  /** Max width for label truncation (CSS length value, e.g. "12rem", "200px") */
  maxWidth?: string
  /** Chip label content */
  children: ReactNode
}
