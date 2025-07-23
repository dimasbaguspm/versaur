import { render, screen } from '@testing-library/react'
import * as stories from '../date-single-picker-input.docked.stories'
import { composeStories } from '@storybook/react'

describe('DateSinglePickerInput Docked Stories', () => {
  const {
    DockedDefault,
    DockedWithLeftIcon,
    DockedErrorState,
    DockedDisabled,
    DockedAllVariants,
  } = composeStories(stories)

  it('renders default docked story and matches snapshot', () => {
    const { asFragment } = render(<DockedDefault />)
    expect(asFragment()).toMatchSnapshot()
    expect(screen.getByLabelText(/date of birth/i)).toBeInTheDocument()
  })

  it('renders with left icon', () => {
    render(<DockedWithLeftIcon />)
    expect(screen.getByRole('button', { name: /date/i })).toBeInTheDocument()
  })

  it('shows error state', () => {
    render(<DockedErrorState />)
    expect(screen.getByText(/date is required/i)).toBeInTheDocument()
    expect(screen.getByRole('alert')).toBeInTheDocument()
  })

  it('renders disabled state', () => {
    render(<DockedDisabled />)
    expect(screen.getByLabelText(/date/i)).toBeDisabled()
  })

  it('renders all variants', () => {
    const { container } = render(<DockedAllVariants />)
    expect(container.querySelectorAll('button').length).toBeGreaterThan(1)
  })
})
