import { render, screen } from '@testing-library/react'
import { composeStories } from '@storybook/react'
import * as stories from '../side-bar.stories'

describe('SideBar', () => {
  const { Default } = composeStories(stories)

  it('renders correctly and matches snapshot', () => {
    const { asFragment } = render(<Default />)
    expect(asFragment()).toMatchSnapshot()
  })

  it('renders all sidebar items', () => {
    render(<Default />)
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('Settings')).toBeInTheDocument()
    // Check a few dynamic items
    expect(screen.getByText('abc + 0')).toBeInTheDocument()
    expect(screen.getByText('abc + 49')).toBeInTheDocument()
  })

  it('sidebar is scrollable', () => {
    render(<Default />)
    const nav = screen.getByLabelText('Sidebar')
    const scrollContainer = nav.querySelector('div')
    expect(scrollContainer).toHaveClass('overflow-y-auto')
  })

  it('sidebar items have correct roles and structure', () => {
    render(<Default />)
    const nav = screen.getByLabelText('Sidebar')
    expect(nav.tagName).toBe('NAV')
    expect(nav.querySelector('ul')).toBeInTheDocument()
    expect(screen.getAllByRole('listitem').length).toBeGreaterThan(0)
  })
})
