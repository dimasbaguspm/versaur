import { render } from '@testing-library/react'
import { composeStories } from '@storybook/react'
import * as stories from '../email-input.stories'

describe('EmailInput', () => {
  const { Basic, WithHelperText, ErrorState } = composeStories(stories)

  it('renders correctly (snapshot)', () => {
    const { asFragment } = render(<Basic />)
    expect(asFragment()).toMatchSnapshot()
  })

  it('renders with helper text', () => {
    const { getByText } = render(<WithHelperText />)
    expect(getByText('We will never share your email.')).toBeInTheDocument()
  })

  it('shows error state', () => {
    const { getByText } = render(<ErrorState />)
    expect(getByText('Invalid email address')).toBeInTheDocument()
  })

  it('uses type="email" and proper attributes', () => {
    const { getByLabelText } = render(<Basic />)
    const input = getByLabelText('Email') as HTMLInputElement
    expect(input.type).toBe('email')
    expect(input.autocomplete).toBe('email')
    expect(input.getAttribute('inputmode')).toBe('email')
  })
})
