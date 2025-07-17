import { render, screen, fireEvent } from '@testing-library/react'
import { composeStories } from '@storybook/react'
import * as stories from '../chip-input.stories'

describe('ChipInput', () => {
  const { Basic, Disabled, Variants } = composeStories(stories)

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
    expect(coralLabel?.className).toMatch(/bg-coral\/10/)
  })

  it('matches snapshot', () => {
    const { asFragment } = render(<Basic />)
    expect(asFragment()).toMatchSnapshot()
  })
})
