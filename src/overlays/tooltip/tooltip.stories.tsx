import type { Meta, StoryObj } from '@storybook/react'
import { Tooltip } from './tooltip'

const meta: Meta<typeof Tooltip> = {
  title: 'Overlays/Tooltip',
  component: Tooltip,
  argTypes: {
    position: {
      control: 'select',
      options: ['auto', 'top', 'bottom', 'left', 'right'],
      description: 'Tooltip position',
      table: { type: { summary: 'auto | top | bottom | left | right' } },
    },
    delay: {
      control: 'number',
      description: 'Delay in ms before showing tooltip',
      table: { type: { summary: 'number' } },
    },
    popoverClassName: {
      control: 'text',
      description: 'Custom class for tooltip popover',
      table: { type: { summary: 'string' } },
    },
    content: {
      control: 'text',
      description: 'Tooltip content',
      table: { type: { summary: 'ReactNode' } },
    },
    children: {
      control: 'text',
      description: 'Trigger element',
      table: { type: { summary: 'ReactNode' } },
    },
  },
  args: {
    content: 'This is a tooltip',
    position: 'auto',
    popoverClassName: '',
  },
}

export default meta

type Story = StoryObj<typeof Tooltip>

/**
 * Basic usage of Tooltip with default settings
 */
export const Default: Story = {
  args: {
    content: 'This is a tooltip',
  },
  render: args => (
    <Tooltip {...args}>
      <button className='bg-primary text-white px-4 py-2 rounded'>
        Hover me
      </button>
    </Tooltip>
  ),
}

/**
 * Tooltip with all position variants
 */
export const Position: Story = {
  render: args => (
    <div className='flex gap-8 flex-wrap items-center justify-center py-8'>
      <Tooltip {...args} position='top' content='Top position'>
        <button className='bg-secondary text-white px-4 py-2 rounded'>
          Top
        </button>
      </Tooltip>
      <Tooltip {...args} position='bottom' content='Bottom position'>
        <button className='bg-secondary text-white px-4 py-2 rounded'>
          Bottom
        </button>
      </Tooltip>
      <Tooltip {...args} position='left' content='Left position'>
        <button className='bg-secondary text-white px-4 py-2 rounded'>
          Left
        </button>
      </Tooltip>
      <Tooltip {...args} position='right' content='Right position'>
        <button className='bg-secondary text-white px-4 py-2 rounded'>
          Right
        </button>
      </Tooltip>
    </div>
  ),
}

/**
 * Tooltip with delay variants
 */
export const Delay: Story = {
  args: {
    position: 'auto',
  },
  render: args => (
    <div className='flex gap-8 flex-wrap items-center justify-center py-8'>
      <Tooltip {...args} delay={0} content='No delay'>
        <button className='bg-tertiary text-white px-4 py-2 rounded'>
          No delay
        </button>
      </Tooltip>
      <Tooltip {...args} delay={300} content='300ms delay'>
        <button className='bg-tertiary text-white px-4 py-2 rounded'>
          300ms delay
        </button>
      </Tooltip>
      <Tooltip {...args} delay={1000} content='1s delay'>
        <button className='bg-tertiary text-white px-4 py-2 rounded'>
          1s delay
        </button>
      </Tooltip>
    </div>
  ),
}
