import { render, screen } from '@testing-library/react'
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import { MobilePortraitBreakpoint } from '../mobile-portrait-breakpoint'
import {
  createMatchMediaMock,
  setupMatchMediaMock,
} from '../../../test-helpers'

describe('MobilePortraitBreakpoint', () => {
  const { beforeEach: setupBefore, afterEach: setupAfter } =
    setupMatchMediaMock()

  beforeEach(() => {
    setupBefore()
  })

  afterEach(() => {
    setupAfter()
  })

  it('should render children when viewport is mobile portrait', () => {
    const mockMatchMedia = createMatchMediaMock(true)
    window.matchMedia = vi.fn(() => mockMatchMedia as unknown as MediaQueryList)

    render(
      <MobilePortraitBreakpoint>
        <div data-testid='mobile-portrait-content'>Mobile Portrait Content</div>
      </MobilePortraitBreakpoint>
    )

    expect(screen.getByTestId('mobile-portrait-content')).toBeInTheDocument()
  })

  it('should not render children when viewport is not mobile portrait', () => {
    const mockMatchMedia = createMatchMediaMock(false)
    window.matchMedia = vi.fn(() => mockMatchMedia as unknown as MediaQueryList)

    render(
      <MobilePortraitBreakpoint>
        <div data-testid='mobile-portrait-content'>Mobile Portrait Content</div>
      </MobilePortraitBreakpoint>
    )

    expect(
      screen.queryByTestId('mobile-portrait-content')
    ).not.toBeInTheDocument()
  })

  it('should match snapshot when rendered', () => {
    const mockMatchMedia = createMatchMediaMock(true)
    window.matchMedia = vi.fn(() => mockMatchMedia as unknown as MediaQueryList)

    const { asFragment } = render(
      <MobilePortraitBreakpoint>
        <div>Mobile Portrait Content</div>
      </MobilePortraitBreakpoint>
    )

    expect(asFragment()).toMatchSnapshot()
  })
})
