import type { ReactNode, HTMLAttributes } from 'react'

/**
 * Props for AppBarLeading
 */
export interface AppBarLeadingProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

/**
 * Props for AppBarHeadline
 */
export interface AppBarHeadlineProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

/**
 * Props for AppBarSubtitle
 */
export interface AppBarSubtitleProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

/**
 * Props for AppBarTrailing
 */
export interface AppBarTrailingProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

/**
 * Props for AppBarCenter (vertical stack of headline/subtitle)
 */
export interface AppBarCenterProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  placement?: 'start' | 'center' | 'end'
}

/**
 * AppBarProps for the main AppBar container
 */
export interface AppBarProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'tertiary' | 'ghost' | 'neutral'
}

/**
 * Props for AppBarBottom (bottom area for additional content)
 */
export interface AppBarBottomProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}
