import { render, fireEvent } from '@testing-library/react'
import { composeStories } from '@storybook/react'
import * as stories from '../switch-input.stories'

describe('SwitchInput', () => {
  const { Default, Disabled, Required, NoLabel, InteractiveStates } =
    composeStories(stories)

  it('renders correctly (snapshot)', () => {
    const { asFragment } = render(<Default />)
    expect(asFragment()).toMatchSnapshot()
  })

  it('toggles checked state (controlled)', () => {
    const { getByLabelText } = render(<Default />)
    const input = getByLabelText('Enable notifications') as HTMLInputElement
    expect(input.checked).toBe(false)
    fireEvent.click(input)
    expect(input.checked).toBe(true)
  })

  it('has role="switch" and aria-checked', () => {
    const { getByRole } = render(<Default />)
    const switchInput = getByRole('switch')
    expect(switchInput).toBeInTheDocument()
    expect(switchInput).toHaveAttribute('aria-checked', 'false')
  })

  it('disables input when disabled', () => {
    const { getByLabelText } = render(<Disabled />)
    const input = getByLabelText('Disabled switch') as HTMLInputElement
    expect(input).toBeDisabled()
  })

  it('shows required asterisk when required', () => {
    const { getByText } = render(<Required />)
    const asterisk = getByText('*')
    expect(asterisk).toBeInTheDocument()
    expect(asterisk).toHaveAttribute('aria-label', 'required')
  })

  it('renders without label using aria-label', () => {
    const { getByLabelText } = render(<NoLabel />)
    const input = getByLabelText('Toggle setting') as HTMLInputElement
    expect(input).toBeInTheDocument()
    expect(input.checked).toBe(false)
    fireEvent.click(input)
    expect(input.checked).toBe(true)
  })

  it('renders multiple switches with interactive states', () => {
    const { getByLabelText } = render(<InteractiveStates />)
    const notifications = getByLabelText('Push notifications')
    const darkMode = getByLabelText('Dark mode')
    const marketing = getByLabelText('Marketing emails')

    expect(notifications).toBeInTheDocument()
    expect(darkMode).toBeInTheDocument()
    expect(marketing).toBeInTheDocument()
  })
})
