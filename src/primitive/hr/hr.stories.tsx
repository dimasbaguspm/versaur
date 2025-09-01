import type { Meta, StoryObj } from '@storybook/react'
import { Hr } from './hr'

const meta: Meta<typeof Hr> = {
  title: 'Primitive/Hr',
  component: Hr,
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    hasMargin: {
      control: 'boolean',
      description: 'Whether to include bottom margin (mb-4)',
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

/**
 * Default horizontal line separator
 */
export const Default: Story = {}

/**
 * Horizontal line with bottom margin for spacing
 */
export const WithMargin: Story = {
  args: {
    hasMargin: true,
  },
}

/**
 * Example showing Hr usage in content sections
 */
export const InContent: Story = {
  render: () => (
    <div className='space-y-4'>
      <div>
        <h3 className='text-lg font-semibold'>Section 1</h3>
        <p className='text-sm text-foreground-light'>
          This is some content in the first section.
        </p>
      </div>
      <Hr hasMargin />
      <div>
        <h3 className='text-lg font-semibold'>Section 2</h3>
        <p className='text-sm text-foreground-light'>
          This is some content in the second section.
        </p>
      </div>
      <Hr hasMargin />
      <div>
        <h3 className='text-lg font-semibold'>Section 3</h3>
        <p className='text-sm text-foreground-light'>
          This is some content in the third section.
        </p>
      </div>
    </div>
  ),
}
