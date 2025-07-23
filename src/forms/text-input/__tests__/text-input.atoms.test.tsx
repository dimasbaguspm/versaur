import { render } from '@testing-library/react'
import { TextInput } from '../text-input'

describe('TextInput atoms', () => {
  it('renders left content', () => {
    const { container } = render(
      <TextInput
        leftContent={<span data-testid='left-content'>left</span>}
        label='label'
      />
    )
    expect(
      container.querySelector('[data-testid="left-content"]')
    ).toBeInTheDocument()
  })

  it('renders right content', () => {
    const { container } = render(
      <TextInput
        label='label'
        rightContent={<span data-testid='right-content'>right</span>}
      />
    )
    expect(
      container.querySelector('[data-testid="right-content"]')
    ).toBeInTheDocument()
  })

  it('renders error message', () => {
    const { getByText } = render(<TextInput error={'Error!'} label='label' />)
    expect(getByText('Error!')).toBeInTheDocument()
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
})
