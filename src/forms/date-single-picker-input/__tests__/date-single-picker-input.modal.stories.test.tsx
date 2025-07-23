import { render, screen } from '@testing-library/react'
import * as stories from '../date-single-picker-input.modal.stories'
import { composeStories } from '@storybook/react'

describe('DateSinglePickerInput Modal Stories', () => {
  const {
    ModalDefault,
    ModalWithLeftIcon,
    ModalErrorState,
    ModalDisabled,
    ModalAllVariants,
  } = composeStories(stories)

  it('renders default modal story and matches snapshot', () => {
    const { asFragment } = render(<ModalDefault />)
    expect(asFragment()).toMatchSnapshot()
    expect(
      screen.getByRole('button', { name: /date of birth/i })
    ).toBeInTheDocument()
  })

  it('renders with left icon', () => {
    render(<ModalWithLeftIcon />)
    expect(screen.getByRole('button', { name: /date/i })).toBeInTheDocument()
  })

  it('shows error state', () => {
    render(<ModalErrorState />)
    expect(screen.getByText(/date is required/i)).toBeInTheDocument()
    expect(screen.getByRole('alert')).toBeInTheDocument()
  })

  it('renders disabled state', () => {
    render(<ModalDisabled />)
    const button = screen.getByRole('button', { name: /date/i })
    expect(button).toBeDisabled()
  })

  it('renders all variants', () => {
    const { container } = render(<ModalAllVariants />)
    expect(container.querySelectorAll('button').length).toBeGreaterThan(1)
  })
})
