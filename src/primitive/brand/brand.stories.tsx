/**
 * Brand (App Identity) Component Stories
 *
 * Shows the app icon and name for Spenicle.
 *
 * - Follows Versaur design system
 * - Supports size variants
 * - Used for branding, navigation, splash, etc.
 */
import type { Meta, StoryObj } from '@storybook/react'
import { Brand } from './brand'

const meta: Meta<typeof Brand> = {
  title: 'Primitive/Brand',
  component: Brand,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    name: {
      control: { type: 'select' },
      options: ['spenicle', 'hub', 'notunic'], // Extend this list as more apps are added
      description: 'The app name to display (predefined)',
    },
  },
}

export default meta

type Story = StoryObj<typeof Brand>

export const Default: Story = {
  args: {
    name: 'spenicle',
    size: 'md',
    shape: 'rounded',
  },
  render: args => <Brand {...args} />,
}

export const Name: Story = {
  render: () => (
    <div className='flex gap-6 items-center'>
      <Brand name='spenicle' size='md' shape='square' />
      <Brand name='spenicle' size='md' shape='rounded' />
      <Brand name='spenicle' size='md' shape='circle' />
      <Brand name='hub' size='md' shape='square' />
      <Brand name='hub' size='md' shape='rounded' />
      <Brand name='hub' size='md' shape='circle' />
      <Brand name='notunic' size='md' shape='square' />
      <Brand name='notunic' size='md' shape='rounded' />
      <Brand name='notunic' size='md' shape='circle' />
    </div>
  ),
}

export const Sizes: Story = {
  render: () => (
    <div className='flex flex-col gap-4'>
      <Brand size='xs' name='spenicle' />
      <Brand size='sm' name='spenicle' />
      <Brand size='md' name='spenicle' />
      <Brand size='lg' name='spenicle' />
      <Brand size='xl' name='spenicle' />
      <Brand size='xs' name='hub' />
      <Brand size='sm' name='hub' />
      <Brand size='md' name='hub' />
      <Brand size='lg' name='hub' />
      <Brand size='xl' name='hub' />
      <Brand size='xs' name='notunic' />
      <Brand size='sm' name='notunic' />
      <Brand size='md' name='notunic' />
      <Brand size='lg' name='notunic' />
      <Brand size='xl' name='notunic' />
    </div>
  ),
}
