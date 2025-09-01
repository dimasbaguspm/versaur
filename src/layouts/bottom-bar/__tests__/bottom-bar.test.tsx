/**
 * BottomBar component tests
 *
 * - Uses composeStories from @storybook/react
 * - Asserts accessibility and snapshot
 * - Follows Versaur UI guidelines
 */
import { render, screen } from '@testing-library/react'
import { composeStories } from '@storybook/react'
import * as stories from '../bottom-bar.stories'

const { ThreeItems, FiveItems } = composeStories(stories)

describe('BottomBar', () => {
  it('renders 3 items and matches snapshot', () => {
    const { asFragment } = render(<ThreeItems />)
    expect(asFragment()).toMatchSnapshot()
  })

  it('renders 5 items and matches snapshot', () => {
    const { asFragment } = render(<FiveItems />)
    expect(asFragment()).toMatchSnapshot()
  })

  it('has accessible role navigation', () => {
    render(<ThreeItems />)
    expect(screen.getByRole('navigation')).toBeInTheDocument()
  })
})
