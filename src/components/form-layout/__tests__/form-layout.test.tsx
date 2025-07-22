import { render } from '@testing-library/react'
import { FormLayout } from '../form-layout'
import { TextInput } from '@/components/text-input'
import { SelectInput } from '@/components/select-input'
import { CheckboxInput } from '@/components/checkbox-input'
import { RadioInput } from '@/components/radio-input'

describe('FormLayout', () => {
  it('renders a 12-column grid and columns with correct span', () => {
    const { asFragment } = render(
      <FormLayout>
        <FormLayout.Column span={3}>
          <TextInput label='A' />
        </FormLayout.Column>
        <FormLayout.Column span={9}>
          <TextInput label='B' />
        </FormLayout.Column>
      </FormLayout>
    )
    expect(asFragment()).toMatchSnapshot()
  })

  it('renders with SelectInput, CheckboxInput, and RadioInput', () => {
    const { getByLabelText, getByText } = render(
      <FormLayout>
        <FormLayout.Column span={6}>
          <SelectInput label='Country'>
            <option value='id'>Indonesia</option>
            <option value='us'>United States</option>
          </SelectInput>
        </FormLayout.Column>
        <FormLayout.Column span={3}>
          <CheckboxInput label='Prefs'>
            <CheckboxInput.Option value='a'>A</CheckboxInput.Option>
          </CheckboxInput>
        </FormLayout.Column>
        <FormLayout.Column span={3}>
          <RadioInput label='Gender' name='gender'>
            <RadioInput.Option value='m'>M</RadioInput.Option>
          </RadioInput>
        </FormLayout.Column>
      </FormLayout>
    )
    expect(getByLabelText('Country')).toBeInTheDocument()
    expect(getByText('A')).toBeInTheDocument()
    expect(getByText('M')).toBeInTheDocument()
  })
})
