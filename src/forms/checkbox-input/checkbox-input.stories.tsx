import type { Meta, StoryObj } from '@storybook/react'
import { CheckboxInput } from './checkbox-input'

/**
 * CheckboxInput is a compound component that provides customizable checkbox inputs
 * with support for multiple variants, sizes, and accessibility features.
 *
 * Key features:
 * - Custom styled checkboxes using ::after pseudo-elements
 * - Multiple variants following the Versaur color system
 * - Flexible compound pattern for composition
 * - Full accessibility support with proper ARIA attributes
 * - Support for both horizontal and vertical layouts
 */
const meta: Meta<typeof CheckboxInput> = {
  title: 'Forms/CheckboxInput',
  component: CheckboxInput,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A flexible checkbox input component supporting multiple selection with customizable styling and accessibility features.',
      },
    },
  },
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
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    direction: {
      control: 'select',
      options: ['horizontal', 'vertical'],
    },
  },
}

export default meta
type Story = StoryObj<typeof CheckboxInput>

/**
 * Default checkbox input with multiple options
 */
export const Default: Story = {
  args: {
    label: 'Choose your preferences',
    variant: 'primary',
    size: 'md',
    direction: 'vertical',
  },
  render: args => (
    <CheckboxInput {...args}>
      <CheckboxInput.Option value='option1'>
        Newsletter subscription
      </CheckboxInput.Option>
      <CheckboxInput.Option value='option2'>
        Marketing emails
      </CheckboxInput.Option>
      <CheckboxInput.Option value='option3'>
        Product updates
      </CheckboxInput.Option>
    </CheckboxInput>
  ),
}

/**
 * Checkbox options with descriptions for better context
 */
export const WithDescriptions: Story = {
  args: {
    label: 'Privacy settings',
    variant: 'secondary',
    size: 'md',
  },
  render: args => (
    <CheckboxInput {...args}>
      <CheckboxInput.Option
        value='analytics'
        description='Help us improve by sharing anonymous usage data'
      >
        Analytics tracking
      </CheckboxInput.Option>
      <CheckboxInput.Option
        value='marketing'
        description='Receive personalized offers and recommendations'
      >
        Marketing communications
      </CheckboxInput.Option>
      <CheckboxInput.Option
        value='essential'
        description='Required for core functionality and security'
        defaultChecked
        disabled
      >
        Essential cookies
      </CheckboxInput.Option>
    </CheckboxInput>
  ),
}

/**
 * Horizontal layout for compact displays
 */
export const HorizontalLayout: Story = {
  args: {
    label: 'Skills',
    variant: 'tertiary',
    direction: 'horizontal',
    size: 'sm',
  },
  render: args => (
    <CheckboxInput {...args}>
      <CheckboxInput.Option value='react'>React</CheckboxInput.Option>
      <CheckboxInput.Option value='typescript'>TypeScript</CheckboxInput.Option>
      <CheckboxInput.Option value='nodejs'>Node.js</CheckboxInput.Option>
      <CheckboxInput.Option value='python'>Python</CheckboxInput.Option>
    </CheckboxInput>
  ),
}

/**
 * Different sizes demonstration
 */
export const Sizes: Story = {
  render: () => (
    <div className='space-y-6'>
      <CheckboxInput label='Small size' size='sm'>
        <CheckboxInput.Option value='sm1'>Small option 1</CheckboxInput.Option>
        <CheckboxInput.Option value='sm2'>Small option 2</CheckboxInput.Option>
      </CheckboxInput>

      <CheckboxInput label='Medium size' size='md'>
        <CheckboxInput.Option value='md1'>Medium option 1</CheckboxInput.Option>
        <CheckboxInput.Option value='md2'>Medium option 2</CheckboxInput.Option>
      </CheckboxInput>

      <CheckboxInput label='Large size' size='lg'>
        <CheckboxInput.Option value='lg1'>Large option 1</CheckboxInput.Option>
        <CheckboxInput.Option value='lg2'>Large option 2</CheckboxInput.Option>
      </CheckboxInput>
    </div>
  ),
}

/**
 * Variant showcase demonstrating all available styles
 */
export const Variants: Story = {
  render: () => (
    <div className='space-y-4'>
      <div className='grid grid-cols-2 gap-4'>
        <CheckboxInput label='Primary' variant='primary'>
          <CheckboxInput.Option value='p1'>Primary option</CheckboxInput.Option>
        </CheckboxInput>

        <CheckboxInput label='Secondary' variant='secondary'>
          <CheckboxInput.Option value='s1'>
            Secondary option
          </CheckboxInput.Option>
        </CheckboxInput>

        <CheckboxInput label='Success' variant='success'>
          <CheckboxInput.Option value='success1'>
            Success option
          </CheckboxInput.Option>
        </CheckboxInput>

        <CheckboxInput label='Warning' variant='warning'>
          <CheckboxInput.Option value='warning1'>
            Warning option
          </CheckboxInput.Option>
        </CheckboxInput>
      </div>
    </div>
  ),
}

/**
 * Error state demonstration
 */
export const WithError: Story = {
  args: {
    label: 'Terms and conditions',
    variant: 'primary',
    error: 'You must accept the terms to continue',
  },
  render: args => (
    <CheckboxInput {...args}>
      <CheckboxInput.Option value='terms'>
        I accept the terms and conditions
      </CheckboxInput.Option>
      <CheckboxInput.Option value='privacy'>
        I accept the privacy policy
      </CheckboxInput.Option>
    </CheckboxInput>
  ),
}

/**
 * Disabled state demonstration
 */
export const Disabled: Story = {
  args: {
    label: 'Disabled options',
    disabled: true,
    helperText: 'These options are currently unavailable',
  },
  render: args => (
    <CheckboxInput {...args}>
      <CheckboxInput.Option value='disabled1'>
        Disabled option 1
      </CheckboxInput.Option>
      <CheckboxInput.Option value='disabled2'>
        Disabled option 2
      </CheckboxInput.Option>
    </CheckboxInput>
  ),
}
