import { render, screen, fireEvent } from '@testing-library/react'
import { composeStories } from '@storybook/react'
import * as stories from '../chip-single-input.stories'

describe('ChipSingleInput', () => {
  const {
    Basic,
    Sizes,
    States,
    IconOnly,
    WithIcons,
    Truncation,
    WithValidation,
  } = composeStories(stories)

  it('renders options, toggles selection, and displays correct text', () => {
    render(<Basic />)
    const apple = screen.getByLabelText('Apple')
    const banana = screen.getByLabelText('Banana')
    const cherry = screen.getByLabelText('Cherry')

    expect(apple).toBeInTheDocument()
    expect(banana).toBeInTheDocument()
    expect(cherry).toBeInTheDocument()

    // Banana should be checked initially
    expect(banana).toBeChecked()

    fireEvent.click(apple)
    expect(apple).toBeChecked()
    expect(banana).not.toBeChecked()

    fireEvent.click(cherry)
    expect(cherry).toBeChecked()
    expect(apple).not.toBeChecked()
  })

  it('renders size variations', () => {
    render(<Sizes />)
    const optionA = screen.getByLabelText('Option A')
    const optionC = screen.getByLabelText('Option C')
    const optionE = screen.getByLabelText('Option E')

    expect(optionA).toBeInTheDocument()
    expect(optionC).toBeInTheDocument()
    expect(optionE).toBeInTheDocument()

    fireEvent.click(optionA)
    expect(optionA).toBeChecked()
  })

  it('respects disabled and readOnly states', () => {
    render(<States />)

    // Test disabled state
    const optionB = screen.getByLabelText('Option B')
    expect(optionB).toBeDisabled()
    expect(optionB).toBeChecked() // Initially checked
    const disabledLabel = screen.getByText('Option B').closest('label')
    expect(disabledLabel?.className).toMatch(/cursor-not-allowed/)

    // Test readOnly state
    const optionD = screen.getByLabelText('Option D')
    expect(optionD).toHaveAttribute('readOnly')
    expect(optionD).toBeChecked() // Initially checked
    const readOnlyLabel = screen.getByText('Option D').closest('label')
    expect(readOnlyLabel?.className).toMatch(/cursor-default/)
  })

  it('renders icon-only chips', () => {
    render(<IconOnly />)
    const star = screen.getByLabelText('Star')
    const heart = screen.getByLabelText('Heart')
    const sparkles = screen.getByLabelText('Sparkles')

    expect(star).toBeInTheDocument()
    expect(heart).toBeInTheDocument()
    expect(sparkles).toBeInTheDocument()
    expect(heart).toBeChecked() // Initially checked

    fireEvent.click(star)
    expect(star).toBeChecked()
    expect(heart).not.toBeChecked()
  })

  it('renders chips with icons and text', () => {
    render(<WithIcons />)
    const star = screen.getByText('Star')
    const heart = screen.getByText('Heart')
    const sparkles = screen.getByText('Sparkles')

    expect(star).toBeInTheDocument()
    expect(heart).toBeInTheDocument()
    expect(sparkles).toBeInTheDocument()
  })

  it('renders truncation with maxWidth', () => {
    render(<Truncation />)
    const shortChip = screen.getByText('Short')
    const longChip = screen.getByText('Very Long Text That Will Be Truncated')

    expect(shortChip).toBeInTheDocument()
    expect(longChip).toBeInTheDocument()

    const longLabel = longChip.closest('label')
    expect(longLabel?.style.maxWidth).toBe('120px')
  })

  it('displays required asterisk, error and helper text', () => {
    render(<WithValidation />)

    // Check for required asterisk
    const asterisk = screen.getByText('*')
    expect(asterisk).toBeInTheDocument()
    expect(asterisk.className).toMatch(/text-danger/)

    // Check for error message
    const errorMessage = screen.getByText('Please select an option')
    expect(errorMessage).toBeInTheDocument()
    expect(errorMessage).toHaveAttribute('role', 'alert')

    // Check for helper text
    const helperText = screen.getByText(
      'Choose the option that best fits your needs'
    )
    expect(helperText).toBeInTheDocument()
  })

  it('matches snapshot', () => {
    const { asFragment } = render(<Basic />)
    expect(asFragment()).toMatchSnapshot()
  })
})
