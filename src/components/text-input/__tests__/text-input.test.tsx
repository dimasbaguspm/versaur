import { render, screen } from '@testing-library/react'
import { composeStories } from '@storybook/react'
import * as stories from '../text-input.stories'

describe('TextInput', () => {
  const {
    Default,
    Primary,
    Warning,
    WithLeftContent,
    Outline,
    Error,
    Disabled,
    WithLabelAndCustomId,
    LabelWithError,
  } = composeStories(stories)

  it('renders default input', () => {
    render(<Default />)
    expect(screen.getByPlaceholderText('Enter your name')).toBeInTheDocument()
  })

  it('renders with primary variant', () => {
    render(<Primary />)
    expect(
      screen.getByPlaceholderText('Primary coral input')
    ).toBeInTheDocument()
  })

  it('renders with warning variant', () => {
    render(<Warning />)
    expect(screen.getByPlaceholderText('Warning input')).toBeInTheDocument()
  })

  it('renders with left content', () => {
    render(<WithLeftContent />)
    expect(screen.getByPlaceholderText('Username')).toBeInTheDocument()
    expect(screen.getByTestId('left-content')).toBeDefined()
  })

  it('renders outline variant', () => {
    render(<Outline />)
    expect(
      screen.getByPlaceholderText('Info outline input')
    ).toBeInTheDocument()
  })

  it('shows error message', () => {
    render(<Error />)
    expect(
      screen.getByText(
        'This field is required and must be a valid email address'
      )
    ).toBeInTheDocument()
  })

  it('renders disabled state', () => {
    render(<Disabled />)
    const input = screen.getByPlaceholderText('Disabled input')
    expect(input).toBeDisabled()
  })

  it('renders with label', () => {
    render(<Default />)
    expect(screen.getByLabelText('Name')).toBeInTheDocument()
    expect(screen.getByText('Name')).toBeInTheDocument()
  })

  it('associates label with input using custom id', () => {
    render(<WithLabelAndCustomId />)
    const label = screen.getByText('Custom ID Input')
    const input = screen.getByLabelText('Custom ID Input')
    expect(label).toHaveAttribute('for', 'custom-input-id')
    expect(input).toHaveAttribute('id', 'custom-input-id')
  })

  it('generates automatic id when none provided', () => {
    render(<Default />)
    const input = screen.getByLabelText('Name')
    const label = screen.getByText('Name')
    const inputId = input.getAttribute('id')
    expect(inputId).toBeTruthy()
    expect(label).toHaveAttribute('for', inputId)
  })

  it('shows error message with label', () => {
    render(<LabelWithError />)
    expect(screen.getByText('Required Field')).toBeInTheDocument()
    expect(
      screen.getByText('This field is required and cannot be empty')
    ).toBeInTheDocument()
    expect(screen.getByLabelText('Required Field')).toBeInTheDocument()
  })
})
