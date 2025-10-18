/**
 * SelectInput stories for Storybook
 *
 * Demonstrates core functionality: basic select, helper text, error states, and disabled/read-only states
 * A simple select dropdown component that aligns with native HTML behavior
 */
import type { Meta, StoryObj } from '@storybook/react'
import { SelectInput } from './select-input'

const meta: Meta<typeof SelectInput> = {
  title: 'Forms/SelectInput',
  component: SelectInput,
  tags: ['autodocs'],
}
export default meta

type Story = StoryObj<typeof SelectInput>

/**
 * Default select input with label and placeholder using SelectInput.Option compound pattern
 */
export const Default: Story = {
  args: {
    label: 'Country',
    placeholder: 'Select a country',
    children: (
      <>
        <SelectInput.Option value='us'>United States</SelectInput.Option>
        <SelectInput.Option value='ca'>Canada</SelectInput.Option>
        <SelectInput.Option value='uk'>United Kingdom</SelectInput.Option>
        <SelectInput.Option value='de'>Germany</SelectInput.Option>
        <SelectInput.Option value='fr'>France</SelectInput.Option>
      </>
    ),
  },
}

/**
 * Select input with helper text below for additional guidance
 */
export const WithHelperText: Story = {
  args: {
    label: 'Department',
    placeholder: 'Choose department...',
    helperText: 'Select your primary department',
    children: (
      <>
        <SelectInput.Option value='engineering'>Engineering</SelectInput.Option>
        <SelectInput.Option value='design'>Design</SelectInput.Option>
        <SelectInput.Option value='marketing'>Marketing</SelectInput.Option>
        <SelectInput.Option value='sales'>Sales</SelectInput.Option>
        <SelectInput.Option value='support'>Support</SelectInput.Option>
      </>
    ),
  },
}

/**
 * Select input in error state with validation message
 */
export const WithError: Story = {
  args: {
    label: 'Plan',
    placeholder: 'Choose a plan...',
    error: 'Please select a plan to continue',
    children: (
      <>
        <SelectInput.Option value='free'>Free Plan</SelectInput.Option>
        <SelectInput.Option value='basic'>
          Basic Plan - $9/month
        </SelectInput.Option>
        <SelectInput.Option value='pro'>
          Pro Plan - $19/month
        </SelectInput.Option>
        <SelectInput.Option value='enterprise'>
          Enterprise Plan - $99/month
        </SelectInput.Option>
      </>
    ),
  },
}

/**
 * Required field with asterisk indicator
 */
export const Required: Story = {
  args: {
    label: 'Experience Level',
    placeholder: 'Select experience...',
    required: true,
    helperText: 'This field is required',
    children: (
      <>
        <SelectInput.Option value='junior'>
          Junior (0-2 years)
        </SelectInput.Option>
        <SelectInput.Option value='mid'>
          Mid-level (2-5 years)
        </SelectInput.Option>
        <SelectInput.Option value='senior'>
          Senior (5-10 years)
        </SelectInput.Option>
        <SelectInput.Option value='lead'>Lead (10+ years)</SelectInput.Option>
      </>
    ),
  },
}

/**
 * Disabled select input that cannot be interacted with
 */
export const Disabled: Story = {
  args: {
    label: 'Unavailable Options',
    placeholder: 'Options not available',
    disabled: true,
    helperText: 'This selection is currently disabled',
    children: (
      <>
        <SelectInput.Option value='option1'>Option 1</SelectInput.Option>
        <SelectInput.Option value='option2'>Option 2</SelectInput.Option>
        <SelectInput.Option value='option3'>Option 3</SelectInput.Option>
      </>
    ),
  },
}

/**
 * Read-only select input that displays data but cannot be modified
 */
export const ReadOnly: Story = {
  args: {
    label: 'Account Type',
    readOnly: true,
    defaultValue: 'premium',
    helperText: 'This field is read-only and displays reference information',
    children: (
      <>
        <SelectInput.Option value='free'>Free</SelectInput.Option>
        <SelectInput.Option value='basic'>Basic</SelectInput.Option>
        <SelectInput.Option value='premium'>Premium</SelectInput.Option>
        <SelectInput.Option value='enterprise'>Enterprise</SelectInput.Option>
      </>
    ),
  },
}

/**
 * Select input with grouped options using SelectInput.OptionGroup for better organization
 */
export const WithOptionGroups: Story = {
  args: {
    label: 'Vehicle',
    placeholder: 'Choose your vehicle...',
    helperText: 'Options are grouped by category',
    children: (
      <>
        <SelectInput.OptionGroup label='Cars'>
          <SelectInput.Option value='sedan'>Sedan</SelectInput.Option>
          <SelectInput.Option value='suv'>SUV</SelectInput.Option>
          <SelectInput.Option value='hatchback'>Hatchback</SelectInput.Option>
          <SelectInput.Option value='coupe'>Coupe</SelectInput.Option>
        </SelectInput.OptionGroup>
        <SelectInput.OptionGroup label='Motorcycles'>
          <SelectInput.Option value='sport'>Sport Bike</SelectInput.Option>
          <SelectInput.Option value='cruiser'>Cruiser</SelectInput.Option>
          <SelectInput.Option value='touring'>Touring</SelectInput.Option>
          <SelectInput.Option value='dirt'>Dirt Bike</SelectInput.Option>
        </SelectInput.OptionGroup>
        <SelectInput.OptionGroup label='Trucks'>
          <SelectInput.Option value='pickup'>Pickup Truck</SelectInput.Option>
          <SelectInput.Option value='van'>Van</SelectInput.Option>
          <SelectInput.Option value='box-truck'>Box Truck</SelectInput.Option>
        </SelectInput.OptionGroup>
      </>
    ),
  },
}
