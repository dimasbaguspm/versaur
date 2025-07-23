import type { Meta, StoryObj } from '@storybook/react'
import { RadioInput } from './radio-input'
import type { RadioInputProps } from './types'

/**
 * RadioInput provides a radio button group with Versaur's design system styling.
 * Perfect for single-selection scenarios with clear visual hierarchy and accessibility.
 *
 * This component follows the compound pattern with RadioInput.Option for flexible composition.
 */
const meta = {
  title: 'Forms/RadioInput',
  component: RadioInput,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A radio input group component that supports single selection with customizable variants, sizes, and directions. Built with accessibility and Versaur design principles in mind.',
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
    disabled: {
      control: 'boolean',
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof RadioInput>

export default meta
type Story = StoryObj<typeof meta>

/**
 * Default radio input with primary variant
 */
export const Default: Story = {
  args: {
    name: 'payment-method',
    label: 'Payment Method',
    helperText: 'Choose your preferred payment method',
  },
  render: args => (
    <RadioInput {...args}>
      <RadioInput.Option value='credit-card'>Credit Card</RadioInput.Option>
      <RadioInput.Option value='paypal'>PayPal</RadioInput.Option>
      <RadioInput.Option value='bank-transfer'>Bank Transfer</RadioInput.Option>
    </RadioInput>
  ),
}

/**
 * Radio input with descriptions for each option
 */
export const WithDescriptions: Story = {
  args: {
    name: 'subscription-plan',
    label: 'Subscription Plan',
    variant: 'secondary',
  },
  render: args => (
    <RadioInput {...args}>
      <RadioInput.Option
        value='basic'
        description='Perfect for individuals getting started'
      >
        Basic Plan
      </RadioInput.Option>
      <RadioInput.Option
        value='pro'
        description='Great for growing teams and businesses'
      >
        Pro Plan
      </RadioInput.Option>
      <RadioInput.Option
        value='enterprise'
        description='Advanced features for large organizations'
      >
        Enterprise Plan
      </RadioInput.Option>
    </RadioInput>
  ),
}

/**
 * Horizontal layout radio input
 */
export const Horizontal: Story = {
  args: {
    name: 'theme-preference',
    label: 'Theme Preference',
    direction: 'horizontal',
    variant: 'tertiary',
  },
  render: args => (
    <RadioInput {...args}>
      <RadioInput.Option value='light'>Light</RadioInput.Option>
      <RadioInput.Option value='dark'>Dark</RadioInput.Option>
      <RadioInput.Option value='auto'>Auto</RadioInput.Option>
    </RadioInput>
  ),
}

/**
 * Different size variants
 */
export const Sizes: Story = {
  args: {
    name: 'size-demo',
  },
  render: () => (
    <div className='space-y-8'>
      <div>
        <h3 className='text-lg font-semibold mb-4'>Small</h3>
        <RadioInput name='size-small' size='sm'>
          <RadioInput.Option value='option1'>Small Option</RadioInput.Option>
          <RadioInput.Option value='option2'>
            Another Small Option
          </RadioInput.Option>
        </RadioInput>
      </div>

      <div>
        <h3 className='text-lg font-semibold mb-4'>Medium</h3>
        <RadioInput name='size-medium' size='md'>
          <RadioInput.Option value='option1'>Medium Option</RadioInput.Option>
          <RadioInput.Option value='option2'>
            Another Medium Option
          </RadioInput.Option>
        </RadioInput>
      </div>

      <div>
        <h3 className='text-lg font-semibold mb-4'>Large</h3>
        <RadioInput name='size-large' size='lg'>
          <RadioInput.Option value='option1'>Large Option</RadioInput.Option>
          <RadioInput.Option value='option2'>
            Another Large Option
          </RadioInput.Option>
        </RadioInput>
      </div>
    </div>
  ),
}

/**
 * Error state with validation message
 */
export const WithError: Story = {
  args: {
    name: 'required-selection',
    label: 'Required Selection',
    error: 'Please select an option to continue',
  },
  render: args => (
    <RadioInput {...args}>
      <RadioInput.Option value='option1'>First Option</RadioInput.Option>
      <RadioInput.Option value='option2'>Second Option</RadioInput.Option>
    </RadioInput>
  ),
}

/**
 * Disabled state
 */
export const Disabled: Story = {
  args: {
    name: 'disabled-selection',
    label: 'Disabled Selection',
    disabled: true,
    helperText: 'This selection is currently disabled',
  },
  render: args => (
    <RadioInput {...args}>
      <RadioInput.Option value='option1'>Disabled Option 1</RadioInput.Option>
      <RadioInput.Option value='option2'>Disabled Option 2</RadioInput.Option>
    </RadioInput>
  ),
}

/**
 * All color variants showcase
 */
export const ColorVariants: Story = {
  args: {
    name: 'color-demo',
  },
  render: () => (
    <div className='grid grid-cols-2 gap-8'>
      <div>
        <h3 className='text-lg font-semibold mb-4'>Filled Variants</h3>
        <div className='space-y-6'>
          {['primary', 'secondary', 'tertiary', 'ghost', 'neutral'].map(
            variant => (
              <RadioInput
                key={variant}
                name={`variant-${variant}`}
                label={`${variant.charAt(0).toUpperCase() + variant.slice(1)} Variant`}
                variant={variant as RadioInputProps['variant']}
              >
                <RadioInput.Option value='option1'>Option 1</RadioInput.Option>
                <RadioInput.Option value='option2'>Option 2</RadioInput.Option>
              </RadioInput>
            )
          )}
        </div>
      </div>

      <div>
        <h3 className='text-lg font-semibold mb-4'>Outline Variants</h3>
        <div className='space-y-6'>
          {[
            'primary-outline',
            'secondary-outline',
            'tertiary-outline',
            'ghost-outline',
            'neutral-outline',
          ].map(variant => (
            <RadioInput
              key={variant}
              name={`variant-${variant}`}
              label={`${variant.split('-')[0].charAt(0).toUpperCase() + variant.split('-')[0].slice(1)} Outline`}
              variant={variant as RadioInputProps['variant']}
            >
              <RadioInput.Option value='option1'>Option 1</RadioInput.Option>
              <RadioInput.Option value='option2'>Option 2</RadioInput.Option>
            </RadioInput>
          ))}
        </div>
      </div>
    </div>
  ),
}

/**
 * Semantic variants for different states
 */
export const SemanticVariants: Story = {
  args: {
    name: 'semantic-demo',
  },
  render: () => (
    <div className='space-y-6'>
      {['success', 'info', 'warning', 'danger'].map(variant => (
        <RadioInput
          key={variant}
          name={`semantic-${variant}`}
          label={`${variant.charAt(0).toUpperCase() + variant.slice(1)} State`}
          variant={variant as RadioInputProps['variant']}
        >
          <RadioInput.Option value='option1'>
            {variant.charAt(0).toUpperCase() + variant.slice(1)} Option 1
          </RadioInput.Option>
          <RadioInput.Option value='option2'>
            {variant.charAt(0).toUpperCase() + variant.slice(1)} Option 2
          </RadioInput.Option>
        </RadioInput>
      ))}
    </div>
  ),
}
