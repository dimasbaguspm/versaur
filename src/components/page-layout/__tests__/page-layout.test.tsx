// ...existing code...
import { render, screen } from '@testing-library/react'
import { composeStories } from '@storybook/react'
import * as stories from '../page-layout.stories'

describe('PageLayout', () => {
  const { Desktop, Tablet, Mobile } = composeStories(stories)

  it('renders desktop layout and matches snapshot', () => {
    const { asFragment } = render(<Desktop />)
    expect(asFragment()).toMatchSnapshot()
    expect(screen.getByText(/Desktop layout/)).toBeInTheDocument()
  })

  it('renders tablet layout and matches snapshot', () => {
    const { asFragment } = render(<Tablet />)
    expect(asFragment()).toMatchSnapshot()
    expect(screen.getByText(/Tablet layout/)).toBeInTheDocument()
  })

  it('renders mobile layout and matches snapshot', () => {
    const { asFragment } = render(<Mobile />)
    expect(asFragment()).toMatchSnapshot()
    expect(screen.getByText(/Mobile layout/)).toBeInTheDocument()
  })
})
