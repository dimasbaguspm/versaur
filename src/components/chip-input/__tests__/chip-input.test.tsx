import { render, screen, fireEvent } from '@testing-library/react'
import { composeStories } from '@storybook/react'
import * as stories from '../chip-input.stories'

describe('ChipInput', () => {
  const { Basic, Disabled, Variants, SemanticVariants, MixedVariants } =
    composeStories(stories)

  it('renders options, toggles selection, and displays correct text', () => {
    render(<Basic />)
    const apple = screen.getByLabelText('Apple')
    const banana = screen.getByLabelText('Banana')
    const cherry = screen.getByLabelText('Cherry')
    expect(apple).toBeInTheDocument()
    expect(banana).toBeInTheDocument()
    expect(cherry).toBeInTheDocument()
    expect(screen.getByText('Apple')).toBeInTheDocument()
    fireEvent.click(apple)
    expect(apple).toBeChecked()
    const appleLabel = screen.getByText('Apple').closest('label')
    expect(appleLabel?.className).toMatch(/ring-2/)
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

  it('supports variants and sizes, applies correct classes', () => {
    render(<Variants />)
    const red = screen.getByLabelText('Red')
    expect(red).toBeInTheDocument()
    const label = screen.getByText('Red').closest('label')
    expect(label?.className).toMatch(/bg-sage\/10/)
    expect(label?.textContent).toBe('Red')
  })

  it('renders semantic variants, toggles selection, and checks classes', () => {
    render(<SemanticVariants />)
    const success = screen.getByLabelText('Success')
    const info = screen.getByLabelText('Info')
    const warning = screen.getByLabelText('Warning')
    const danger = screen.getByLabelText('Danger')
    expect(success).toBeInTheDocument()
    expect(info).toBeInTheDocument()
    expect(warning).toBeInTheDocument()
    expect(danger).toBeInTheDocument()
    fireEvent.click(success)
    expect(success).toBeChecked()
    const successLabel = screen.getByText('Success').closest('label')
    expect(successLabel?.className).toMatch(/bg-success\/10/)
    fireEvent.click(info)
    expect(info).toBeChecked()
    const infoLabel = screen.getByText('Info').closest('label')
    expect(infoLabel?.className).toMatch(/bg-info\/10/)
  })

  it('renders mixed variants and checks text and classes', () => {
    render(<MixedVariants />)
    const coral = screen.getByLabelText('Coral')
    const sage = screen.getByLabelText('Sage')
    const mist = screen.getByLabelText('Mist')
    const slate = screen.getByLabelText('Slate')
    const gray = screen.getByLabelText('Gray')
    expect(coral).toBeInTheDocument()
    expect(sage).toBeInTheDocument()
    expect(mist).toBeInTheDocument()
    expect(slate).toBeInTheDocument()
    expect(gray).toBeInTheDocument()
    fireEvent.click(coral)
    expect(coral).toBeChecked()
    const coralLabel = screen.getByText('Coral').closest('label')
    expect(coralLabel?.textContent).toBe('Coral')
    expect(coralLabel?.className).toMatch(/bg-coral\/10/)
  })
})
