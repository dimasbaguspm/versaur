import { render, screen } from '@testing-library/react'
import { composeStories } from '@storybook/react'
import * as stories from '../app-bar.stories'

describe('AppBar', () => {
  const { Home, Detail } = composeStories(stories)

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
})
