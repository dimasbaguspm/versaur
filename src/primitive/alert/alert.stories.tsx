import type { Meta, StoryObj } from '@storybook/react'
import { Alert } from './alert'
import {
  XCircleIcon,
  CheckCircleIcon,
  InfoIcon,
  AlertTriangleIcon,
  AlertCircleIcon,
} from 'lucide-react'

/**
 * Alert component provides inline notifications and status messages.
 * Perfect for "Record not available" messages, form validation feedback,
 * and general status information with user-controlled icons.
 */
const meta: Meta<typeof Alert> = {
  title: 'Primitive/Alert',
  component: Alert,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Alert component for displaying inline notifications and status messages with flexible icon and content composition.',
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'outline'],
      description: 'Visual style variant',
    },
    color: {
      control: 'select',
      options: [
        'primary',
        'secondary',
        'tertiary',
        'ghost',
        'neutral',
        'success',
        'info',
        'warning',
        'danger',
      ],
      description: 'Color theme based on Versaur color system',
    },
  },
}

export default meta
type Story = StoryObj<typeof Alert>

/**
 * Default alert with neutral styling for general information
 */
export const Default: Story = {
  args: {
    color: 'neutral',
    variant: 'default',
  },
  render: args => (
    <Alert {...args} icon={<InfoIcon className='h-4 w-4' />}>
      This is a general information message.
    </Alert>
  ),
}

/**
 * Error alert for displaying error messages and unavailable records
 */
export const RecordNotAvailable: Story = {
  args: {
    color: 'danger',
    variant: 'default',
  },
  render: args => (
    <Alert {...args} icon={<XCircleIcon className='h-4 w-4' />}>
      Record Not Available - The requested record could not be found. Please
      check the ID and try again.
    </Alert>
  ),
}

/**
 * Success alert for positive feedback
 */
export const Success: Story = {
  args: {
    color: 'success',
    variant: 'default',
  },
  render: args => (
    <Alert {...args} icon={<CheckCircleIcon className='h-4 w-4' />}>
      Success - Your data has been saved successfully.
    </Alert>
  ),
}

/**
 * Warning alert for caution messages
 */
export const Warning: Story = {
  args: {
    color: 'warning',
    variant: 'default',
  },
  render: args => (
    <Alert {...args} icon={<AlertTriangleIcon className='h-4 w-4' />}>
      Warning - Please review your input before continuing.
    </Alert>
  ),
}

/**
 * Information alert using the info color
 */
export const Info: Story = {
  args: {
    color: 'info',
    variant: 'default',
  },
  render: args => (
    <Alert {...args} icon={<AlertCircleIcon className='h-4 w-4' />}>
      System Update - A system update will be performed tonight from 2:00 AM to
      4:00 AM.
    </Alert>
  ),
}

/**
 * Outline variant demonstration across all colors
 */
export const OutlineVariants: Story = {
  render: () => (
    <div className='space-y-4'>
      <Alert
        variant='outline'
        color='primary'
        icon={<InfoIcon className='h-4 w-4' />}
      >
        Primary Outline - Primary color with outline styling.
      </Alert>

      <Alert
        variant='outline'
        color='success'
        icon={<CheckCircleIcon className='h-4 w-4' />}
      >
        Success Outline - Success message with outline styling.
      </Alert>

      <Alert
        variant='outline'
        color='danger'
        icon={<XCircleIcon className='h-4 w-4' />}
      >
        Error Outline - Error message with outline styling.
      </Alert>
    </div>
  ),
}

/**
 * All color variations in default style
 */
export const AllColors: Story = {
  render: () => (
    <div className='space-y-4'>
      <Alert color='primary' icon={<InfoIcon className='h-4 w-4' />}>
        Primary - Primary coral color for main actions.
      </Alert>

      <Alert color='secondary' icon={<InfoIcon className='h-4 w-4' />}>
        Secondary - Secondary sage color for balance.
      </Alert>

      <Alert color='tertiary' icon={<InfoIcon className='h-4 w-4' />}>
        Tertiary - Tertiary mist color for professional elements.
      </Alert>

      <Alert color='ghost' icon={<InfoIcon className='h-4 w-4' />}>
        Ghost - Ghost slate color for minimal styling.
      </Alert>

      <Alert color='neutral' icon={<InfoIcon className='h-4 w-4' />}>
        Neutral - Neutral light gray for balanced information.
      </Alert>
    </div>
  ),
}

/**
 * Alert without icon for text-only content
 */
export const WithoutIcon: Story = {
  args: {
    color: 'info',
    variant: 'default',
  },
  render: args => (
    <Alert {...args}>
      No Icon Alert - This alert doesn't have an icon, just content.
    </Alert>
  ),
}
