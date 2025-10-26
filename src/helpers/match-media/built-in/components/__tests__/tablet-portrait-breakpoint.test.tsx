import { render, screen } from '@testing-library/react'
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import { TabletPortraitBreakpoint } from '../tablet-portrait-breakpoint'
import {
  createMatchMediaMock,
  setupMatchMediaMock,
} from '../../../test-helpers'

describe('TabletPortraitBreakpoint', () => {
  const { beforeEach: setupBefore, afterEach: setupAfter } =
    setupMatchMediaMock()

  beforeEach(() => {
    setupBefore()
  })

  afterEach(() => {
    setupAfter()
  })

  it('should render children when viewport is tablet portrait', () => {
    const mockMatchMedia = createMatchMediaMock(true)
    window.matchMedia = vi.fn(() => mockMatchMedia as unknown as MediaQueryList)

    render(
      <TabletPortraitBreakpoint>
        <div data-testid='tablet-portrait-content'>Tablet Portrait Content</div>
      </TabletPortraitBreakpoint>
    )

    expect(screen.getByTestId('tablet-portrait-content')).toBeInTheDocument()
  })

  it('should not render children when viewport is not tablet portrait', () => {
    const mockMatchMedia = createMatchMediaMock(false)
    window.matchMedia = vi.fn(() => mockMatchMedia as unknown as MediaQueryList)

    render(
      <TabletPortraitBreakpoint>
        <div data-testid='tablet-portrait-content'>Tablet Portrait Content</div>
      </TabletPortraitBreakpoint>
    )

    expect(
      screen.queryByTestId('tablet-portrait-content')
    ).not.toBeInTheDocument()
  })

  it('should match snapshot when rendered', () => {
    const mockMatchMedia = createMatchMediaMock(true)
    window.matchMedia = vi.fn(() => mockMatchMedia as unknown as MediaQueryList)

    const { asFragment } = render(
      <TabletPortraitBreakpoint>
        <div>Tablet Portrait Content</div>
      </TabletPortraitBreakpoint>
    )

    expect(asFragment()).toMatchSnapshot()
  })
})
