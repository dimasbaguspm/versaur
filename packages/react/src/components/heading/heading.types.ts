import type { HTMLAttributes, ReactNode } from 'react';
import type { Heading } from '@versaur/core';

export interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  /**
   * The heading level to render
   * @default 'h2'
   */
  as?: Heading.As;

  /**
   * Override the preset font-size
   */
  size?: Heading.Size;

  /**
   * Override the preset font-weight
   */
  weight?: Heading.Weight;

  /**
   * Text color intent
   */
  intent?: Heading.Intent;

  /**
   * Heading content
   */
  children: ReactNode;
}
