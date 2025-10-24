import { render, screen } from '@testing-library/react'
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import { MatchMedia } from '../match-media'
import { createMatchMediaMock, setupMatchMediaMock } from '../test-helpers'

describe('MatchMedia', () => {
  const { beforeEach: setupBefore, afterEach: setupAfter } =
    setupMatchMediaMock()

  beforeEach(() => {
    setupBefore()
  })

  afterEach(() => {
    setupAfter()
  })

  it('should render children when query matches', () => {
    const mockMatchMedia = createMatchMediaMock(true)
    window.matchMedia = vi.fn(() => mockMatchMedia as unknown as MediaQueryList)

    render(
      <MatchMedia query='(min-width: 1024px)'>
        <div data-testid='content'>Desktop Content</div>
      </MatchMedia>
    )

    expect(screen.getByTestId('content')).toBeInTheDocument()
  })

  it('should not render children when query does not match', () => {
    const mockMatchMedia = createMatchMediaMock(false)
    window.matchMedia = vi.fn(() => mockMatchMedia as unknown as MediaQueryList)

    render(
      <MatchMedia query='(min-width: 1024px)'>
        <div data-testid='content'>Desktop Content</div>
      </MatchMedia>
    )

    expect(screen.queryByTestId('content')).not.toBeInTheDocument()
  })

  it('should work with custom media queries', () => {
    const mockMatchMedia = createMatchMediaMock(true)
    window.matchMedia = vi.fn(() => mockMatchMedia as unknown as MediaQueryList)

    render(
      <MatchMedia query='(prefers-color-scheme: dark)'>
        <div data-testid='dark-mode'>Dark Mode UI</div>
      </MatchMedia>
    )

    expect(screen.getByTestId('dark-mode')).toBeInTheDocument()
    expect(window.matchMedia).toHaveBeenCalledWith(
      '(prefers-color-scheme: dark)'
    )
  })

  it('should match snapshot when rendered', () => {
    const mockMatchMedia = createMatchMediaMock(true)
    window.matchMedia = vi.fn(() => mockMatchMedia as unknown as MediaQueryList)

    const { asFragment } = render(
      <MatchMedia query='(min-width: 1024px)'>
        <div>Content</div>
      </MatchMedia>
    )

    expect(asFragment()).toMatchSnapshot()
  })

  it('should not affect accessibility tree when hidden', () => {
    const mockMatchMedia = createMatchMediaMock(false)
    window.matchMedia = vi.fn(() => mockMatchMedia as unknown as MediaQueryList)

    const { container } = render(
      <MatchMedia query='(min-width: 1024px)'>
        <div role='navigation'>Navigation</div>
      </MatchMedia>
    )

    expect(
      container.querySelector('[role="navigation"]')
    ).not.toBeInTheDocument()
  })

  it('should preserve accessibility attributes when shown', () => {
    const mockMatchMedia = createMatchMediaMock(true)
    window.matchMedia = vi.fn(() => mockMatchMedia as unknown as MediaQueryList)

    render(
      <MatchMedia query='(min-width: 1024px)'>
        <nav role='navigation' aria-label='Main Navigation'>
          <button>Menu</button>
        </nav>
      </MatchMedia>
    )

    const nav = screen.getByRole('navigation', { name: 'Main Navigation' })
    expect(nav).toBeInTheDocument()
  })
})
