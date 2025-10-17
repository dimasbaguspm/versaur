/**
 * AppBar stories for Versaur UI
 *
 * - Demonstrates layout, variants, and composition
 * - Icons from lucide-react (dev only)
 * - AppBar.Bottom always renders on a new line, regardless of order, via data attribute and CSS
 */
import type { Meta, StoryObj } from '@storybook/react'
import { ArrowLeft, EllipsisVerticalIcon, PrinterIcon } from 'lucide-react'
import { AppBar } from './app-bar'
import { ButtonIcon } from '@/primitive/button-icon'
import { Avatar } from '@/primitive/avatar'
import { Tabs } from '@/navigation/tabs'

const meta = {
  title: 'Layouts/AppBar',
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
          variant='ghost'
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
          variant='ghost'
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

export const WithBottom: Story = {
  render: () => (
    <AppBar>
      <AppBar.Leading>
        <ButtonIcon
          as={ArrowLeft}
          variant='ghost'
          aria-label='Back'
          size='lg'
        />
      </AppBar.Leading>
      <AppBar.Center>
        <AppBar.Headline>Anywhere Demo</AppBar.Headline>
        <AppBar.Subtitle>AppBar.Bottom can be anywhere</AppBar.Subtitle>
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
      <AppBar.Bottom>
        <Tabs value='entries' onValueChange={() => {}}>
          <Tabs.Trigger value='detail'>Details</Tabs.Trigger>
          <Tabs.Trigger value='entries'>Entries</Tabs.Trigger>
        </Tabs>
      </AppBar.Bottom>
    </AppBar>
  ),
}
