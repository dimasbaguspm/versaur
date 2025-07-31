import { composeStories } from '@storybook/react'
import * as stories from '../selectable-single-input.stories'
import { render, screen, fireEvent } from '@testing-library/react'

describe('SelectableSingleInput', () => {
  const { Basic, Disabled } = composeStories(stories)

  it('renders all options and allows selection', () => {
    const { getByLabelText, asFragment } = render(<Basic />)
    // Snapshot for html output
    expect(asFragment()).toMatchSnapshot()

    // All options should be rendered
    expect(getByLabelText('Select option1')).toBeInTheDocument()
    expect(getByLabelText('Select option2')).toBeInTheDocument()
    expect(getByLabelText('Select option3')).toBeInTheDocument()

    // Option 1 should be checked by default
    const option1 = getByLabelText('Select option1') as HTMLLabelElement
    expect(option1.getAttribute('aria-checked')).toBe('true')

    // Simulate selecting option 2
    const option2 = getByLabelText('Select option2') as HTMLLabelElement
    fireEvent.click(option2)
    // After click, option2 should be checked
    expect(option2.getAttribute('aria-checked')).toBe('true')
  })

  it('renders disabled option', () => {
    render(<Disabled />)
    const disabledOption = screen.getByLabelText('Select disabled')
    expect(disabledOption).toHaveAttribute('aria-checked', 'false')
    expect(disabledOption).toHaveClass('opacity-50')
    expect(disabledOption).toHaveAttribute('tabindex', '-1')
  })
})
