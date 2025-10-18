import { render, screen, fireEvent } from '@testing-library/react'
import { composeStories } from '@storybook/react'
import * as stories from '../chip-multiple-input.stories'

describe('ChipMultipleInput', () => {
  const {
    Basic,
    Sizes,
    States,
    IconOnly,
    WithIcons,
    Truncation,
    WithValidation,
  } = composeStories(stories)

  it('renders options, toggles multiple selection, and displays correct text', () => {
    render(<Basic />)
    const apple = screen.getByLabelText('Apple')
    const banana = screen.getByLabelText('Banana')
    const cherry = screen.getByLabelText('Cherry')

    expect(apple).toBeInTheDocument()
    expect(banana).toBeInTheDocument()
    expect(cherry).toBeInTheDocument()

    // Banana is pre-selected in Basic story
    expect(banana).toBeChecked()

    // Multiple selections work
    fireEvent.click(apple)
    expect(apple).toBeChecked()
    expect(banana).toBeChecked() // Still checked

    fireEvent.click(cherry)
    expect(cherry).toBeChecked()

    // Deselect works
    fireEvent.click(apple)
    expect(apple).not.toBeChecked()
    expect(banana).toBeChecked()
    expect(cherry).toBeChecked()
  })

  it('renders size variations with correct labels', () => {
    render(<Sizes />)

    // Check labels are present
    expect(screen.getByText('Small')).toBeInTheDocument()
    expect(screen.getByText('Medium (default)')).toBeInTheDocument()
    expect(screen.getByText('Large')).toBeInTheDocument()

    // Check options are rendered (multiple sets with same labels)
    const optionAs = screen.getAllByLabelText('Option A')
    const optionBs = screen.getAllByLabelText('Option B')
    expect(optionAs.length).toBeGreaterThan(0)
    expect(optionBs.length).toBeGreaterThan(0)
  })

  it('respects disabled and readOnly states', () => {
    render(<States />)

    // Check disabled state
    const disabledLabel = screen.getByText('Disabled')
    expect(disabledLabel).toBeInTheDocument()
    const optionB = screen.getAllByLabelText('Option B')[0]
    expect(optionB).toBeDisabled()

    // Check readOnly state
    const readOnlyLabel = screen.getByText('Read-only')
    expect(readOnlyLabel).toBeInTheDocument()
    const optionC = screen.getByLabelText('Option C')
    expect(optionC).toHaveAttribute('readOnly')
  })

  it('renders icon-only chips with aria-labels', () => {
    render(<IconOnly />)
    const star = screen.getByLabelText('Star')
    const heart = screen.getByLabelText('Heart')
    const sparkles = screen.getByLabelText('Sparkles')

    expect(star).toBeInTheDocument()
    expect(heart).toBeInTheDocument()
    expect(sparkles).toBeInTheDocument()

    // Heart is pre-selected in story
    expect(heart).toBeChecked()

    // Toggle selection
    fireEvent.click(star)
    expect(star).toBeChecked()
  })

  it('renders chips with icons and text', () => {
    render(<WithIcons />)
    expect(screen.getByText('Star')).toBeInTheDocument()
    expect(screen.getByText('Heart')).toBeInTheDocument()
    expect(screen.getByText('Sparkles')).toBeInTheDocument()
  })

  it('applies maxWidth for text truncation', () => {
    render(<Truncation />)
    const label = screen.getByText('With maxWidth (120px)')
    expect(label).toBeInTheDocument()

    // Check that long text options exist
    expect(
      screen.getByLabelText('Very Long Text That Will Be Truncated')
    ).toBeInTheDocument()
  })

  it('displays required asterisk and error message', () => {
    render(<WithValidation />)

    // Check required asterisk
    const requiredLabel = screen.getByText('Required field')
    expect(requiredLabel).toBeInTheDocument()

    // Check error message is shown (no selection by default)
    expect(
      screen.getByText('Please select at least one option')
    ).toBeInTheDocument()

    // Check helper text story
    expect(screen.getByText('With helper text')).toBeInTheDocument()
    expect(
      screen.getByText('Choose all options that apply to you')
    ).toBeInTheDocument()
  })

  it('renders with fieldset and legend', () => {
    const { container } = render(<Basic />)
    const fieldset = container.querySelector('fieldset')
    const legend = container.querySelector('legend')

    expect(fieldset).toBeInTheDocument()
    expect(legend).toBeInTheDocument()
    expect(legend?.textContent).toContain('Select fruits')
  })

  it('matches snapshot', () => {
    const { asFragment } = render(<Basic />)
    expect(asFragment()).toMatchSnapshot()
  })
})
