import type { Meta, StoryObj } from '@storybook/react'
import { ButtonGroup } from './button-group'
import { Button } from '@/primitive/button'

/**
 * ButtonGroup provides layout management for buttons with control over positioning,
 * alignment, and fluid behavior. It's designed to wrap Button components and manage
 * their positioning effectively.
 *
 * ## Features
 * - **Alignment control**: Position buttons with start, center, end, between, around, or evenly
 * - **Orientation**: Horizontal or vertical layout
 * - **Fluid behavior**: Make buttons expand to fill available space
 * - **Gap management**: Control spacing between buttons with predefined sizes
 * - **Overlay mode**: Single-line horizontal scrolling without wrapping
 * - **Accessibility**: Proper ARIA roles for screen readers
 *
 * ## Usage
 * Wrap Button components with ButtonGroup to control their layout and alignment.
 * Perfect for action groups, form controls, and navigation elements.
 */
const meta: Meta<typeof ButtonGroup> = {
  title: 'Layouts/ButtonGroup',
  component: ButtonGroup,
  parameters: {
    docs: {
      description: {
        component:
          'A flexible layout component for managing button positioning, alignment, and fluid behavior.',
      },
    },
  },
  argTypes: {
    alignment: {
      control: { type: 'select' },
      options: ['start', 'center', 'end', 'between', 'around', 'evenly'],
      description: 'Alignment of buttons within the group',
    },
    orientation: {
      control: { type: 'select' },
      options: ['horizontal', 'vertical'],
      description: 'Layout direction of the button group',
    },
    gap: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Size of the gap between buttons',
    },
    fluid: {
      control: { type: 'boolean' },
      description: 'Whether buttons should expand to fill available space',
    },
    overlay: {
      control: { type: 'boolean' },
      description:
        'Whether items should overlay in single line without wrapping',
    },
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof ButtonGroup>

/**
 * Default button group with horizontal layout and start alignment
 */
export const Default: Story = {
  render: args => (
    <ButtonGroup {...args}>
      <Button variant='primary'>Save</Button>
      <Button variant='ghost'>Cancel</Button>
    </ButtonGroup>
  ),
}

/**
 * Button group with space between alignment - common for navigation or form actions
 */
export const SpaceBetween: Story = {
  render: args => (
    <div style={{ width: '400px', border: '1px solid var(--color-border)' }}>
      <ButtonGroup {...args} alignment='between'>
        <Button variant='ghost'>Back</Button>
        <Button variant='primary'>Next</Button>
      </ButtonGroup>
    </div>
  ),
}

/**
 * Vertical button group - useful for sidebars or stacked actions
 */
export const Vertical: Story = {
  render: args => (
    <ButtonGroup {...args} orientation='vertical' gap='sm'>
      <Button variant='primary'>Create New</Button>
      <Button variant='outline'>Save Draft</Button>
      <Button variant='ghost'>Cancel</Button>
    </ButtonGroup>
  ),
}

/**
 * Fluid buttons that expand equally to fill available space
 */
export const Fluid: Story = {
  render: args => (
    <div style={{ width: '400px', border: '1px solid var(--color-border)' }}>
      <ButtonGroup {...args} fluid>
        <Button variant='primary'>Save</Button>
        <Button variant='ghost'>Cancel</Button>
      </ButtonGroup>
    </div>
  ),
}

/**
 * Overlay mode - buttons scroll horizontally without wrapping
 */
export const Overlay: Story = {
  render: args => (
    <div style={{ width: '300px', border: '1px solid var(--color-border)' }}>
      <ButtonGroup {...args} overlay>
        <Button variant='primary'>Save</Button>
        <Button variant='outline'>Save as Draft</Button>
        <Button variant='ghost'>Cancel</Button>
        <Button variant='destructive'>Delete</Button>
        <Button variant='outline'>Preview</Button>
      </ButtonGroup>
    </div>
  ),
}

/**
 * Real-world usage patterns showing different configurations
 */
export const RealWorldExamples: Story = {
  render: _args => (
    <div className='space-y-6 w-96'>
      {/* Form actions */}
      <div>
        <h3 className='mb-3 text-sm font-medium'>Form Actions</h3>
        <ButtonGroup alignment='end' gap='sm'>
          <Button variant='ghost' size='sm'>
            Reset
          </Button>
          <Button variant='primary' size='sm'>
            Submit
          </Button>
        </ButtonGroup>
      </div>

      {/* Navigation */}
      <div>
        <h3 className='mb-3 text-sm font-medium'>Navigation</h3>
        <ButtonGroup alignment='between'>
          <Button variant='ghost'>← Previous</Button>
          <Button variant='primary'>Next →</Button>
        </ButtonGroup>
      </div>

      {/* Vertical action menu */}
      <div>
        <h3 className='mb-3 text-sm font-medium'>Vertical Action Menu</h3>
        <ButtonGroup orientation='vertical' gap='sm'>
          <Button variant='ghost' className='justify-start'>
            Edit Profile
          </Button>
          <Button variant='ghost' className='justify-start'>
            Settings
          </Button>
          <Button variant='ghost' className='justify-start'>
            Help & Support
          </Button>
        </ButtonGroup>
      </div>
    </div>
  ),
}
