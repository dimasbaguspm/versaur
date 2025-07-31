import { render } from '@testing-library/react'
import { SelectableMultipleInput } from '../selectable-multiple-input'

describe('SelectableMultipleInput (atom)', () => {
  it('renders with label and unchecked', () => {
    const { getByText, getByRole } = render(
      <SelectableMultipleInput
        value='foo'
        label='Foo'
        checked={false}
        onChange={() => {}}
      />
    )
    expect(getByText('Foo')).toBeInTheDocument()
    expect(getByRole('checkbox')).toHaveAttribute('aria-checked', 'false')
  })

  it('renders as checked', () => {
    const { getByRole } = render(
      <SelectableMultipleInput
        value='bar'
        label='Bar'
        checked={true}
        onChange={() => {}}
      />
    )
    expect(getByRole('checkbox')).toHaveAttribute('aria-checked', 'true')
  })
})
