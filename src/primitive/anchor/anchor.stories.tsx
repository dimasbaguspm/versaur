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
    quiet: false,
  },
}

export const PrimaryQuiet: Story = {
  args: {
    href: '#',
    children: 'Primary Quiet Anchor',
    color: 'primary',
    fontSize: 'base',
    fontWeight: 'medium',
    quiet: true,
  },
}

export const Secondary: Story = {
  args: {
    href: '#',
    children: 'Secondary Anchor',
    color: 'secondary',
    fontSize: 'lg',
    fontWeight: 'bold',
    quiet: false,
  },
}

export const SecondaryQuiet: Story = {
  args: {
    href: '#',
    children: 'Secondary Quiet Anchor',
    color: 'secondary',
    fontSize: 'lg',
    fontWeight: 'bold',
    quiet: true,
  },
}

export const Ghost: Story = {
  args: {
    href: '#',
    children: 'Ghost Anchor',
    color: 'ghost',
    fontSize: 'sm',
    fontWeight: 'normal',
    quiet: false,
  },
}

export const GhostQuiet: Story = {
  args: {
    href: '#',
    children: 'Ghost Quiet Anchor',
    color: 'ghost',
    fontSize: 'sm',
    fontWeight: 'normal',
    quiet: true,
  },
}

export const Danger: Story = {
  args: {
    href: '#',
    children: 'Danger Anchor',
    color: 'danger',
    fontSize: 'xl',
    fontWeight: 'bold',
    quiet: false,
  },
}

export const DangerQuiet: Story = {
  args: {
    href: '#',
    children: 'Danger Quiet Anchor',
    color: 'danger',
    fontSize: 'xl',
    fontWeight: 'bold',
    quiet: true,
  },
}

export const Neutral: Story = {
  args: {
    href: '#',
    children: 'Neutral Anchor',
    color: 'neutral',
    fontSize: 'base',
    fontWeight: 'normal',
    quiet: false,
  },
}

export const NeutralQuiet: Story = {
  args: {
    href: '#',
    children: 'Neutral Quiet Anchor',
    color: 'neutral',
    fontSize: 'base',
    fontWeight: 'normal',
    quiet: true,
  },
}

export const FontUtilities: Story = {
  render: () => (
    <div className='flex gap-4'>
      <Anchor
        href='#'
        color='primary'
        fontSize='sm'
        fontWeight='normal'
        quiet={false}
      >
        Small
      </Anchor>
      <Anchor
        href='#'
        color='primary'
        fontSize='base'
        fontWeight='medium'
        quiet={false}
      >
        Medium
      </Anchor>
      <Anchor
        href='#'
        color='primary'
        fontSize='lg'
        fontWeight='bold'
        quiet={false}
      >
        Large
      </Anchor>
      <Anchor
        href='#'
        color='primary'
        fontSize='lg'
        fontWeight='bold'
        quiet={true}
      >
        Large Quiet
      </Anchor>
    </div>
  ),
}
