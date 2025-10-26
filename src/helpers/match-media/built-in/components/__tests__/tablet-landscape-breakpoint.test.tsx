import { render, screen } from '@testing-library/react'
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import { TabletLandscapeBreakpoint } from '../tablet-landscape-breakpoint'
import {
  createMatchMediaMock,
  setupMatchMediaMock,
} from '../../../test-helpers'

describe('TabletLandscapeBreakpoint', () => {
  const { beforeEach: setupBefore, afterEach: setupAfter } =
    setupMatchMediaMock()

  beforeEach(() => {
    setupBefore()
  })

  afterEach(() => {
    setupAfter()
  })

  it('should render children when viewport is tablet landscape', () => {
    const mockMatchMedia = createMatchMediaMock(true)
    window.matchMedia = vi.fn(() => mockMatchMedia as unknown as MediaQueryList)

    render(
      <TabletLandscapeBreakpoint>
        <div data-testid='tablet-landscape-content'>
          Tablet Landscape Content
        </div>
      </TabletLandscapeBreakpoint>
    )

    expect(screen.getByTestId('tablet-landscape-content')).toBeInTheDocument()
  })

  it('should not render children when viewport is not tablet landscape', () => {
    const mockMatchMedia = createMatchMediaMock(false)
    window.matchMedia = vi.fn(() => mockMatchMedia as unknown as MediaQueryList)

    render(
      <TabletLandscapeBreakpoint>
        <div data-testid='tablet-landscape-content'>
          Tablet Landscape Content
        </div>
      </TabletLandscapeBreakpoint>
    )

    expect(
      screen.queryByTestId('tablet-landscape-content')
    ).not.toBeInTheDocument()
  })

  it('should match snapshot when rendered', () => {
    const mockMatchMedia = createMatchMediaMock(true)
    window.matchMedia = vi.fn(() => mockMatchMedia as unknown as MediaQueryList)

    const { asFragment } = render(
      <TabletLandscapeBreakpoint>
        <div>Tablet Landscape Content</div>
      </TabletLandscapeBreakpoint>
    )

    expect(asFragment()).toMatchSnapshot()
  })
})
