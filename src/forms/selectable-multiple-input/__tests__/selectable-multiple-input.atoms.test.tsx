import { render, fireEvent } from '@testing-library/react'
import { SelectableMultipleInput } from '../selectable-multiple-input'

describe('SelectableMultipleInput (atom)', () => {
  it('renders with children and unchecked', () => {
    const { getByText, getByRole } = render(
      <SelectableMultipleInput value='foo' checked={false} onChange={() => {}}>
        Foo
      </SelectableMultipleInput>
    )
    expect(getByText('Foo')).toBeInTheDocument()
    expect(getByRole('checkbox')).toHaveAttribute('aria-checked', 'false')
  })

  it('renders as checked', () => {
    const { getByRole, getByText } = render(
      <SelectableMultipleInput value='bar' checked={true} onChange={() => {}}>
        Bar
      </SelectableMultipleInput>
    )
    expect(getByRole('checkbox')).toHaveAttribute('aria-checked', 'true')
    expect(getByText('Bar')).toBeInTheDocument()
  })

  it('renders with function-as-children receiving checked state', () => {
    const { getByText, rerender } = render(
      <SelectableMultipleInput value='baz' checked={false} onChange={() => {}}>
        {checked => <span>{checked ? 'Selected' : 'Not selected'}</span>}
      </SelectableMultipleInput>
    )
    expect(getByText('Not selected')).toBeInTheDocument()

    // Re-render with checked state
    rerender(
      <SelectableMultipleInput value='baz' checked={true} onChange={() => {}}>
        {checked => <span>{checked ? 'Selected' : 'Not selected'}</span>}
      </SelectableMultipleInput>
    )
    expect(getByText('Selected')).toBeInTheDocument()
  })

  it('renders with custom checkbox placement', () => {
    const { container } = render(
      <SelectableMultipleInput
        value='top'
        checked={false}
        onChange={() => {}}
        checkboxPlacement='top'
      >
        Top Aligned
      </SelectableMultipleInput>
    )
    const label = container.querySelector('label')
    expect(label).toHaveClass('items-start')
  })

  it('renders with center placement by default', () => {
    const { container } = render(
      <SelectableMultipleInput
        value='center'
        checked={false}
        onChange={() => {}}
      >
        Center Aligned
      </SelectableMultipleInput>
    )
    const label = container.querySelector('label')
    expect(label).toHaveClass('items-center')
  })

  it('renders with bottom placement', () => {
    const { container } = render(
      <SelectableMultipleInput
        value='bottom'
        checked={false}
        onChange={() => {}}
        checkboxPlacement='bottom'
      >
        Bottom Aligned
      </SelectableMultipleInput>
    )
    const label = container.querySelector('label')
    expect(label).toHaveClass('items-end')
  })

  it('hides checkbox when hideCheckbox is true', () => {
    const { container } = render(
      <SelectableMultipleInput
        value='hidden'
        checked={false}
        onChange={() => {}}
        hideCheckbox
      >
        Hidden Checkbox
      </SelectableMultipleInput>
    )
    const checkboxIndicator = container.querySelector(
      'span[aria-hidden="true"]'
    )
    expect(checkboxIndicator).not.toBeInTheDocument()
  })

  it('shows checkbox by default when hideCheckbox is not set', () => {
    const { container } = render(
      <SelectableMultipleInput
        value='visible'
        checked={false}
        onChange={() => {}}
      >
        Visible Checkbox
      </SelectableMultipleInput>
    )
    const checkboxIndicator = container.querySelector(
      'span[aria-hidden="true"]'
    )
    expect(checkboxIndicator).toBeInTheDocument()
  })

  it('renders disabled state with proper attributes', () => {
    const { container } = render(
      <SelectableMultipleInput
        value='disabled'
        checked={false}
        onChange={() => {}}
        disabled
      >
        Disabled
      </SelectableMultipleInput>
    )
    const label = container.querySelector('label')
    const input = container.querySelector('input')

    expect(label).toHaveClass('opacity-50')
    expect(label).toHaveAttribute('tabIndex', '-1')
    expect(input).toBeDisabled()
  })

  it('calls onChange when clicked', () => {
    const handleChange = vi.fn()
    const { getByRole } = render(
      <SelectableMultipleInput
        value='clickable'
        checked={false}
        onChange={handleChange}
      >
        Click Me
      </SelectableMultipleInput>
    )

    const checkbox = getByRole('checkbox')
    fireEvent.click(checkbox)
    expect(handleChange).toHaveBeenCalledTimes(1)
  })

  it('does not call onChange when disabled', () => {
    const handleChange = vi.fn()
    const { getByRole } = render(
      <SelectableMultipleInput
        value='disabled'
        checked={false}
        onChange={handleChange}
        disabled
      >
        Disabled
      </SelectableMultipleInput>
    )

    const checkbox = getByRole('checkbox')
    fireEvent.click(checkbox)
    // Click on disabled element won't trigger change
    expect(handleChange).not.toHaveBeenCalled()
  })

  it('applies custom className to label', () => {
    const { container } = render(
      <SelectableMultipleInput
        value='custom'
        checked={false}
        onChange={() => {}}
        className='custom-class'
      >
        Custom Class
      </SelectableMultipleInput>
    )
    const label = container.querySelector('label')
    expect(label).toHaveClass('custom-class')
  })

  it('uses custom id when provided', () => {
    const { container } = render(
      <SelectableMultipleInput
        value='custom-id'
        checked={false}
        onChange={() => {}}
        id='my-custom-id'
      >
        Custom ID
      </SelectableMultipleInput>
    )
    const input = container.querySelector('input')
    const label = container.querySelector('label')

    expect(input).toHaveAttribute('id', 'my-custom-id')
    expect(label).toHaveAttribute('for', 'my-custom-id')
  })

  it('has proper ARIA attributes', () => {
    const { getByRole } = render(
      <SelectableMultipleInput
        value='aria-test'
        checked={false}
        onChange={() => {}}
      >
        ARIA Test
      </SelectableMultipleInput>
    )

    const checkbox = getByRole('checkbox')
    expect(checkbox).toHaveAttribute('role', 'checkbox')
    expect(checkbox).toHaveAttribute('aria-checked', 'false')
    expect(checkbox).toHaveAttribute('aria-label', 'Select aria-test')
    expect(checkbox).toHaveAttribute('tabIndex', '0')
  })
})
