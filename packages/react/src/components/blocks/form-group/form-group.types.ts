import type { FormHTMLAttributes, HTMLAttributes, ReactNode } from "react"

export interface FormGroupProps extends FormHTMLAttributes<HTMLFormElement> {
  /** CSS grid-template-columns value, e.g. "repeat(3, 1fr)". Default: "1fr" */
  columns?: string
  children?: ReactNode
}

export interface FormGroupFieldProps extends HTMLAttributes<HTMLDivElement> {
  /** CSS grid-column value, e.g. "span 2", "1 / 4" */
  area?: string
  children?: ReactNode
}

export interface FormGroupSeparatorProps extends HTMLAttributes<HTMLHRElement> {}
