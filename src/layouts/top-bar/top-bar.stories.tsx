/**
 * TopBar stories for Storybook
 * Group: Layout
 * Demonstrates TopBar compound usage, variants, and navigation items
 * Icons from lucide-react (dev only)
 */
import { BellIcon, BetweenHorizonalStartIcon } from 'lucide-react'
import { Avatar } from '@/primitive/avatar'
import { ButtonIcon } from '@/primitive/button-icon'
import { TopBar } from './index'
import { Brand } from '@/primitive'

export default {
  title: 'Layouts/TopBar',
  component: TopBar,
  parameters: {
    layout: 'fullscreen',
  },
}

export const Default = () => (
  <TopBar>
    <TopBar.Leading>
      <Brand name='spenicle' size='lg' shape='rounded' />
      <TopBar.Nav>
        <TopBar.NavItem active>Home</TopBar.NavItem>
        <TopBar.NavItem>Docs</TopBar.NavItem>
        <TopBar.NavItem>Pricing</TopBar.NavItem>
      </TopBar.Nav>
    </TopBar.Leading>
    <TopBar.Trailing>
      <TopBar.Actions>
        <ButtonIcon
          as={BellIcon}
          size='sm'
          aria-label='Notifications'
          variant='ghost'
        />
        <ButtonIcon
          as={BetweenHorizonalStartIcon}
          size='sm'
          aria-label='Settings'
          variant='ghost'
        />
      </TopBar.Actions>
      <Avatar size='sm'>DM</Avatar>
    </TopBar.Trailing>
  </TopBar>
)
