/**
 * PageLayout stories
 *
 * @group Layout
 * @description
 * The PageLayout component provides a consistent responsive container for Versaur apps.
 * Use the `type` prop to switch between desktop, tablet, and mobile breakpoints.
 */
import type { Meta, StoryObj } from '@storybook/react'
import { PageLayout } from './page-layout'

const meta: Meta<typeof PageLayout> = {
  title: 'Layout/PageLayout',
  component: PageLayout,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    type: {
      control: 'radio',
      options: ['desktop', 'tablet', 'mobile'],
      description: 'Breakpoint type for layout',
      defaultValue: 'desktop',
    },
    className: { control: false },
    children: { control: false },
  },
}
export default meta

type Story = StoryObj<typeof PageLayout>

export const Desktop: Story = {
  args: {
    type: 'desktop',
    children: 'Desktop layout (max-w-7xl)',
  },
}

export const Tablet: Story = {
  args: {
    type: 'tablet',
    children: 'Tablet layout (max-w-3xl)',
  },
}

export const Mobile: Story = {
  args: {
    type: 'mobile',
    children: 'Mobile layout (full width)',
  },
}
