import { renderHook } from '@testing-library/react'
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import { useMobilePortraitBreakpoint } from '../use-mobile-portrait-breakpoint'
import { BREAKPOINT_MOBILE_PORTRAIT } from '../../../constants'
import {
  createMatchMediaMock,
  setupMatchMediaMock,
} from '../../../test-helpers'

describe('useMobilePortraitBreakpoint', () => {
  const { beforeEach: setupBefore, afterEach: setupAfter } =
    setupMatchMediaMock()

  beforeEach(() => {
    setupBefore()
  })

  afterEach(() => {
    setupAfter()
  })

  it('should return true when viewport is mobile portrait', () => {
    const mockMatchMedia = createMatchMediaMock(true)
    window.matchMedia = vi.fn(() => mockMatchMedia as unknown as MediaQueryList)

    const { result } = renderHook(() => useMobilePortraitBreakpoint())

    expect(result.current).toBe(true)
    expect(window.matchMedia).toHaveBeenCalledWith(BREAKPOINT_MOBILE_PORTRAIT)
  })

  it('should return false when viewport is not mobile portrait', () => {
    const mockMatchMedia = createMatchMediaMock(false)
    window.matchMedia = vi.fn(() => mockMatchMedia as unknown as MediaQueryList)

    const { result } = renderHook(() => useMobilePortraitBreakpoint())

    expect(result.current).toBe(false)
  })
})
