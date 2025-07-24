/**
 * Anchor stories for Storybook
 * Demonstrates all color roles, fontSize, fontWeight
 */
import type { Meta, StoryObj } from '@storybook/react'
import { Anchor } from './anchor'

const meta: Meta<typeof Anchor> = {
  title: 'Primitive/Anchor',
  component: Anchor,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
}
export default meta

type Story = StoryObj<typeof Anchor>

export const Primary: Story = {
  args: {
    href: '#',
    children: 'Primary Anchor',
    color: 'primary',
    fontSize: 'base',
    fontWeight: 'medium',
  },
}

export const Secondary: Story = {
  args: {
    href: '#',
    children: 'Secondary Anchor',
    color: 'secondary',
    fontSize: 'lg',
    fontWeight: 'bold',
  },
}

export const Ghost: Story = {
  args: {
    href: '#',
    children: 'Ghost Anchor',
    color: 'ghost',
    fontSize: 'sm',
    fontWeight: 'normal',
  },
}

export const Danger: Story = {
  args: {
    href: '#',
    children: 'Danger Anchor',
    color: 'danger',
    fontSize: 'xl',
    fontWeight: 'bold',
  },
}

export const Neutral: Story = {
  args: {
    href: '#',
    children: 'Neutral Anchor',
    color: 'neutral',
    fontSize: 'base',
    fontWeight: 'normal',
  },
}

export const FontUtilities: Story = {
  render: () => (
    <div className='flex gap-4'>
      <Anchor href='#' color='primary' fontSize='sm' fontWeight='normal'>
        Small
      </Anchor>
      <Anchor href='#' color='primary' fontSize='base' fontWeight='medium'>
        Medium
      </Anchor>
      <Anchor href='#' color='primary' fontSize='lg' fontWeight='bold'>
        Large
      </Anchor>
    </div>
  ),
}
