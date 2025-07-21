import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { SegmentMultipleInput } from './segment-multiple-input'

/**
 * SegmentMultipleInput provides a tab-like interface for selecting multiple options.
 * Perfect for filters, preferences, or any scenario where users need to choose multiple items from a set.
 *
 * Features:
 * - Multiple selection with checkbox behavior
 * - Users can unselect options by clicking them again
 * - Tab-like visual design with seamless segment connections
 * - Full accessibility support with proper ARIA attributes
 * - Controlled component pattern for React forms
 */
const meta: Meta<typeof SegmentMultipleInput> = {
  title: 'Form/SegmentMultipleInput',
  component: SegmentMultipleInput,
  tags: ['autodocs'],
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
    disabled: {
      control: 'boolean',
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

/**
 * Default segment multiple input with primary variant.
 * Users can select multiple options and deselect them by clicking again.
 */
export const Default: Story = {
  args: {
    label: 'Content Preferences',
    helperText: "Select all types of content you're interested in",
  },
  render: function DefaultStory(args) {
    const [value, setValue] = useState<string[]>(['tech'])

    return (
      <SegmentMultipleInput
        {...args}
        name='content-preferences'
        value={value}
        onChange={setValue}
      >
        <SegmentMultipleInput.Option value='tech'>
          Technology
        </SegmentMultipleInput.Option>
        <SegmentMultipleInput.Option value='design'>
          Design
        </SegmentMultipleInput.Option>
        <SegmentMultipleInput.Option value='business'>
          Business
        </SegmentMultipleInput.Option>
        <SegmentMultipleInput.Option value='lifestyle'>
          Lifestyle
        </SegmentMultipleInput.Option>
      </SegmentMultipleInput>
    )
  },
}

/**
 * Segment multiple input with multiple selections.
 * Shows how multiple options can be selected simultaneously.
 */
export const MultipleSelected: Story = {
  args: {
    label: 'Technical Skills',
    helperText: "Select all programming languages you're proficient in",
  },
  render: function MultipleSelectedStory(args) {
    const [value, setValue] = useState<string[]>([
      'javascript',
      'python',
      'typescript',
    ])

    return (
      <SegmentMultipleInput
        {...args}
        name='skills'
        value={value}
        onChange={setValue}
      >
        <SegmentMultipleInput.Option value='javascript'>
          JavaScript
        </SegmentMultipleInput.Option>
        <SegmentMultipleInput.Option value='python'>
          Python
        </SegmentMultipleInput.Option>
        <SegmentMultipleInput.Option value='typescript'>
          TypeScript
        </SegmentMultipleInput.Option>
        <SegmentMultipleInput.Option value='golang'>
          Go
        </SegmentMultipleInput.Option>
        <SegmentMultipleInput.Option value='rust'>
          Rust
        </SegmentMultipleInput.Option>
      </SegmentMultipleInput>
    )
  },
}

/**
 * Segment multiple input in different sizes.
 * Demonstrates the available size variants.
 */
export const Sizes: Story = {
  render: () => (
    <div className='space-y-6'>
      <SegmentMultipleInput
        name='size-sm'
        size='sm'
        label='Small Size'
        value={['option1']}
      >
        <SegmentMultipleInput.Option value='option1'>
          Option 1
        </SegmentMultipleInput.Option>
        <SegmentMultipleInput.Option value='option2'>
          Option 2
        </SegmentMultipleInput.Option>
        <SegmentMultipleInput.Option value='option3'>
          Option 3
        </SegmentMultipleInput.Option>
      </SegmentMultipleInput>

      <SegmentMultipleInput
        name='size-md'
        size='md'
        label='Medium Size (Default)'
        value={['option2']}
      >
        <SegmentMultipleInput.Option value='option1'>
          Option 1
        </SegmentMultipleInput.Option>
        <SegmentMultipleInput.Option value='option2'>
          Option 2
        </SegmentMultipleInput.Option>
        <SegmentMultipleInput.Option value='option3'>
          Option 3
        </SegmentMultipleInput.Option>
      </SegmentMultipleInput>

      <SegmentMultipleInput
        name='size-lg'
        size='lg'
        label='Large Size'
        value={['option3']}
      >
        <SegmentMultipleInput.Option value='option1'>
          Option 1
        </SegmentMultipleInput.Option>
        <SegmentMultipleInput.Option value='option2'>
          Option 2
        </SegmentMultipleInput.Option>
        <SegmentMultipleInput.Option value='option3'>
          Option 3
        </SegmentMultipleInput.Option>
      </SegmentMultipleInput>
    </div>
  ),
}

/**
 * Segment multiple input showing core color variants.
 * Demonstrates the main color options available.
 */
export const CoreVariants: Story = {
  render: () => (
    <div className='space-y-6'>
      <SegmentMultipleInput
        name='primary'
        variant='primary'
        label='Primary (Coral)'
        value={['option1']}
      >
        <SegmentMultipleInput.Option value='option1'>
          Selected
        </SegmentMultipleInput.Option>
        <SegmentMultipleInput.Option value='option2'>
          Available
        </SegmentMultipleInput.Option>
      </SegmentMultipleInput>

      <SegmentMultipleInput
        name='secondary'
        variant='secondary'
        label='Secondary (Sage)'
        value={['option1']}
      >
        <SegmentMultipleInput.Option value='option1'>
          Selected
        </SegmentMultipleInput.Option>
        <SegmentMultipleInput.Option value='option2'>
          Available
        </SegmentMultipleInput.Option>
      </SegmentMultipleInput>

      <SegmentMultipleInput
        name='tertiary'
        variant='tertiary'
        label='Tertiary (Mist)'
        value={['option1']}
      >
        <SegmentMultipleInput.Option value='option1'>
          Selected
        </SegmentMultipleInput.Option>
        <SegmentMultipleInput.Option value='option2'>
          Available
        </SegmentMultipleInput.Option>
      </SegmentMultipleInput>

      <SegmentMultipleInput
        name='ghost'
        variant='ghost'
        label='Ghost (Slate)'
        value={['option1']}
      >
        <SegmentMultipleInput.Option value='option1'>
          Selected
        </SegmentMultipleInput.Option>
        <SegmentMultipleInput.Option value='option2'>
          Available
        </SegmentMultipleInput.Option>
      </SegmentMultipleInput>
    </div>
  ),
}

/**
 * Segment multiple input showing outline variants.
 * Demonstrates the outline style options.
 */
export const OutlineVariants: Story = {
  render: () => (
    <div className='space-y-6'>
      <SegmentMultipleInput
        name='primary-outline'
        variant='primary-outline'
        label='Primary Outline'
        value={['option1']}
      >
        <SegmentMultipleInput.Option value='option1'>
          Selected
        </SegmentMultipleInput.Option>
        <SegmentMultipleInput.Option value='option2'>
          Available
        </SegmentMultipleInput.Option>
      </SegmentMultipleInput>

      <SegmentMultipleInput
        name='secondary-outline'
        variant='secondary-outline'
        label='Secondary Outline'
        value={['option1']}
      >
        <SegmentMultipleInput.Option value='option1'>
          Selected
        </SegmentMultipleInput.Option>
        <SegmentMultipleInput.Option value='option2'>
          Available
        </SegmentMultipleInput.Option>
      </SegmentMultipleInput>
    </div>
  ),
}

/**
 * Segment multiple input showing semantic variants.
 * Demonstrates success, info, warning, and danger states.
 */
export const SemanticVariants: Story = {
  render: () => (
    <div className='space-y-6'>
      <SegmentMultipleInput
        name='success'
        variant='success'
        label='Success State'
        value={['option1']}
      >
        <SegmentMultipleInput.Option value='option1'>
          Completed
        </SegmentMultipleInput.Option>
        <SegmentMultipleInput.Option value='option2'>
          Pending
        </SegmentMultipleInput.Option>
      </SegmentMultipleInput>

      <SegmentMultipleInput
        name='info'
        variant='info'
        label='Info State'
        value={['option1']}
      >
        <SegmentMultipleInput.Option value='option1'>
          Important
        </SegmentMultipleInput.Option>
        <SegmentMultipleInput.Option value='option2'>
          Normal
        </SegmentMultipleInput.Option>
      </SegmentMultipleInput>

      <SegmentMultipleInput
        name='warning'
        variant='warning'
        label='Warning State'
        value={['option1']}
      >
        <SegmentMultipleInput.Option value='option1'>
          Attention
        </SegmentMultipleInput.Option>
        <SegmentMultipleInput.Option value='option2'>
          Normal
        </SegmentMultipleInput.Option>
      </SegmentMultipleInput>

      <SegmentMultipleInput
        name='danger'
        variant='danger'
        label='Danger State'
        value={['option1']}
      >
        <SegmentMultipleInput.Option value='option1'>
          Critical
        </SegmentMultipleInput.Option>
        <SegmentMultipleInput.Option value='option2'>
          Safe
        </SegmentMultipleInput.Option>
      </SegmentMultipleInput>
    </div>
  ),
}

/**
 * Segment multiple input with error state.
 * Shows how validation errors are displayed.
 */
export const WithError: Story = {
  args: {
    label: 'Required Selection',
    error: 'You must select at least one option',
  },
  render: function WithErrorStory(args) {
    const [value, setValue] = useState<string[]>([])

    return (
      <SegmentMultipleInput
        {...args}
        name='required-selection'
        value={value}
        onChange={setValue}
      >
        <SegmentMultipleInput.Option value='option1'>
          Option 1
        </SegmentMultipleInput.Option>
        <SegmentMultipleInput.Option value='option2'>
          Option 2
        </SegmentMultipleInput.Option>
        <SegmentMultipleInput.Option value='option3'>
          Option 3
        </SegmentMultipleInput.Option>
      </SegmentMultipleInput>
    )
  },
}

/**
 * Segment multiple input in disabled state.
 * Shows the component when interaction is disabled.
 */
export const Disabled: Story = {
  args: {
    label: 'Disabled Selection',
    helperText: 'This selection is currently disabled',
    disabled: true,
    value: ['option2'],
  },
  render: args => (
    <SegmentMultipleInput {...args} name='disabled-selection'>
      <SegmentMultipleInput.Option value='option1'>
        Option 1
      </SegmentMultipleInput.Option>
      <SegmentMultipleInput.Option value='option2'>
        Option 2
      </SegmentMultipleInput.Option>
      <SegmentMultipleInput.Option value='option3'>
        Option 3
      </SegmentMultipleInput.Option>
    </SegmentMultipleInput>
  ),
}

/**
 * Segment multiple input with individual disabled options.
 * Shows how specific options can be disabled while others remain interactive.
 */
export const PartiallyDisabled: Story = {
  args: {
    label: 'Subscription Tiers',
    helperText: 'Some tiers may not be available in your region',
  },
  render: function PartiallyDisabledStory(args) {
    const [value, setValue] = useState<string[]>(['basic'])

    return (
      <SegmentMultipleInput
        {...args}
        name='partial-disabled'
        value={value}
        onChange={setValue}
      >
        <SegmentMultipleInput.Option value='basic'>
          Basic
        </SegmentMultipleInput.Option>
        <SegmentMultipleInput.Option value='pro'>
          Pro
        </SegmentMultipleInput.Option>
        <SegmentMultipleInput.Option value='enterprise' disabled>
          Enterprise
        </SegmentMultipleInput.Option>
      </SegmentMultipleInput>
    )
  },
}

/**
 * Segment multiple input with single option.
 * Shows how the component adapts to a single option with rounded corners.
 */
export const SingleOption: Story = {
  args: {
    label: 'Agreement',
  },
  render: function SingleOptionStory(args) {
    const [value, setValue] = useState<string[]>([])

    return (
      <SegmentMultipleInput
        {...args}
        name='single-option'
        value={value}
        onChange={setValue}
      >
        <SegmentMultipleInput.Option value='agree'>
          I agree to the terms
        </SegmentMultipleInput.Option>
      </SegmentMultipleInput>
    )
  },
}

/**
 * Segment multiple input with fullWidth prop.
 * All options fill parent width equally.
 */
export const FullWidth: Story = {
  args: {
    label: 'Transaction Type',
    helperText: 'Choose one or more types',
    fullWidth: true,
  },
  render: function FullWidthStory(args) {
    const [value, setValue] = useState<string[]>(['expense'])
    return (
      <div className='w-full'>
        <SegmentMultipleInput
          {...args}
          name='transaction-type'
          value={value}
          onChange={setValue}
        >
          <SegmentMultipleInput.Option value='expense'>
            Expense
          </SegmentMultipleInput.Option>
          <SegmentMultipleInput.Option value='income'>
            Income
          </SegmentMultipleInput.Option>
          <SegmentMultipleInput.Option value='transfer'>
            Transfer
          </SegmentMultipleInput.Option>
        </SegmentMultipleInput>
      </div>
    )
  },
}
