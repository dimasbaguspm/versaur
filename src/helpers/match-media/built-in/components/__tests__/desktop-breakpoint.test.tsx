import { render, screen } from '@testing-library/react'
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import { DesktopBreakpoint } from '../desktop-breakpoint'
import {
  createMatchMediaMock,
  setupMatchMediaMock,
} from '../../../test-helpers'

describe('DesktopBreakpoint', () => {
  const { beforeEach: setupBefore, afterEach: setupAfter } =
    setupMatchMediaMock()

  beforeEach(() => {
    setupBefore()
  })

  afterEach(() => {
    setupAfter()
  })

  it('should render children when viewport is desktop', () => {
    const mockMatchMedia = createMatchMediaMock(true)
    window.matchMedia = vi.fn(() => mockMatchMedia as unknown as MediaQueryList)

    render(
      <DesktopBreakpoint>
        <div data-testid='desktop-content'>Desktop Content</div>
      </DesktopBreakpoint>
    )

    expect(screen.getByTestId('desktop-content')).toBeInTheDocument()
  })

  it('should not render children when viewport is not desktop', () => {
    const mockMatchMedia = createMatchMediaMock(false)
    window.matchMedia = vi.fn(() => mockMatchMedia as unknown as MediaQueryList)

    render(
      <DesktopBreakpoint>
        <div data-testid='desktop-content'>Desktop Content</div>
      </DesktopBreakpoint>
    )

    expect(screen.queryByTestId('desktop-content')).not.toBeInTheDocument()
  })

  it('should match snapshot when rendered', () => {
    const mockMatchMedia = createMatchMediaMock(true)
    window.matchMedia = vi.fn(() => mockMatchMedia as unknown as MediaQueryList)

    const { asFragment } = render(
      <DesktopBreakpoint>
        <div>Desktop Content</div>
      </DesktopBreakpoint>
    )

    expect(asFragment()).toMatchSnapshot()
  })
})
