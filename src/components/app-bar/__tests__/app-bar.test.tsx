import { render, screen } from '@testing-library/react'
import { composeStories } from '@storybook/react'
import * as stories from '../app-bar.stories'

describe('AppBar', () => {
  const { Home, Detail, WithBottom } = composeStories(stories)

  it('renders Home story with headline and avatar', () => {
    render(<Home />)
    expect(screen.getByText('Spenicle')).toBeInTheDocument()
    expect(screen.getByText('DM')).toBeInTheDocument()
    expect(screen.getByLabelText('More')).toBeInTheDocument()
  })

  it('renders Detail story with headline and subtitle', () => {
    render(<Detail />)
    expect(screen.getByText('Transaction')).toBeInTheDocument()
    expect(screen.getByText('Period 29 May - 3 July')).toBeInTheDocument()
    expect(screen.getByLabelText('Print')).toBeInTheDocument()
  })

  it('renders correctly (snapshot)', () => {
    const { asFragment } = render(<Detail />)
    expect(asFragment()).toMatchSnapshot()
  })

  it('renders WithBottom story and AppBar.Bottom is always on a new line', () => {
    const { container } = render(<WithBottom />)
    // AppBar.Bottom should be present
    const bottom = container.querySelector('[data-versaur-appbar-bottom]')
    expect(bottom).toBeInTheDocument()
    // Should be a direct child of header (new line)
    expect(bottom?.parentElement?.tagName.toLowerCase()).toBe('header')
    // Snapshot for layout
    expect(container).toMatchSnapshot()
  })
})
