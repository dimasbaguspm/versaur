import { useEffect, useState } from 'react'

/**
 * Type definitions for the experimental VirtualKeyboard API
 * @see https://developer.mozilla.org/en-US/docs/Web/API/VirtualKeyboard
 */
interface VirtualKeyboard extends EventTarget {
  readonly boundingRect: DOMRect
  overlaysContent: boolean
  show(): void
  hide(): void
  addEventListener(
    type: 'geometrychange',
    listener: EventListenerOrEventListenerObject,
    options?: boolean | AddEventListenerOptions
  ): void
  removeEventListener(
    type: 'geometrychange',
    listener: EventListenerOrEventListenerObject,
    options?: boolean | EventListenerOptions
  ): void
}

// Extend Navigator interface to include virtualKeyboard
declare global {
  interface Navigator {
    readonly virtualKeyboard?: VirtualKeyboard
  }
}

/**
 * Detects if the current device is mobile or tablet
 */
function isMobileOrTablet(): boolean {
  if (typeof window === 'undefined') return false

  const userAgent = window.navigator.userAgent
  const isMobile =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      userAgent
    )
  const isTablet = /iPad|Android(?=.*Mobile)|Tablet/i.test(userAgent)

  // Also check for touch capability and screen size as fallback
  const hasTouchScreen =
    'ontouchstart' in window || navigator.maxTouchPoints > 0
  const isSmallScreen = window.innerWidth <= 1024

  return isMobile || isTablet || (hasTouchScreen && isSmallScreen)
}

/**
 * Checks if the modern VirtualKeyboard API is available
 */
function hasVirtualKeyboardAPI(): boolean {
  return (
    typeof window !== 'undefined' &&
    'navigator' in window &&
    'virtualKeyboard' in navigator
  )
}

/**
 * useKeyboardVirtual - Hook for detecting virtual keyboard state on mobile/tablet devices
 *
 * This hook uses the modern VirtualKeyboard API when available for precise detection,
 * falling back to viewport monitoring for broader browser support.
 * Only works on mobile and tablet devices.
 *
 * @returns {Object} An object containing:
 *   - isOpen: boolean - Whether the virtual keyboard is currently open
 *   - height: number - The height of the virtual keyboard in pixels
 *   - width: number - The width of the virtual keyboard in pixels
 *   - isSupported: boolean - Whether the current device supports virtual keyboard detection
 *   - usingNativeAPI: boolean - Whether using the native VirtualKeyboard API
 */
export function useKeyboardVirtual() {
  const [isOpen, setIsOpen] = useState(false)
  const [height, setHeight] = useState(0)
  const [width, setWidth] = useState(0)
  const [isSupported, setIsSupported] = useState(false)
  const [usingNativeAPI, setUsingNativeAPI] = useState(false)

  // Effect 1: Device support detection
  useEffect(() => {
    if (!isMobileOrTablet()) {
      setIsSupported(false)
      return
    }

    setIsSupported(true)
    setUsingNativeAPI(hasVirtualKeyboardAPI())
  }, [])

  // Effect 2: VirtualKeyboard API (Chrome 94+)
  useEffect(() => {
    if (!isSupported || !hasVirtualKeyboardAPI()) {
      return
    }

    const virtualKeyboard = navigator.virtualKeyboard!

    const handleGeometryChange = () => {
      const { boundingRect } = virtualKeyboard
      const keyboardHeight = boundingRect?.height || 0
      const keyboardWidth = boundingRect?.width || 0

      setIsOpen(keyboardHeight > 0)
      setHeight(keyboardHeight)
      setWidth(keyboardWidth)
    }

    // Set initial state
    handleGeometryChange()

    // Listen for keyboard geometry changes
    virtualKeyboard.addEventListener('geometrychange', handleGeometryChange)

    return () => {
      virtualKeyboard.removeEventListener(
        'geometrychange',
        handleGeometryChange
      )
    }
  }, [isSupported])

  // Effect 3: Visual Viewport / Window Resize Fallback
  useEffect(() => {
    if (!isSupported || hasVirtualKeyboardAPI()) {
      return
    }

    const initialViewportHeight = window.innerHeight
    let resizeTimeout: NodeJS.Timeout

    const handleViewportChange = () => {
      clearTimeout(resizeTimeout)

      resizeTimeout = setTimeout(() => {
        const currentViewportHeight =
          window.visualViewport?.height ?? window.innerHeight
        const heightDifference = initialViewportHeight - currentViewportHeight

        // Consider keyboard open if viewport shrunk by more than 150px
        const keyboardThreshold = 150
        const keyboardIsOpen = heightDifference > keyboardThreshold

        setIsOpen(keyboardIsOpen)
        setHeight(keyboardIsOpen ? heightDifference : 0)
        setWidth(keyboardIsOpen ? window.innerWidth : 0)
      }, 100)
    }

    // Use Visual Viewport API if available (better accuracy)
    if ('visualViewport' in window && window.visualViewport) {
      window.visualViewport.addEventListener('resize', handleViewportChange)

      return () => {
        clearTimeout(resizeTimeout)
        window.visualViewport?.removeEventListener(
          'resize',
          handleViewportChange
        )
      }
    }

    // Final fallback to window resize event
    window.addEventListener('resize', handleViewportChange)

    return () => {
      clearTimeout(resizeTimeout)
      window.removeEventListener('resize', handleViewportChange)
    }
  }, [isSupported])

  // Reset state when device support changes
  useEffect(() => {
    if (!isSupported) {
      setIsOpen(false)
      setHeight(0)
      setWidth(0)
    }
  }, [isSupported])

  return {
    isOpen,
    height,
    width,
    isSupported,
    usingNativeAPI,
  }
}
