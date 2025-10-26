import { renderHook } from '@testing-library/react'
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import { useMobileLandscapeBreakpoint } from '../use-mobile-landscape-breakpoint'
import { BREAKPOINT_MOBILE_LANDSCAPE } from '../../../constants'
import {
  createMatchMediaMock,
  setupMatchMediaMock,
} from '../../../test-helpers'

describe('useMobileLandscapeBreakpoint', () => {
  const { beforeEach: setupBefore, afterEach: setupAfter } =
    setupMatchMediaMock()

  beforeEach(() => {
    setupBefore()
  })

  afterEach(() => {
    setupAfter()
  })

  it('should return true when viewport is mobile landscape', () => {
    const mockMatchMedia = createMatchMediaMock(true)
    window.matchMedia = vi.fn(() => mockMatchMedia as unknown as MediaQueryList)

    const { result } = renderHook(() => useMobileLandscapeBreakpoint())

    expect(result.current).toBe(true)
    expect(window.matchMedia).toHaveBeenCalledWith(BREAKPOINT_MOBILE_LANDSCAPE)
  })

  it('should return false when viewport is not mobile landscape', () => {
    const mockMatchMedia = createMatchMediaMock(false)
    window.matchMedia = vi.fn(() => mockMatchMedia as unknown as MediaQueryList)

    const { result } = renderHook(() => useMobileLandscapeBreakpoint())

    expect(result.current).toBe(false)
  })
})
