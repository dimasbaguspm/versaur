import { render, fireEvent } from '@testing-library/react'
import { composeStories } from '@storybook/react'
import * as stories from '../switch-input.stories'

describe('SwitchInput', () => {
  const { Default, Disabled, NoLabel, ColorVariations } =
    composeStories(stories)

  it('renders correctly (snapshot)', () => {
    const { asFragment } = render(<Default />)
    expect(asFragment()).toMatchSnapshot()
  })

  it('toggles checked state (uncontrolled)', () => {
    const { getByLabelText } = render(<Default />)
    const input = getByLabelText('Enable notifications') as HTMLInputElement
    expect(input.checked).toBe(false)
    fireEvent.click(input)
    expect(input.checked).toBe(true)
  })

  it('disables input when disabled', () => {
    const { getByLabelText } = render(<Disabled />)
    const input = getByLabelText('Disabled') as HTMLInputElement
    expect(input).toBeDisabled()
  })

  it('renders without label and toggles', () => {
    const { container } = render(<NoLabel />)
    const input = container.querySelector(
      'input[type="checkbox"]'
    ) as HTMLInputElement
    expect(input).toBeInTheDocument()
    expect(input.checked).toBe(false)
    fireEvent.click(input)
    expect(input.checked).toBe(true)
  })

  it('renders all color variations', () => {
    const { getByLabelText } = render(<ColorVariations />)
    const colors = [
      'Primary',
      'Secondary',
      'Tertiary',
      'Ghost',
      'Neutral',
      'Success',
      'Info',
      'Warning',
      'Danger',
    ]
    colors.forEach(label => {
      const input = getByLabelText(label)
      expect(input).toBeInTheDocument()
    })
  })
})
