import type { ButtonHTMLAttributes, ReactNode } from 'react';
import type { Button } from '@versaur/core';

export interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'disabled'> {
  /**
   * Visual variant of the button
   * @default 'primary'
   */
  variant?: Button.Variant;

  /**
   * Size of the button
   * @default 'medium'
   */
  size?: Button.Size;

  /**
   * Whether the button is in a loading state
   * Shows a spinner and disables interaction
   * @default false
   */
  loading?: boolean;

  /**
   * Whether the button is disabled
   * @default false
   */
  disabled?: boolean;

  /**
   * Whether the button is in a pressed state (for toggle buttons)
   * @default false
   */
  pressed?: boolean;

  /**
   * Button content
   */
  children: ReactNode;
}
