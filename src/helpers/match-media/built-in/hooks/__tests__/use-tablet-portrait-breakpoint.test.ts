import { renderHook } from '@testing-library/react'
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import { useTabletPortraitBreakpoint } from '../use-tablet-portrait-breakpoint'
import { BREAKPOINT_TABLET_PORTRAIT } from '../../../constants'
import {
  createMatchMediaMock,
  setupMatchMediaMock,
} from '../../../test-helpers'

describe('useTabletPortraitBreakpoint', () => {
  const { beforeEach: setupBefore, afterEach: setupAfter } =
    setupMatchMediaMock()

  beforeEach(() => {
    setupBefore()
  })

  afterEach(() => {
    setupAfter()
  })

  it('should return true when viewport is tablet portrait', () => {
    const mockMatchMedia = createMatchMediaMock(true)
    window.matchMedia = vi.fn(() => mockMatchMedia as unknown as MediaQueryList)

    const { result } = renderHook(() => useTabletPortraitBreakpoint())

    expect(result.current).toBe(true)
    expect(window.matchMedia).toHaveBeenCalledWith(BREAKPOINT_TABLET_PORTRAIT)
  })

  it('should return false when viewport is not tablet portrait', () => {
    const mockMatchMedia = createMatchMediaMock(false)
    window.matchMedia = vi.fn(() => mockMatchMedia as unknown as MediaQueryList)

    const { result } = renderHook(() => useTabletPortraitBreakpoint())

    expect(result.current).toBe(false)
  })
})
