import type { ComponentType, HTMLAttributes, ReactNode, SVGProps } from "react";

/**
 * NoResults component props
 * @property icon - Icon component to display (e.g., SearchIcon from @versaur/icons)
 * @property title - Main heading text for the empty state
 * @property subtitle - Optional secondary descriptive text
 * @property action - Optional action element (typically a Button)
 */
export interface NoResultsProps extends HTMLAttributes<HTMLElement> {
  /**
   * Icon component to render
   * @required
   */
  icon: ComponentType<SVGProps<SVGSVGElement>>;

  /**
   * Main heading text for the empty state
   * @required
   */
  title: string;

  /**
   * Secondary descriptive text
   * @optional
   */
  subtitle?: string | ReactNode;

  /**
   * Action element to render below content
   * Typically a Button component
   * @optional
   */
  action?: ReactNode;
}
