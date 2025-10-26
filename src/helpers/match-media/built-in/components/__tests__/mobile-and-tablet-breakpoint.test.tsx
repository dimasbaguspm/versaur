import { render, screen } from '@testing-library/react'
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import { MobileAndTabletBreakpoint } from '../mobile-and-tablet-breakpoint'
import {
  createMatchMediaMock,
  setupMatchMediaMock,
} from '../../../test-helpers'

describe('MobileAndTabletBreakpoint', () => {
  const { beforeEach: setupBefore, afterEach: setupAfter } =
    setupMatchMediaMock()

  beforeEach(() => {
    setupBefore()
  })

  afterEach(() => {
    setupAfter()
  })

  it('should render children when viewport is mobile or tablet', () => {
    const mockMatchMedia = createMatchMediaMock(true)
    window.matchMedia = vi.fn(() => mockMatchMedia as unknown as MediaQueryList)

    render(
      <MobileAndTabletBreakpoint>
        <div data-testid='mobile-tablet-content'>Mobile/Tablet Content</div>
      </MobileAndTabletBreakpoint>
    )

    expect(screen.getByTestId('mobile-tablet-content')).toBeInTheDocument()
  })

  it('should not render children when viewport is desktop', () => {
    const mockMatchMedia = createMatchMediaMock(false)
    window.matchMedia = vi.fn(() => mockMatchMedia as unknown as MediaQueryList)

    render(
      <MobileAndTabletBreakpoint>
        <div data-testid='mobile-tablet-content'>Mobile/Tablet Content</div>
      </MobileAndTabletBreakpoint>
    )

    expect(
      screen.queryByTestId('mobile-tablet-content')
    ).not.toBeInTheDocument()
  })

  it('should match snapshot when rendered', () => {
    const mockMatchMedia = createMatchMediaMock(true)
    window.matchMedia = vi.fn(() => mockMatchMedia as unknown as MediaQueryList)

    const { asFragment } = render(
      <MobileAndTabletBreakpoint>
        <div>Mobile/Tablet Content</div>
      </MobileAndTabletBreakpoint>
    )

    expect(asFragment()).toMatchSnapshot()
  })
})
