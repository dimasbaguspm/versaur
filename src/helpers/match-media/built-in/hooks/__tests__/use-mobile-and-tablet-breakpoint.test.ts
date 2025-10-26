import { renderHook } from '@testing-library/react'
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import { useMobileAndTabletBreakpoint } from '../use-mobile-and-tablet-breakpoint'
import { BREAKPOINT_MOBILE_AND_TABLET } from '../../../constants'
import {
  createMatchMediaMock,
  setupMatchMediaMock,
} from '../../../test-helpers'

describe('useMobileAndTabletBreakpoint', () => {
  const { beforeEach: setupBefore, afterEach: setupAfter } =
    setupMatchMediaMock()

  beforeEach(() => {
    setupBefore()
  })

  afterEach(() => {
    setupAfter()
  })

  it('should return true when viewport is mobile or tablet', () => {
    const mockMatchMedia = createMatchMediaMock(true)
    window.matchMedia = vi.fn(() => mockMatchMedia as unknown as MediaQueryList)

    const { result } = renderHook(() => useMobileAndTabletBreakpoint())

    expect(result.current).toBe(true)
    expect(window.matchMedia).toHaveBeenCalledWith(BREAKPOINT_MOBILE_AND_TABLET)
  })

  it('should return false when viewport is desktop', () => {
    const mockMatchMedia = createMatchMediaMock(false)
    window.matchMedia = vi.fn(() => mockMatchMedia as unknown as MediaQueryList)

    const { result } = renderHook(() => useMobileAndTabletBreakpoint())

    expect(result.current).toBe(false)
  })
})
