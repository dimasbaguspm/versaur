/**
 * TextInputAsButton stories for Storybook
 *
 * A button styled like TextInput for triggering modals, pickers, or custom inputs
 * Core use cases: date pickers, file uploads, custom select menus, and foreign key relationships
 * Supports various value types (string, number, array, object, boolean) and separate display values
 */
import type { Meta, StoryObj } from '@storybook/react'
import { TextInputAsButton } from './text-input-as-button'
import { Calendar, ChevronDown, Upload, User } from 'lucide-react'

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
    displayValue: 'January 15, 2025',
    leftContent: <Calendar size={16} />,
    helperText: 'Actual value: 2025-01-15 (check with form inspection)',
    onClick: () => alert('Value will be submitted with form'),
  },
}

/**
 * Foreign key relationship: value is ID, displayValue is name
 */
export const WithForeignKeyValue: Story = {
  args: {
    label: 'Assigned User',
    name: 'userId',
    value: 12345,
    displayValue: 'John Doe',
    leftContent: <User size={16} />,
    helperText: 'Value stored: 12345 (user ID)',
    onClick: () => alert('Open user selector'),
  },
}

/**
 * Array value with custom display
 */
export const WithArrayValue: Story = {
  args: {
    label: 'Selected Tags',
    name: 'tags',
    value: ['react', 'typescript', 'tailwind'],
    displayValue: 'React, TypeScript, Tailwind (3 selected)',
    rightContent: <ChevronDown size={16} />,
    helperText: 'Stored as JSON array',
    onClick: () => alert('Open tag selector'),
  },
}

/**
 * Array value without displayValue (auto-stringified)
 */
export const WithArrayValueAutoDisplay: Story = {
  args: {
    label: 'Categories',
    name: 'categories',
    value: ['frontend', 'design', 'ui'],
    rightContent: <ChevronDown size={16} />,
    helperText: 'Auto-displayed as comma-separated list',
    onClick: () => alert('Open category selector'),
  },
}

/**
 * Object value with custom display
 */
export const WithObjectValue: Story = {
  args: {
    label: 'Location',
    name: 'location',
    value: { lat: 40.7128, lng: -74.006 },
    displayValue: 'New York City, NY',
    helperText: 'Coordinates stored as JSON object',
    onClick: () => alert('Open map picker'),
  },
}

/**
 * Number value
 */
export const WithNumberValue: Story = {
  args: {
    label: 'Quantity',
    name: 'quantity',
    value: 42,
    helperText: 'Numeric value stored',
    onClick: () => alert('Open number picker'),
  },
}

/**
 * Boolean value
 */
export const WithBooleanValue: Story = {
  args: {
    label: 'Active Status',
    name: 'isActive',
    value: true,
    displayValue: 'Active',
    helperText: 'Boolean stored as "true"',
    onClick: () => alert('Toggle status'),
  },
}
