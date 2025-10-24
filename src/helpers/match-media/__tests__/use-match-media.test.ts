import { renderHook, act } from '@testing-library/react'
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import { useMatchMedia } from '../use-match-media'
import { BREAKPOINT_MOBILE } from '../constants'
import { createMatchMediaMock, setupMatchMediaMock } from '../test-helpers'

describe('useMatchMedia', () => {
  const { beforeEach: setupBefore, afterEach: setupAfter } =
    setupMatchMediaMock()

  beforeEach(() => {
    setupBefore()
    vi.clearAllMocks()
  })

  afterEach(() => {
    setupAfter()
  })

  it('should return true when media query matches', () => {
    const mockMatchMedia = createMatchMediaMock(true)
    window.matchMedia = vi.fn(() => mockMatchMedia as unknown as MediaQueryList)

    const { result } = renderHook(() => useMatchMedia(BREAKPOINT_MOBILE))

    expect(result.current).toBe(true)
    expect(window.matchMedia).toHaveBeenCalledWith(BREAKPOINT_MOBILE)
  })

  it('should return false when media query does not match', () => {
    const mockMatchMedia = createMatchMediaMock(false)
    window.matchMedia = vi.fn(() => mockMatchMedia as unknown as MediaQueryList)

    const { result } = renderHook(() => useMatchMedia(BREAKPOINT_MOBILE))

    expect(result.current).toBe(false)
  })

  it('should update when media query changes', async () => {
    const mockMatchMedia = createMatchMediaMock(false)
    window.matchMedia = vi.fn(() => mockMatchMedia as unknown as MediaQueryList)

    const { result, rerender } = renderHook(() =>
      useMatchMedia(BREAKPOINT_MOBILE)
    )

    expect(result.current).toBe(false)

    // Simulate viewport change
    act(() => {
      mockMatchMedia._triggerChange(true)
    })

    // Rerender to get updated value
    rerender()

    expect(result.current).toBe(true)
  })

  it('should add and remove event listeners', () => {
    const mockMatchMedia = createMatchMediaMock(false)
    window.matchMedia = vi.fn(() => mockMatchMedia as unknown as MediaQueryList)

    const { unmount } = renderHook(() => useMatchMedia(BREAKPOINT_MOBILE))

    expect(mockMatchMedia.addEventListener).toHaveBeenCalledWith(
      'change',
      expect.any(Function)
    )

    unmount()

    expect(mockMatchMedia.removeEventListener).toHaveBeenCalledWith(
      'change',
      expect.any(Function)
    )
  })

  it('should handle custom media queries', () => {
    const customQuery = '(min-width: 1440px)'
    const mockMatchMedia = createMatchMediaMock(true)
    window.matchMedia = vi.fn(() => mockMatchMedia as unknown as MediaQueryList)

    const { result } = renderHook(() => useMatchMedia(customQuery))

    expect(result.current).toBe(true)
    expect(window.matchMedia).toHaveBeenCalledWith(customQuery)
  })
})
