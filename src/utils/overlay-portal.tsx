import React from 'react'
import ReactDOM from 'react-dom'

/**
 * OverlayPortal - Renders children into a portal at a configurable container
 * Defaults to document.body if no container is provided and document is available
 * Falls back to inline rendering if portal is not possible (SSR, non-browser)
 */
export interface OverlayPortalProps {
  /**
   * The container element to render the portal into
   * If not provided, defaults to document.body (browser only)
   */
  container?: HTMLElement | null
  children: React.ReactNode
}

export const OverlayPortal: React.FC<OverlayPortalProps> = ({
  container,
  children,
}) => {
  // SSR or non-browser fallback: render inline
  if (typeof window === 'undefined' || typeof document === 'undefined') {
    return <>{children}</>
  }

  const target = container ?? document.body
  // If no target, fallback inline
  if (!target) {
    return <>{children}</>
  }

  return ReactDOM.createPortal(children, target)
}
