import { render, screen, fireEvent } from '@testing-library/react'
import { composeStories } from '@storybook/react'
import * as stories from '../chip-input.stories'

describe('ChipInput', () => {
  const { Basic, Disabled, Variants, Shape, Sizes, CheckIcon } =
    composeStories(stories)

  it('renders options, toggles selection, and displays correct text', () => {
    render(<Basic />)
    const apple = screen.getByLabelText('Apple')
    const banana = screen.getByLabelText('Banana')
    const cherry = screen.getByLabelText('Cherry')

    expect(apple).toBeInTheDocument()
    expect(banana).toBeInTheDocument()
    expect(cherry).toBeInTheDocument()

    fireEvent.click(apple)
    expect(apple).toBeChecked()
    fireEvent.click(banana)
    expect(banana).toBeChecked()
    fireEvent.click(apple)
    expect(apple).not.toBeChecked()
  })

  it('renders shape variations and toggles selection', () => {
    render(<Shape />)
    const circleA = screen.getByLabelText('Circle A')
    const circleB = screen.getByLabelText('Circle B')
    const roundedC = screen.getByLabelText('Rounded C')
    const roundedD = screen.getByLabelText('Rounded D')
    expect(circleA).toBeInTheDocument()
    expect(circleB).toBeInTheDocument()
    expect(roundedC).toBeInTheDocument()
    expect(roundedD).toBeInTheDocument()
    fireEvent.click(circleA)
    expect(circleA).toBeChecked()
    fireEvent.click(roundedC)
    expect(roundedC).toBeChecked()
  })

  it('renders size variations and toggles selection', () => {
    render(<Sizes />)
    // There are three groups, each with Small/Medium/Large, so we must use getAllByLabelText
    const smallInputs = screen.getAllByLabelText('Small')
    const mediumInputs = screen.getAllByLabelText('Medium')
    const largeInputs = screen.getAllByLabelText('Large')
    expect(smallInputs.length).toBe(3)
    expect(mediumInputs.length).toBe(3)
    expect(largeInputs.length).toBe(3)
    // Interact with the first group (sm)
    fireEvent.click(smallInputs[0])
    expect(smallInputs[0]).toBeChecked()
    fireEvent.click(mediumInputs[0])
    expect(mediumInputs[0]).toBeChecked()
    fireEvent.click(largeInputs[0])
    expect(largeInputs[0]).toBeChecked()
  })

  it('renders custom and default check icons', () => {
    render(<CheckIcon />)
    // Custom check icon
    const star = screen.getByLabelText('Star')
    const circle = screen.getByLabelText('Circle')
    expect(star).toBeInTheDocument()
    expect(circle).toBeInTheDocument()
    fireEvent.click(star)
    expect(star).toBeChecked()
    // No check icon
    const noCheckA = screen.getByLabelText('No Check A')
    expect(noCheckA).toBeInTheDocument()
    fireEvent.click(noCheckA)
    expect(noCheckA).toBeChecked()
    // Default check icon
    const defaultCheck = screen.getByLabelText('Default Check')
    expect(defaultCheck).toBeInTheDocument()
    fireEvent.click(defaultCheck)
    expect(defaultCheck).toBeChecked()
  })

  it('respects disabled state and applies disabled class', () => {
    render(<Disabled />)
    const apple = screen.getByLabelText('Apple')
    expect(apple).toBeDisabled()
    const label = screen.getByText('Apple').closest('label')
    expect(label?.className).toMatch(/cursor-not-allowed/)
  })

  it('renders all color variants and checks classes', () => {
    render(<Variants />)
    const variantLabels = [
      'Coral',
      'Sage',
      'Mist',
      'Slate',
      'Gray',
      'Success',
      'Info',
      'Warning',
      'Danger',
    ]
    variantLabels.forEach(label => {
      const chip = screen.getByText(label).closest('label')
      expect(chip).toBeInTheDocument()
    })
    // Check selection and color for one variant
    const coralInput = screen.getByLabelText('Coral')
    fireEvent.click(coralInput)
    expect(coralInput).toBeChecked()
    const coralLabel = screen.getByText('Coral').closest('label')
    expect(coralLabel?.className).toMatch('bg-primary-soft')
  })

  it('matches snapshot', () => {
    const { asFragment } = render(<Basic />)
    expect(asFragment()).toMatchSnapshot()
  })
})
