import { render, screen } from '@testing-library/react'
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import { MobileLandscapeBreakpoint } from '../mobile-landscape-breakpoint'
import {
  createMatchMediaMock,
  setupMatchMediaMock,
} from '../../../test-helpers'

describe('MobileLandscapeBreakpoint', () => {
  const { beforeEach: setupBefore, afterEach: setupAfter } =
    setupMatchMediaMock()

  beforeEach(() => {
    setupBefore()
  })

  afterEach(() => {
    setupAfter()
  })

  it('should render children when viewport is mobile landscape', () => {
    const mockMatchMedia = createMatchMediaMock(true)
    window.matchMedia = vi.fn(() => mockMatchMedia as unknown as MediaQueryList)

    render(
      <MobileLandscapeBreakpoint>
        <div data-testid='mobile-landscape-content'>
          Mobile Landscape Content
        </div>
      </MobileLandscapeBreakpoint>
    )

    expect(screen.getByTestId('mobile-landscape-content')).toBeInTheDocument()
  })

  it('should not render children when viewport is not mobile landscape', () => {
    const mockMatchMedia = createMatchMediaMock(false)
    window.matchMedia = vi.fn(() => mockMatchMedia as unknown as MediaQueryList)

    render(
      <MobileLandscapeBreakpoint>
        <div data-testid='mobile-landscape-content'>
          Mobile Landscape Content
        </div>
      </MobileLandscapeBreakpoint>
    )

    expect(
      screen.queryByTestId('mobile-landscape-content')
    ).not.toBeInTheDocument()
  })

  it('should match snapshot when rendered', () => {
    const mockMatchMedia = createMatchMediaMock(true)
    window.matchMedia = vi.fn(() => mockMatchMedia as unknown as MediaQueryList)

    const { asFragment } = render(
      <MobileLandscapeBreakpoint>
        <div>Mobile Landscape Content</div>
      </MobileLandscapeBreakpoint>
    )

    expect(asFragment()).toMatchSnapshot()
  })
})
