import { render, screen } from '@testing-library/react'
import { composeStories } from '@storybook/react'
import * as stories from '../breadcrumbs.stories'

describe('Breadcrumbs', () => {
  const { Basic, Impactful } = composeStories(stories)

  it('renders correctly and matches snapshot', () => {
    const { asFragment } = render(<Basic />)
    expect(asFragment()).toMatchSnapshot()
  })

  it('renders all breadcrumb items', () => {
    render(<Basic />)
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('Applicant')).toBeInTheDocument()
    expect(screen.getByText('Details')).toBeInTheDocument()
  })

  it('renders correctly with impactful story', () => {
    const { asFragment } = render(<Impactful />)
    expect(asFragment()).toMatchSnapshot()
  })

  it('renders all impactful items and separators', () => {
    render(<Impactful />)
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('Dashboard')).toBeInTheDocument()
    expect(screen.getByText('Settings')).toBeInTheDocument()
    expect(screen.getByText('Profile')).toBeInTheDocument()
  })
})
