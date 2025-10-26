import { renderHook } from '@testing-library/react'
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import { useTabletAndDesktopBreakpoint } from '../use-tablet-and-desktop-breakpoint'
import { BREAKPOINT_TABLET_AND_DESKTOP } from '../../../constants'
import {
  createMatchMediaMock,
  setupMatchMediaMock,
} from '../../../test-helpers'

describe('useTabletAndDesktopBreakpoint', () => {
  const { beforeEach: setupBefore, afterEach: setupAfter } =
    setupMatchMediaMock()

  beforeEach(() => {
    setupBefore()
  })

  afterEach(() => {
    setupAfter()
  })

  it('should return true when viewport is tablet or desktop', () => {
    const mockMatchMedia = createMatchMediaMock(true)
    window.matchMedia = vi.fn(() => mockMatchMedia as unknown as MediaQueryList)

    const { result } = renderHook(() => useTabletAndDesktopBreakpoint())

    expect(result.current).toBe(true)
    expect(window.matchMedia).toHaveBeenCalledWith(
      BREAKPOINT_TABLET_AND_DESKTOP
    )
  })

  it('should return false when viewport is mobile', () => {
    const mockMatchMedia = createMatchMediaMock(false)
    window.matchMedia = vi.fn(() => mockMatchMedia as unknown as MediaQueryList)

    const { result } = renderHook(() => useTabletAndDesktopBreakpoint())

    expect(result.current).toBe(false)
  })
})
