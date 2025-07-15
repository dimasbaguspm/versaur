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
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('Search')).toBeInTheDocument()
    expect(screen.getByText('Profile')).toBeInTheDocument()
    expect(asFragment()).toMatchSnapshot()
  })

  it('renders 5 items and matches snapshot', () => {
    const { asFragment } = render(<FiveItems />)
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('Search')).toBeInTheDocument()
    expect(screen.getByText('Settings')).toBeInTheDocument()
    expect(screen.getByText('Profile')).toBeInTheDocument()
    expect(asFragment()).toMatchSnapshot()
  })

  it('has accessible role navigation', () => {
    render(<ThreeItems />)
    expect(screen.getByRole('navigation')).toBeInTheDocument()
  })
})
