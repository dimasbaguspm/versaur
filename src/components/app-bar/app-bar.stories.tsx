/**
 * AppBar stories for Versaur UI
 *
 * - Demonstrates layout, variants, and composition
 * - Icons from lucide-react (dev only)
 */
import type { Meta, StoryObj } from '@storybook/react'
import { ArrowLeft, EllipsisVerticalIcon, PrinterIcon } from 'lucide-react'
import { AppBar } from './app-bar'
import { ButtonIcon } from '../button-icon'
import { Avatar } from '../avatar'

const meta = {
  title: 'Layout/AppBar',
  component: AppBar,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof AppBar>

export default meta

type Story = StoryObj<typeof AppBar>

export const Home: Story = {
  render: () => (
    <AppBar variant='tertiary'>
      <AppBar.Leading>
        <Avatar size='sm'>DM</Avatar>
      </AppBar.Leading>
      <AppBar.Center placement='center'>
        <AppBar.Headline>Spenicle</AppBar.Headline>
      </AppBar.Center>
      <AppBar.Trailing>
        <ButtonIcon
          as={EllipsisVerticalIcon}
          variant='neutral-ghost'
          size='sm'
          shape='circle'
          aria-label='More'
        />
      </AppBar.Trailing>
    </AppBar>
  ),
}

export const Detail: Story = {
  render: () => (
    <AppBar>
      <AppBar.Leading>
        <ButtonIcon
          as={ArrowLeft}
          variant='neutral-ghost'
          aria-label='Open navigation'
          size='lg'
        />
      </AppBar.Leading>
      <AppBar.Center>
        <AppBar.Headline>Transaction</AppBar.Headline>
        <AppBar.Subtitle>Period 29 May - 3 July</AppBar.Subtitle>
      </AppBar.Center>
      <AppBar.Trailing>
        <ButtonIcon
          variant='primary'
          size='sm'
          shape='circle'
          aria-label='Print'
          as={PrinterIcon}
        />
      </AppBar.Trailing>
    </AppBar>
  ),
}
