import type { Meta, StoryObj } from '@storybook/react'
import { CheckboxInput } from './checkbox-input'

/**
 * CheckboxInput is a compound component that provides checkbox inputs with primary variant styling
 * Uses fieldset/legend for proper semantic structure and accessibility
 *
 * Key features:
 * - Custom styled checkboxes using ::after pseudo-elements
 * - Primary variant using Versaur's coral color
 * - Flexible compound pattern for composition
 * - Full accessibility support with proper ARIA attributes and fieldset/legend structure
 * - Support for both horizontal and vertical layouts
 * - Required field indicator with asterisk
 * - Error state that only affects error text, not checkbox styling
 */
const meta: Meta<typeof CheckboxInput> = {
  title: 'Forms/CheckboxInput',
  component: CheckboxInput,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A flexible checkbox input component supporting multiple selection with primary variant styling and proper semantic structure using fieldset/legend.',
      },
    },
  },
  argTypes: {
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
 * Checkbox options with descriptions and required indicator
 */
export const WithDescriptions: Story = {
  args: {
    label: 'Privacy settings',
    required: true,
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
    direction: 'horizontal',
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
 * Error state demonstration - error only affects error text, not checkbox styling
 */
export const WithError: Story = {
  args: {
    label: 'Terms and conditions',
    required: true,
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
