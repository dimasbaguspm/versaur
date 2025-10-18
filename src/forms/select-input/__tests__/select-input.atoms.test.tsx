import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/react'
import { SelectOption, SelectOptionGroup } from '../select-input.atoms'

describe('SelectOption', () => {
  it('renders option with value and children', () => {
    const { container } = render(
      <select>
        <SelectOption value='test'>Test Option</SelectOption>
      </select>
    )

    const option = container.querySelector('option')
    expect(option).toBeInTheDocument()
    expect(option).toHaveAttribute('value', 'test')
    expect(option).toHaveTextContent('Test Option')
  })

  it('matches snapshot', () => {
    const { asFragment } = render(
      <select>
        <SelectOption value='test'>Test Option</SelectOption>
      </select>
    )
    expect(asFragment()).toMatchSnapshot()
  })

  it('forwards additional props to option element', () => {
    const { container } = render(
      <select>
        <SelectOption value='test' disabled>
          Test Option
        </SelectOption>
      </select>
    )

    const option = container.querySelector('option')
    expect(option).toBeDisabled()
  })
})

describe('SelectOptionGroup', () => {
  it('renders optgroup with label and children', () => {
    const { container } = render(
      <select>
        <SelectOptionGroup label='Test Group'>
          <SelectOption value='option1'>Option 1</SelectOption>
          <SelectOption value='option2'>Option 2</SelectOption>
        </SelectOptionGroup>
      </select>
    )

    const optgroup = container.querySelector('optgroup')
    expect(optgroup).toBeInTheDocument()
    expect(optgroup).toHaveAttribute('label', 'Test Group')
    expect(optgroup?.children).toHaveLength(2)
  })

  it('matches snapshot', () => {
    const { asFragment } = render(
      <select>
        <SelectOptionGroup label='Test Group'>
          <SelectOption value='option1'>Option 1</SelectOption>
          <SelectOption value='option2'>Option 2</SelectOption>
        </SelectOptionGroup>
      </select>
    )
    expect(asFragment()).toMatchSnapshot()
  })

  it('forwards additional props to optgroup element', () => {
    const { container } = render(
      <select>
        <SelectOptionGroup label='Test Group' disabled>
          <SelectOption value='option1'>Option 1</SelectOption>
        </SelectOptionGroup>
      </select>
    )

    const optgroup = container.querySelector('optgroup')
    expect(optgroup).toBeDisabled()
  })
})
