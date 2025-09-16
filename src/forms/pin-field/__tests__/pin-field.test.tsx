import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { composeStories } from '@storybook/react'
import * as stories from '../pin-field.stories'

describe('PinField', () => {
  const { Default, WithError, Disabled, Required, Secure } =
    composeStories(stories)

  it('renders default pin field', () => {
    render(<Default />)
    expect(screen.getByText('Enter PIN')).toBeInTheDocument()
    expect(screen.getByText('Enter your 6-digit PIN code')).toBeInTheDocument()

    // Should have 6 input fields
    const inputs = screen.getAllByTestId(/pin-input-/)
    expect(inputs).toHaveLength(6)
  })

  it('renders with error state', () => {
    render(<WithError />)
    expect(
      screen.getByText('Invalid PIN. Please try again.')
    ).toBeInTheDocument()
    expect(screen.getByRole('alert')).toBeInTheDocument()
  })

  it('renders disabled state', () => {
    render(<Disabled />)
    const inputs = screen.getAllByTestId(/pin-input-/)
    inputs.forEach(input => {
      expect(input).toBeDisabled()
    })
  })

  it('renders required field with asterisk', () => {
    render(<Required />)
    expect(screen.getByText('*')).toBeInTheDocument()
  })

  it('accepts only numeric input', async () => {
    const user = userEvent.setup()
    render(<Default />)

    const firstInput = screen.getByTestId('pin-input-0')

    // Should accept numbers
    await user.type(firstInput, '5')
    expect(firstInput).toHaveValue('5')

    // Should reject letters
    await user.clear(firstInput)
    await user.type(firstInput, 'a')
    expect(firstInput).toHaveValue('')
  })

  it('auto-focuses next input on digit entry', async () => {
    const user = userEvent.setup()
    render(<Default />)

    const firstInput = screen.getByTestId('pin-input-0')
    const secondInput = screen.getByTestId('pin-input-1')

    await user.type(firstInput, '1')
    expect(document.activeElement).toBe(secondInput)
  })

  it('handles backspace navigation', async () => {
    const user = userEvent.setup()
    render(<Default />)

    const firstInput = screen.getByTestId('pin-input-0')
    const secondInput = screen.getByTestId('pin-input-1')

    // Type a digit to move to second input
    await user.type(firstInput, '1')
    expect(document.activeElement).toBe(secondInput)

    // Backspace should move back to first input
    await user.keyboard('{Backspace}')
    expect(document.activeElement).toBe(firstInput)
  })

  it('handles arrow key navigation', async () => {
    const user = userEvent.setup()
    render(<Default />)

    const firstInput = screen.getByTestId('pin-input-0')
    const secondInput = screen.getByTestId('pin-input-1')

    firstInput.focus()

    // Arrow right should move to next input
    await user.keyboard('{ArrowRight}')
    expect(document.activeElement).toBe(secondInput)

    // Arrow left should move back
    await user.keyboard('{ArrowLeft}')
    expect(document.activeElement).toBe(firstInput)
  })

  it('handles paste operation', async () => {
    const user = userEvent.setup()
    render(<Default />)

    const firstInput = screen.getByTestId('pin-input-0')

    // Paste a 6-digit PIN
    await user.click(firstInput)
    await user.paste('123456')

    // All inputs should be filled
    expect(screen.getByTestId('pin-input-0')).toHaveValue('1')
    expect(screen.getByTestId('pin-input-1')).toHaveValue('2')
    expect(screen.getByTestId('pin-input-2')).toHaveValue('3')
    expect(screen.getByTestId('pin-input-3')).toHaveValue('4')
    expect(screen.getByTestId('pin-input-4')).toHaveValue('5')
    expect(screen.getByTestId('pin-input-5')).toHaveValue('6')
  })

  it('limits paste to 6 digits', async () => {
    const user = userEvent.setup()
    render(<Default />)

    const firstInput = screen.getByTestId('pin-input-0')

    // Paste more than 6 digits
    await user.click(firstInput)
    await user.paste('12345678901')

    // Only first 6 digits should be used
    expect(screen.getByTestId('pin-input-0')).toHaveValue('1')
    expect(screen.getByTestId('pin-input-1')).toHaveValue('2')
    expect(screen.getByTestId('pin-input-2')).toHaveValue('3')
    expect(screen.getByTestId('pin-input-3')).toHaveValue('4')
    expect(screen.getByTestId('pin-input-4')).toHaveValue('5')
    expect(screen.getByTestId('pin-input-5')).toHaveValue('6')
  })

  it('filters non-numeric characters from paste', async () => {
    const user = userEvent.setup()
    render(<Default />)

    const firstInput = screen.getByTestId('pin-input-0')

    // Paste mixed content
    await user.click(firstInput)
    await user.paste('1a2b3c')

    // Only numeric characters should be used
    expect(screen.getByTestId('pin-input-0')).toHaveValue('1')
    expect(screen.getByTestId('pin-input-1')).toHaveValue('2')
    expect(screen.getByTestId('pin-input-2')).toHaveValue('3')
    expect(screen.getByTestId('pin-input-3')).toHaveValue('')
    expect(screen.getByTestId('pin-input-4')).toHaveValue('')
    expect(screen.getByTestId('pin-input-5')).toHaveValue('')
  })

  it('calls onChange callback', async () => {
    const handleChange = vi.fn()
    const user = userEvent.setup()

    render(<Default onChange={handleChange} />)

    const firstInput = screen.getByTestId('pin-input-0')
    await user.type(firstInput, '1')

    expect(handleChange).toHaveBeenCalledWith('1')
  })

  it('calls onComplete callback when all 6 digits are entered', async () => {
    const handleComplete = vi.fn()
    const user = userEvent.setup()

    render(<Default onComplete={handleComplete} />)

    // Type 6 digits
    for (let i = 0; i < 6; i++) {
      const input = screen.getByTestId(`pin-input-${i}`)
      await user.type(input, (i + 1).toString())
    }

    expect(handleComplete).toHaveBeenCalledWith('123456')
  })

  it('renders secure mode with dots', () => {
    render(<Secure />)

    // In secure mode, we can't easily test the visual representation
    // but we can verify the input type is password
    const inputs = screen.getAllByTestId(/pin-input-/)
    inputs.forEach(input => {
      expect(input).toHaveAttribute('type', 'password')
    })
  })

  it('has proper accessibility attributes', () => {
    render(<Default />)

    // Should have group role
    expect(screen.getByRole('group')).toBeInTheDocument()

    // Each input should have proper aria attributes
    const inputs = screen.getAllByTestId(/pin-input-/)
    inputs.forEach(input => {
      expect(input).toHaveAttribute('aria-invalid', 'false')
      expect(input).toHaveAttribute('inputmode', 'numeric')
      expect(input).toHaveAttribute('pattern', '[0-9]*')
    })
  })

  it('matches snapshot', () => {
    const { asFragment } = render(<Default />)
    expect(asFragment()).toMatchSnapshot()
  })
})
