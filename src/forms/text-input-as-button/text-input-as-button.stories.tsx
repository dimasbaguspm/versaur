/**
 * TextInputAsButton stories for Storybook
 *
 * A button styled like TextInput for triggering modals, pickers, or custom inputs
 * Core use cases: date pickers, file uploads, and custom select menus
 */
import type { Meta, StoryObj } from '@storybook/react'
import { TextInputAsButton } from './text-input-as-button'
import { Calendar, ChevronDown, Upload } from 'lucide-react'

const meta: Meta<typeof TextInputAsButton> = {
  title: 'Forms/TextInputAsButton',
  component: TextInputAsButton,
  tags: ['autodocs'],
}
export default meta

type Story = StoryObj<typeof TextInputAsButton>

/**
 * Default button with placeholder
 */
export const Default: Story = {
  args: {
    label: 'Select Date',
    placeholder: 'Click to select a date',
    onClick: () => alert('Button clicked!'),
  },
}

/**
 * Button with selected value
 */
export const WithValue: Story = {
  args: {
    label: 'Selected Date',
    value: 'January 15, 2025',
    onClick: () => alert('Open date picker'),
  },
}

/**
 * With helper text for additional context
 */
export const WithHelperText: Story = {
  args: {
    label: 'Appointment Date',
    placeholder: 'Select an appointment date',
    helperText: 'Choose a date within the next 30 days',
    onClick: () => alert('Open calendar'),
  },
}

/**
 * Date picker trigger with left icon
 */
export const WithLeftIcon: Story = {
  args: {
    label: 'Date of Birth',
    leftContent: <Calendar size={16} />,
    placeholder: 'MM/DD/YYYY',
    onClick: () => alert('Open date picker'),
  },
}

/**
 * Select-style with right icon
 */
export const WithRightIcon: Story = {
  args: {
    label: 'Country',
    value: 'United States',
    rightContent: <ChevronDown size={16} />,
    onClick: () => alert('Open country selector'),
  },
}

/**
 * With icons on both sides
 */
export const WithBothIcons: Story = {
  args: {
    label: 'Upload Document',
    leftContent: <Upload size={16} />,
    rightContent: <ChevronDown size={16} />,
    placeholder: 'No file selected',
    onClick: () => alert('Open file picker'),
  },
}

/**
 * Error state with error message
 */
export const WithError: Story = {
  args: {
    label: 'Required Date',
    error: 'Please select a date',
    placeholder: 'Click to select',
    leftContent: <Calendar size={16} />,
    onClick: () => alert('Open date picker'),
  },
}

/**
 * Required field with asterisk
 */
export const Required: Story = {
  args: {
    label: 'Event Date',
    placeholder: 'Select event date',
    required: true,
    helperText: 'This field is required',
    onClick: () => alert('Open calendar'),
  },
}

/**
 * Disabled state
 */
export const Disabled: Story = {
  args: {
    label: 'Locked Date',
    disabled: true,
    value: 'December 25, 2024',
    helperText: 'This date cannot be changed',
    leftContent: <Calendar size={16} />,
  },
}

/**
 * With hidden input for form submission
 */
export const WithHiddenInput: Story = {
  args: {
    label: 'Booking Date',
    name: 'bookingDate',
    value: '2025-01-15',
    leftContent: <Calendar size={16} />,
    helperText: 'Actual value: 2025-01-15 (check with form inspection)',
    onClick: () => alert('Value will be submitted with form'),
  },
}
