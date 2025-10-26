import { render, screen } from '@testing-library/react'
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import { TabletAndDesktopBreakpoint } from '../tablet-and-desktop-breakpoint'
import {
  createMatchMediaMock,
  setupMatchMediaMock,
} from '../../../test-helpers'

describe('TabletAndDesktopBreakpoint', () => {
  const { beforeEach: setupBefore, afterEach: setupAfter } =
    setupMatchMediaMock()

  beforeEach(() => {
    setupBefore()
  })

  afterEach(() => {
    setupAfter()
  })

  it('should render children when viewport is tablet or desktop', () => {
    const mockMatchMedia = createMatchMediaMock(true)
    window.matchMedia = vi.fn(() => mockMatchMedia as unknown as MediaQueryList)

    render(
      <TabletAndDesktopBreakpoint>
        <div data-testid='tablet-desktop-content'>Tablet/Desktop Content</div>
      </TabletAndDesktopBreakpoint>
    )

    expect(screen.getByTestId('tablet-desktop-content')).toBeInTheDocument()
  })

  it('should not render children when viewport is mobile', () => {
    const mockMatchMedia = createMatchMediaMock(false)
    window.matchMedia = vi.fn(() => mockMatchMedia as unknown as MediaQueryList)

    render(
      <TabletAndDesktopBreakpoint>
        <div data-testid='tablet-desktop-content'>Tablet/Desktop Content</div>
      </TabletAndDesktopBreakpoint>
    )

    expect(
      screen.queryByTestId('tablet-desktop-content')
    ).not.toBeInTheDocument()
  })

  it('should match snapshot when rendered', () => {
    const mockMatchMedia = createMatchMediaMock(true)
    window.matchMedia = vi.fn(() => mockMatchMedia as unknown as MediaQueryList)

    const { asFragment } = render(
      <TabletAndDesktopBreakpoint>
        <div>Tablet/Desktop Content</div>
      </TabletAndDesktopBreakpoint>
    )

    expect(asFragment()).toMatchSnapshot()
  })
})
