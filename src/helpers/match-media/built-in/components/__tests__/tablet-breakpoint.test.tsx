import { render, screen } from '@testing-library/react'
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import { TabletBreakpoint } from '../tablet-breakpoint'
import {
  createMatchMediaMock,
  setupMatchMediaMock,
} from '../../../test-helpers'

describe('TabletBreakpoint', () => {
  const { beforeEach: setupBefore, afterEach: setupAfter } =
    setupMatchMediaMock()

  beforeEach(() => {
    setupBefore()
  })

  afterEach(() => {
    setupAfter()
  })

  it('should render children when viewport is tablet', () => {
    const mockMatchMedia = createMatchMediaMock(true)
    window.matchMedia = vi.fn(() => mockMatchMedia as unknown as MediaQueryList)

    render(
      <TabletBreakpoint>
        <div data-testid='tablet-content'>Tablet Content</div>
      </TabletBreakpoint>
    )

    expect(screen.getByTestId('tablet-content')).toBeInTheDocument()
  })

  it('should not render children when viewport is not tablet', () => {
    const mockMatchMedia = createMatchMediaMock(false)
    window.matchMedia = vi.fn(() => mockMatchMedia as unknown as MediaQueryList)

    render(
      <TabletBreakpoint>
        <div data-testid='tablet-content'>Tablet Content</div>
      </TabletBreakpoint>
    )

    expect(screen.queryByTestId('tablet-content')).not.toBeInTheDocument()
  })

  it('should match snapshot when rendered', () => {
    const mockMatchMedia = createMatchMediaMock(true)
    window.matchMedia = vi.fn(() => mockMatchMedia as unknown as MediaQueryList)

    const { asFragment } = render(
      <TabletBreakpoint>
        <div>Tablet Content</div>
      </TabletBreakpoint>
    )

    expect(asFragment()).toMatchSnapshot()
  })
})
