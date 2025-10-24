import { render, screen } from '@testing-library/react'
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import { MobileBreakpoint } from '../mobile-breakpoint'
import {
  createMatchMediaMock,
  setupMatchMediaMock,
} from '../../../test-helpers'

describe('MobileBreakpoint', () => {
  const { beforeEach: setupBefore, afterEach: setupAfter } =
    setupMatchMediaMock()

  beforeEach(() => {
    setupBefore()
  })

  afterEach(() => {
    setupAfter()
  })

  it('should render children when viewport is mobile', () => {
    const mockMatchMedia = createMatchMediaMock(true)
    window.matchMedia = vi.fn(() => mockMatchMedia as unknown as MediaQueryList)

    render(
      <MobileBreakpoint>
        <div data-testid='mobile-content'>Mobile Content</div>
      </MobileBreakpoint>
    )

    expect(screen.getByTestId('mobile-content')).toBeInTheDocument()
  })

  it('should not render children when viewport is not mobile', () => {
    const mockMatchMedia = createMatchMediaMock(false)
    window.matchMedia = vi.fn(() => mockMatchMedia as unknown as MediaQueryList)

    render(
      <MobileBreakpoint>
        <div data-testid='mobile-content'>Mobile Content</div>
      </MobileBreakpoint>
    )

    expect(screen.queryByTestId('mobile-content')).not.toBeInTheDocument()
  })

  it('should match snapshot when rendered', () => {
    const mockMatchMedia = createMatchMediaMock(true)
    window.matchMedia = vi.fn(() => mockMatchMedia as unknown as MediaQueryList)

    const { asFragment } = render(
      <MobileBreakpoint>
        <div>Mobile Content</div>
      </MobileBreakpoint>
    )

    expect(asFragment()).toMatchSnapshot()
  })

  it('should not affect accessibility tree when hidden', () => {
    const mockMatchMedia = createMatchMediaMock(false)
    window.matchMedia = vi.fn(() => mockMatchMedia as unknown as MediaQueryList)

    const { container } = render(
      <MobileBreakpoint>
        <div role='navigation'>Mobile Navigation</div>
      </MobileBreakpoint>
    )

    expect(
      container.querySelector('[role="navigation"]')
    ).not.toBeInTheDocument()
  })

  it('should preserve accessibility attributes when shown', () => {
    const mockMatchMedia = createMatchMediaMock(true)
    window.matchMedia = vi.fn(() => mockMatchMedia as unknown as MediaQueryList)

    render(
      <MobileBreakpoint>
        <nav role='navigation' aria-label='Mobile Navigation'>
          <button>Menu</button>
        </nav>
      </MobileBreakpoint>
    )

    const nav = screen.getByRole('navigation', { name: 'Mobile Navigation' })
    expect(nav).toBeInTheDocument()
  })
})
