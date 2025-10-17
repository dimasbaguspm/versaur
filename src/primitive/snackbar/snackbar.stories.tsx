/**\
 * Snackbar stories for Versaur UI
 * Group: Feedback & Notification
 * Demonstrates default, color variants, and action usage
 */
import type { Meta, StoryObj } from '@storybook/react'
import { Snackbar } from './snackbar'
import type { SnackbarProps } from './types'
import { ButtonIcon } from '../button-icon'
import { CopyIcon } from 'lucide-react'

const meta: Meta<typeof Snackbar> = {
  title: 'Primitive/Snackbar',
  component: Snackbar,
  tags: ['autodocs'],
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
      <ButtonIcon as={CopyIcon} aria-label='Copy' size='sm' variant='outline' />
    ),
    onClose: () => alert('Closed'),
    color: 'success',
  },
}
