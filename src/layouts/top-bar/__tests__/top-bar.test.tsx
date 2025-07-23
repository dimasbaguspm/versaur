import { render, screen } from '@testing-library/react'
import { composeStories } from '@storybook/react'
import * as stories from '../top-bar.stories'

describe('TopBar', () => {
  const { Default } = composeStories(stories)

  it('renders correctly (snapshot)', () => {
    const { asFragment } = render(<Default />)
    expect(asFragment()).toMatchSnapshot()
  })

  it('renders navigation items', () => {
    render(<Default />)
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('Docs')).toBeInTheDocument()
    expect(screen.getByText('Pricing')).toBeInTheDocument()
  })

  it('renders actions and avatar', () => {
    render(<Default />)
    expect(screen.getByLabelText('Notifications')).toBeInTheDocument()
    expect(screen.getByLabelText('Settings')).toBeInTheDocument()
    expect(screen.getByText('DM')).toBeInTheDocument()
  })

  it('applies active state to nav item', () => {
    render(<Default />)
    const activeNav = screen.getByText('Home')
    expect(activeNav).toHaveAttribute('aria-current', 'page')
  })
})
