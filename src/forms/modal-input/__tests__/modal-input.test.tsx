import { render, fireEvent, screen } from '@testing-library/react'
import { composeStories } from '@storybook/react'
import * as stories from '../modal-input.stories'

const { Basic } = composeStories(stories)

describe('ModalInput', () => {
  it('renders as readOnly TextInput and matches snapshot', () => {
    const { asFragment } = render(<Basic />)
    expect(asFragment()).toMatchSnapshot()
  })

  it('opens modal on input click and allows selection', () => {
    render(<Basic />)
    fireEvent.click(screen.getByPlaceholderText('Click to open modal'))

    fireEvent.change(screen.getByLabelText('Pick a value'), {
      target: { value: 'bar' },
    })
    // The onChange handler is internal to the story, so we can assert the value changes
    expect(screen.getByLabelText('Pick a value')).toHaveValue('bar')
  })
})
