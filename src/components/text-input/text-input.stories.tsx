/**
 * TextInput stories for Storybook
 *
 * Demonstrates all variants, content placement, helper text, error states, and disabled states
 * showcasing Versaur's harmonious color palette and professional design
 */
import type { Meta, StoryObj } from '@storybook/react'
import { TextInput } from './text-input'
import {
  UserIcon,
  MailIcon,
  AlertCircleIcon,
  SearchIcon,
  EyeIcon,
} from 'lucide-react'

const meta: Meta<typeof TextInput> = {
  title: 'Form/TextInput',
  component: TextInput,
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
  },
}
export default meta

type Story = StoryObj<typeof TextInput>

export const Default: Story = {
  args: {
    label: 'Name',
    placeholder: 'Enter your name',
  },
}

export const Primary: Story = {
  args: {
    label: 'Primary Input',
    variant: 'primary',
    placeholder: 'Primary coral input',
    helperText: 'This uses our primary coral color for brand actions',
  },
}

export const Secondary: Story = {
  args: {
    label: 'Secondary Input',
    variant: 'secondary',
    placeholder: 'Secondary sage input',
    helperText: 'This uses our secondary sage color for balanced interactions',
  },
}

export const Tertiary: Story = {
  args: {
    label: 'Tertiary Input',
    variant: 'tertiary',
    placeholder: 'Tertiary mist input',
    helperText: 'This uses our tertiary mist color for professional elements',
  },
}

export const WithLeftContent: Story = {
  args: {
    label: 'Username',
    leftContent: <UserIcon size={16} />,
    placeholder: 'Username',
    helperText: 'Enter your username to continue',
  },
}

export const WithRightContent: Story = {
  args: {
    label: 'Password',
    rightContent: <EyeIcon size={16} />,
    placeholder: 'Password',
    type: 'password',
    helperText: 'Click the eye icon to toggle password visibility',
  },
}

export const WithBothContent: Story = {
  args: {
    label: 'Search',
    leftContent: <SearchIcon size={16} />,
    rightContent: <AlertCircleIcon size={16} />,
    placeholder: 'Search with validation',
    helperText: 'Search input with left search icon and right status icon',
  },
}

export const Outline: Story = {
  args: {
    label: 'Information Input',
    variant: 'info-outline',
    placeholder: 'Info outline input',
    helperText: 'Outline variant with info color for information inputs',
  },
}

export const Success: Story = {
  args: {
    label: 'Valid Email',
    variant: 'success',
    placeholder: 'Success input',
    helperText: 'This input indicates a successful state',
    defaultValue: 'Valid email@example.com',
  },
}

export const Warning: Story = {
  args: {
    label: 'Warning Input',
    variant: 'warning',
    placeholder: 'Warning input',
    helperText: 'This input shows a warning state',
  },
}

export const Error: Story = {
  args: {
    label: 'Email Address',
    error: 'This field is required and must be a valid email address',
    placeholder: 'Email',
    leftContent: <MailIcon size={16} />,
    helperText: 'This helper text is hidden when there is an error',
  },
}

export const Disabled: Story = {
  args: {
    label: 'Disabled Field',
    disabled: true,
    placeholder: 'Disabled input',
    leftContent: <AlertCircleIcon size={16} />,
    helperText: 'This input is disabled and cannot be interacted with',
  },
}

export const AllVariants: Story = {
  render: () => (
    <div className='space-y-4 w-80'>
      <div>
        <h3 className='text-sm font-medium mb-2'>Core Variants</h3>
        <div className='space-y-2'>
          <TextInput
            label='Primary'
            variant='primary'
            placeholder='Primary (Coral)'
          />
          <TextInput
            label='Secondary'
            variant='secondary'
            placeholder='Secondary (Sage)'
          />
          <TextInput
            label='Tertiary'
            variant='tertiary'
            placeholder='Tertiary (Mist)'
          />
          <TextInput
            label='Ghost'
            variant='ghost'
            placeholder='Ghost (Slate)'
          />
          <TextInput
            label='Neutral'
            variant='neutral'
            placeholder='Neutral (Light Gray)'
          />
        </div>
      </div>
      <div>
        <h3 className='text-sm font-medium mb-2'>Outline Variants</h3>
        <div className='space-y-2'>
          <TextInput
            label='Primary Outline'
            variant='primary-outline'
            placeholder='Primary Outline'
          />
          <TextInput
            label='Secondary Outline'
            variant='secondary-outline'
            placeholder='Secondary Outline'
          />
          <TextInput
            label='Tertiary Outline'
            variant='tertiary-outline'
            placeholder='Tertiary Outline'
          />
        </div>
      </div>
      <div>
        <h3 className='text-sm font-medium mb-2'>Semantic Variants</h3>
        <div className='space-y-2'>
          <TextInput
            label='Success'
            variant='success'
            placeholder='Success State'
          />
          <TextInput
            label='Info'
            variant='info'
            placeholder='Information State'
          />
          <TextInput
            label='Warning'
            variant='warning'
            placeholder='Warning State'
          />
          <TextInput
            label='Danger'
            variant='danger'
            placeholder='Danger State'
          />
        </div>
      </div>
    </div>
  ),
}

export const WithLabelAndCustomId: Story = {
  args: {
    label: 'Custom ID Input',
    id: 'custom-input-id',
    placeholder: 'This input has a custom ID',
    helperText: 'The label is connected to the custom ID',
  },
}

export const LabelWithError: Story = {
  args: {
    label: 'Required Field',
    placeholder: 'This field is required',
    error: 'This field is required and cannot be empty',
    leftContent: <AlertCircleIcon size={16} />,
  },
}
