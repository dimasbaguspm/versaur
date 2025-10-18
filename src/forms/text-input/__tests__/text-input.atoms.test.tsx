import { render } from '@testing-library/react'
import { TextInput } from '../text-input'

describe('TextInput atoms', () => {
  it('renders left content with aria-hidden', () => {
    const { container } = render(
      <TextInput
        leftContent={<span data-testid='left-icon'>left</span>}
        label='label'
      />
    )
    const leftContent = container.querySelector('[data-testid="left-content"]')
    expect(leftContent).toBeInTheDocument()
    expect(leftContent).toHaveAttribute('aria-hidden', 'true')
  })

  it('renders right content with aria-hidden', () => {
    const { container } = render(
      <TextInput
        label='label'
        rightContent={<span data-testid='right-icon'>right</span>}
      />
    )
    const rightContent = container.querySelector(
      '[data-testid="right-content"]'
    )
    expect(rightContent).toBeInTheDocument()
    expect(rightContent).toHaveAttribute('aria-hidden', 'true')
  })

  it('renders error message with proper aria attributes', () => {
    const { getByText, getByLabelText } = render(
      <TextInput error={'Error!'} label='label' />
    )
    const errorMessage = getByText('Error!')
    const input = getByLabelText('label')

    expect(errorMessage).toBeInTheDocument()
    expect(errorMessage).toHaveAttribute('role', 'alert')
    expect(errorMessage).toHaveAttribute('aria-live', 'polite')
    expect(input).toHaveAttribute('aria-invalid', 'true')
  })

  it('renders helper text', () => {
    const { getByText } = render(
      <TextInput helperText='Helper text' label='label' />
    )
    expect(getByText('Helper text')).toBeInTheDocument()
  })

  it('hides helper text when error is present', () => {
    const { getByText, queryByText } = render(
      <TextInput error='Error message' helperText='Helper text' label='label' />
    )
    expect(getByText('Error message')).toBeInTheDocument()
    expect(queryByText('Helper text')).not.toBeInTheDocument()
  })

  it('associates helper text with input via aria-describedby', () => {
    const { getByLabelText, getByText } = render(
      <TextInput helperText='Helper text' label='label' />
    )
    const input = getByLabelText('label')
    const helperText = getByText('Helper text')
    const describedById = input.getAttribute('aria-describedby')

    expect(describedById).toBeTruthy()
    expect(helperText).toHaveAttribute('id', describedById)
  })

  it('associates error message with input via aria-errormessage', () => {
    const { getByLabelText, getByText } = render(
      <TextInput error='Error message' label='label' />
    )
    const input = getByLabelText('label')
    const errorMessage = getByText('Error message')
    const errorMessageId = input.getAttribute('aria-errormessage')

    expect(errorMessageId).toBeTruthy()
    expect(errorMessage).toHaveAttribute('id', errorMessageId)
  })

  it('applies readOnly state styling', () => {
    const { getByLabelText } = render(
      <TextInput label='label' readOnly defaultValue='Read only value' />
    )
    const input = getByLabelText('label')

    expect(input).toHaveAttribute('readOnly')
    expect(input).toHaveClass('border-gray-300', 'bg-gray-50', 'cursor-default')
  })
})
