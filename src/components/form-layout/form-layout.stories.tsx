/**
 * FormLayout stories for Storybook
 *
 * Demonstrates 12-column grid, column spanning, and responsive layout for forms
 * Follows Versaur's design system and code conventions
 */
import type { Meta, StoryObj } from '@storybook/react'
import { FormLayout } from './form-layout'

import { TextInput } from '@/components/text-input'
import { SelectInput } from '@/components/select-input'
import { CheckboxInput } from '@/components/checkbox-input'
import { RadioInput } from '@/components/radio-input'

const meta: Meta<typeof FormLayout> = {
  title: 'Layout/FormLayout',
  component: FormLayout,
}
export default meta

type Story = StoryObj<typeof FormLayout>

export const Basic: Story = {
  render: () => (
    <FormLayout>
      <FormLayout.Column span={6}>
        <TextInput label='First Name' placeholder='First name' />
      </FormLayout.Column>
      <FormLayout.Column span={6}>
        <TextInput label='Last Name' placeholder='Last name' />
      </FormLayout.Column>
    </FormLayout>
  ),
}

export const CustomSpans: Story = {
  render: () => (
    <FormLayout>
      <FormLayout.Column span={3}>
        <SelectInput label='Country' defaultValue=''>
          <option value='' disabled>
            Select country
          </option>
          <option value='id'>Indonesia</option>
          <option value='us'>United States</option>
        </SelectInput>
      </FormLayout.Column>
      <FormLayout.Column span={9}>
        <TextInput label='Address' placeholder='Street address' />
      </FormLayout.Column>
    </FormLayout>
  ),
}

export const WithCheckboxRadio: Story = {
  render: () => (
    <FormLayout>
      <FormLayout.Column span={6}>
        <CheckboxInput label='Preferences'>
          <CheckboxInput.Option value='email'>Email</CheckboxInput.Option>
          <CheckboxInput.Option value='sms'>SMS</CheckboxInput.Option>
        </CheckboxInput>
      </FormLayout.Column>
      <FormLayout.Column span={6}>
        <RadioInput label='Gender' name='gender'>
          <RadioInput.Option value='male'>Male</RadioInput.Option>
          <RadioInput.Option value='female'>Female</RadioInput.Option>
        </RadioInput>
      </FormLayout.Column>
    </FormLayout>
  ),
}

export const DefaultSpan: Story = {
  render: () => (
    <FormLayout>
      <FormLayout.Column>
        <TextInput label='Email' placeholder='Default span (4)' />
      </FormLayout.Column>
      <FormLayout.Column>
        <TextInput label='Phone' placeholder='Default span (4)' />
      </FormLayout.Column>
      <FormLayout.Column>
        <TextInput label='City' placeholder='Default span (4)' />
      </FormLayout.Column>
    </FormLayout>
  ),
}
