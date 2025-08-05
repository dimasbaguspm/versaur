import { describe, it, expect } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { composeStories } from '@storybook/react'
import * as stories from '../drawer-input.stories'

const { Basic } = composeStories(stories)

describe('DrawerInput', () => {
  it('renders correctly and matches snapshot', () => {
    const { asFragment } = render(<Basic />)
    expect(asFragment()).toMatchSnapshot()
  })

  it('opens drawer on input click and closes on confirm', () => {
    render(<Basic />)
    const input = screen.getByLabelText('Select value')
    fireEvent.click(input)
    expect(screen.getByRole('dialog')).toBeInTheDocument()
    const confirmBtn = screen.getByRole('button', { name: /confirm/i })
    fireEvent.click(confirmBtn)
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })

  it('calls onChange when typing in TextInput', () => {
    render(<Basic />)
    const input = screen.getByLabelText('Select value')
    fireEvent.click(input)
    const textInput = screen.getByPlaceholderText('Type something...')
    fireEvent.change(textInput, { target: { value: 'hello' } })
    expect(textInput).toHaveValue('hello')
  })
})
