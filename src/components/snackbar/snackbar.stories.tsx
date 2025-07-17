/**\
 * Snackbar stories for Versaur UI
 * Group: Feedback & Notification
 * Demonstrates default, color variants, and action usage
 */
import type { Meta, StoryObj } from '@storybook/react'
import { Snackbar } from './snackbar'
import type { SnackbarProps } from './types'
import { Button } from '@/components/button/button'

const meta: Meta<typeof Snackbar> = {
  title: 'Components/Snackbar',
  component: Snackbar,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
}
export default meta

type Story = StoryObj<typeof Snackbar>

export const Default: Story = {
  args: {
    children: 'Single line snackbar with close',
    onClose: () => alert('Closed'),
  },
}

export const AllColors: Story = {
  render: () => (
    <div className='flex flex-col gap-4'>
      {['success', 'info', 'warning', 'danger'].map(color => (
        <Snackbar
          key={color}
          color={color as SnackbarProps['color']}
          onClose={() => alert('Closed')}
        >
          {color.charAt(0).toUpperCase() + color.slice(1)} snackbar
        </Snackbar>
      ))}
    </div>
  ),
}

export const WithAction: Story = {
  args: {
    children: 'Snackbar with action',
    action: (
      <Button
        size='sm'
        variant='neutral'
        onClick={() => alert('Action clicked')}
      >
        Undo
      </Button>
    ),
    onClose: () => alert('Closed'),
    color: 'success',
  },
}
