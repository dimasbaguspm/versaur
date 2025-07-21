import { render, fireEvent } from '@testing-library/react'
import { composeStories } from '@storybook/react'
import * as stories from '../calculator.stories'

describe('Calculator', () => {
  const { Default } = composeStories(stories)

  it('renders correctly (snapshot)', () => {
    const { asFragment } = render(<Default />)
    expect(asFragment()).toMatchSnapshot()
  })

  it('performs basic addition', () => {
    const { getByText, getByLabelText } = render(<Default />)
    fireEvent.click(getByText('1'))
    fireEvent.click(getByText('+'))
    fireEvent.click(getByText('2'))
    fireEvent.click(getByText('='))
    expect(getByLabelText('Calculator input')).toHaveValue('3')
  })

  // No C or ⌫ in keypad layout, so these tests are removed

  it('supports keyboard interaction for numbers and operators', () => {
    const { getByLabelText } = render(<Default />)
    const input = getByLabelText('Calculator input')
    input.focus()
    fireEvent.keyDown(window, { key: '1' })
    fireEvent.keyDown(window, { key: '+' })
    fireEvent.keyDown(window, { key: '2' })
    fireEvent.keyDown(window, { key: '=' })
    expect(input).toHaveValue('3')
  })

  it('disables input and buttons when disabled', () => {
    const { getByText, getByLabelText } = render(<Default disabled />)
    expect(getByLabelText('Calculator input')).toBeDisabled()
    expect(getByText('1')).toBeDisabled()
    expect(getByText('=')).toBeDisabled()
  })
})
