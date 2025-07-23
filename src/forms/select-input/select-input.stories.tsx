/**
 * SelectInput stories for Storybook
 *
 * Demonstrates all variants, options, helper text, error states, and disabled states
 * showcasing Versaur's harmonious color palette and professional design
 */
import type { Meta, StoryObj } from '@storybook/react'
import { SelectInput } from './select-input'

const meta: Meta<typeof SelectInput> = {
  title: 'Forms/SelectInput',
  component: SelectInput,
  argTypes: {
    variant: {
      control: 'select',
      options: [
        'primary',
        'primary-outline',
        'secondary',
        'secondary-outline',
        'tertiary',
        'tertiary-outline',
        'ghost',
        'ghost-outline',
        'neutral',
        'neutral-outline',
        'success',
        'success-outline',
        'info',
        'info-outline',
        'warning',
        'warning-outline',
        'danger',
        'danger-outline',
      ],
    },
    disabled: {
      control: 'boolean',
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          'SelectInput component provides a styled dropdown select with professional design and accessibility features.',
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof SelectInput>

/**
 * The default SelectInput with primary variant (coral color) and a selection of options.
 * Perfect for forms requiring user selection from predefined choices.
 */
export const Default: Story = {
  args: {
    label: 'Choose your favorite color',
    variant: 'primary',
    placeholder: 'Select a color...',
    children: (
      <>
        <option value='red'>Red</option>
        <option value='blue'>Blue</option>
        <option value='green'>Green</option>
        <option value='purple'>Purple</option>
        <option value='orange'>Orange</option>
      </>
    ),
  },
}

/**
 * All core color variants demonstrating Versaur's harmonious color palette.
 * Each variant maintains consistency with the brand's design system.
 */
export const CoreVariants: Story = {
  render: () => (
    <div className='space-y-4'>
      <SelectInput
        label='Primary (Coral)'
        variant='primary'
        placeholder='Select an option...'
      >
        <option value='option1'>Option 1</option>
        <option value='option2'>Option 2</option>
        <option value='option3'>Option 3</option>
      </SelectInput>
      <SelectInput
        label='Secondary (Sage)'
        variant='secondary'
        placeholder='Select an option...'
      >
        <option value='option1'>Option 1</option>
        <option value='option2'>Option 2</option>
        <option value='option3'>Option 3</option>
      </SelectInput>
      <SelectInput
        label='Tertiary (Mist)'
        variant='tertiary'
        placeholder='Select an option...'
      >
        <option value='option1'>Option 1</option>
        <option value='option2'>Option 2</option>
        <option value='option3'>Option 3</option>
      </SelectInput>
      <SelectInput
        label='Ghost (Slate)'
        variant='ghost'
        placeholder='Select an option...'
      >
        <option value='option1'>Option 1</option>
        <option value='option2'>Option 2</option>
        <option value='option3'>Option 3</option>
      </SelectInput>
      <SelectInput
        label='Neutral (Light Gray)'
        variant='neutral'
        placeholder='Select an option...'
      >
        <option value='option1'>Option 1</option>
        <option value='option2'>Option 2</option>
        <option value='option3'>Option 3</option>
      </SelectInput>
    </div>
  ),
}

/**
 * Outline variants providing a more subtle appearance while maintaining color identity.
 * Ideal for secondary actions or when a lighter visual weight is preferred.
 */
export const OutlineVariants: Story = {
  render: () => (
    <div className='space-y-4'>
      <SelectInput
        label='Primary Outline'
        variant='primary-outline'
        placeholder='Select an option...'
      >
        <option value='option1'>Option 1</option>
        <option value='option2'>Option 2</option>
        <option value='option3'>Option 3</option>
      </SelectInput>
      <SelectInput
        label='Secondary Outline'
        variant='secondary-outline'
        placeholder='Select an option...'
      >
        <option value='option1'>Option 1</option>
        <option value='option2'>Option 2</option>
        <option value='option3'>Option 3</option>
      </SelectInput>
      <SelectInput
        label='Tertiary Outline'
        variant='tertiary-outline'
        placeholder='Select an option...'
      >
        <option value='option1'>Option 1</option>
        <option value='option2'>Option 2</option>
        <option value='option3'>Option 3</option>
      </SelectInput>
    </div>
  ),
}

/**
 * Semantic variants for different states and feedback scenarios.
 * Each variant conveys specific meaning through color psychology.
 */
export const SemanticVariants: Story = {
  render: () => (
    <div className='space-y-4'>
      <SelectInput
        label='Success State'
        variant='success'
        placeholder='Select an option...'
        helperText='Great choice! This option is recommended.'
      >
        <option value='recommended'>Recommended Option</option>
        <option value='option2'>Option 2</option>
        <option value='option3'>Option 3</option>
      </SelectInput>
      <SelectInput
        label='Info State'
        variant='info'
        placeholder='Select an option...'
        helperText='Please select your preferred option from the list.'
      >
        <option value='option1'>Option 1</option>
        <option value='option2'>Option 2</option>
        <option value='option3'>Option 3</option>
      </SelectInput>
      <SelectInput
        label='Warning State'
        variant='warning'
        placeholder='Select an option...'
        helperText='Some options may have additional fees.'
      >
        <option value='standard'>Standard (Free)</option>
        <option value='premium'>Premium (+$10)</option>
        <option value='enterprise'>Enterprise (+$25)</option>
      </SelectInput>
      <SelectInput
        label='Danger State'
        variant='danger'
        placeholder='Select an option...'
        error='This field is required. Please make a selection.'
      >
        <option value='option1'>Option 1</option>
        <option value='option2'>Option 2</option>
        <option value='option3'>Option 3</option>
      </SelectInput>
    </div>
  ),
}

/**
 * SelectInput with helper text providing additional guidance.
 * Helper text appears below the select when no error is present.
 */
export const WithHelperText: Story = {
  args: {
    label: 'Select your country',
    variant: 'primary',
    placeholder: 'Choose your country...',
    helperText: 'This will be used for shipping calculations',
    children: (
      <>
        <option value='us'>United States</option>
        <option value='ca'>Canada</option>
        <option value='uk'>United Kingdom</option>
        <option value='de'>Germany</option>
        <option value='fr'>France</option>
        <option value='jp'>Japan</option>
        <option value='au'>Australia</option>
      </>
    ),
  },
}

/**
 * SelectInput in error state with validation message.
 * Error state overrides the variant color and displays error message.
 */
export const WithError: Story = {
  args: {
    label: 'Select your plan',
    variant: 'primary',
    placeholder: 'Choose a plan...',
    error: 'Please select a plan to continue',
    children: (
      <>
        <option value='free'>Free Plan</option>
        <option value='basic'>Basic Plan - $9/month</option>
        <option value='pro'>Pro Plan - $19/month</option>
        <option value='enterprise'>Enterprise Plan - $99/month</option>
      </>
    ),
  },
}

/**
 * Disabled SelectInput demonstrating reduced opacity and non-interactive state.
 * Maintains visual consistency while clearly indicating unavailability.
 */
export const Disabled: Story = {
  args: {
    label: 'Unavailable Options',
    variant: 'primary',
    placeholder: 'Options not available',
    disabled: true,
    helperText: 'This selection is currently disabled',
    children: (
      <>
        <option value='option1'>Option 1</option>
        <option value='option2'>Option 2</option>
        <option value='option3'>Option 3</option>
      </>
    ),
  },
}

/**
 * SelectInput with grouped options using optgroup for better organization.
 * Demonstrates proper semantic structure for complex option lists.
 */
export const WithOptionGroups: Story = {
  args: {
    label: 'Select a vehicle',
    variant: 'primary',
    placeholder: 'Choose your vehicle...',
    helperText: 'Options are grouped by category',
    children: (
      <>
        <optgroup label='Cars'>
          <option value='sedan'>Sedan</option>
          <option value='suv'>SUV</option>
          <option value='hatchback'>Hatchback</option>
          <option value='coupe'>Coupe</option>
        </optgroup>
        <optgroup label='Motorcycles'>
          <option value='sport'>Sport Bike</option>
          <option value='cruiser'>Cruiser</option>
          <option value='touring'>Touring</option>
          <option value='dirt'>Dirt Bike</option>
        </optgroup>
        <optgroup label='Trucks'>
          <option value='pickup'>Pickup Truck</option>
          <option value='van'>Van</option>
          <option value='box-truck'>Box Truck</option>
        </optgroup>
      </>
    ),
  },
}

/**
 * Multiple SelectInput examples in a form layout.
 * Shows how SelectInput components work together in real-world scenarios.
 */
export const FormExample: Story = {
  render: () => (
    <div className='max-w-md space-y-6'>
      <SelectInput
        label='Title'
        variant='primary'
        placeholder='Select title...'
      >
        <option value='mr'>Mr.</option>
        <option value='mrs'>Mrs.</option>
        <option value='ms'>Ms.</option>
        <option value='dr'>Dr.</option>
        <option value='prof'>Prof.</option>
      </SelectInput>

      <SelectInput
        label='Department'
        variant='secondary'
        placeholder='Choose department...'
        helperText='Select your primary department'
      >
        <option value='engineering'>Engineering</option>
        <option value='design'>Design</option>
        <option value='marketing'>Marketing</option>
        <option value='sales'>Sales</option>
        <option value='support'>Support</option>
        <option value='hr'>Human Resources</option>
      </SelectInput>

      <SelectInput
        label='Experience Level'
        variant='tertiary'
        placeholder='Select experience...'
      >
        <option value='junior'>Junior (0-2 years)</option>
        <option value='mid'>Mid-level (2-5 years)</option>
        <option value='senior'>Senior (5-10 years)</option>
        <option value='lead'>Lead (10+ years)</option>
      </SelectInput>
    </div>
  ),
}
