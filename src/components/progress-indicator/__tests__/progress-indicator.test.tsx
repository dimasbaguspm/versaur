/**
 * ProgressIndicator stories test — Versaur UI
 *
 * Uses composeStories from Storybook for realistic rendering and assertions
 */
import { render, screen } from '@testing-library/react'
import * as stories from '../progress-indicator.stories'
import { composeStories } from '@storybook/react'

describe('ProgressIndicator (stories)', () => {
  const { ColorVariants } = composeStories(stories)

  it('renders all color variants with correct value', () => {
    render(<ColorVariants />)
    const bars = screen.getAllByRole('progressbar')
    expect(bars).toHaveLength(6)
    bars.forEach(bar => {
      expect(bar).toBeInTheDocument()
      expect(bar).toHaveAttribute('aria-valuenow', '60')
      expect(bar).toHaveAttribute('aria-valuemax', '100')
      expect(bar).toHaveAttribute('aria-valuemin', '0')
    })
  })

  it('matches snapshot for color variants', () => {
    const { asFragment } = render(<ColorVariants />)
    expect(asFragment()).toMatchSnapshot()
  })
})
