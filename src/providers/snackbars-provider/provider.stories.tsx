/**
 * SnackbarsProvider stories
 *
 * Demonstrates usage of the SnackbarsProvider and useSnackbars hook.
 * Shows stacking, color variants, and responsive placement.
 */
import { SnackbarsProvider, useSnackbars } from '.'
import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '@/primitive/button'

const meta: Meta = {
  title: 'Providers/SnackbarsProvider',
  component: SnackbarsProvider,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Provider for managing snackbars globally. Use the `useSnackbars` hook to show snackbars from anywhere in the tree.',
      },
    },
  },
}
export default meta

type Story = StoryObj<typeof SnackbarsProvider>

const DemoContent = () => {
  const { showSnack } = useSnackbars()
  return (
    <div className='flex flex-col gap-4 p-8'>
      <Button onClick={() => showSnack('success', 'Success!')}>
        Show Success
      </Button>
      <Button onClick={() => showSnack('info', 'Info!')}>Show Info</Button>
      <Button onClick={() => showSnack('warning', 'Warning!')}>
        Show Warning
      </Button>
      <Button onClick={() => showSnack('danger', 'Danger!')}>
        Show Danger
      </Button>
      <Button
        onClick={() => {
          showSnack('success', 'Stacked 1')
          showSnack('info', 'Stacked 2')
          showSnack('warning', 'Stacked 3')
        }}
      >
        Show Stack
      </Button>
      <Button
        onClick={() => {
          showSnack('success', 'Custom Duration', { duration: 150000 })
        }}
      >
        Show Custom Duration
      </Button>
    </div>
  )
}

export const Basic: Story = {
  render: () => (
    <SnackbarsProvider>
      <DemoContent />
    </SnackbarsProvider>
  ),
  parameters: {
    docs: {
      storyDescription:
        'Wrap your app with SnackbarsProvider. Use the useSnackbars hook to show snackbars. Stacking and color variants are supported.',
    },
  },
}
