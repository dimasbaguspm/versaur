/**
 * TopBar stories for Storybook
 * Group: Layout
 * Demonstrates TopBar compound usage, variants, and navigation items
 * Icons from lucide-react (dev only)
 */
import { BellIcon, BetweenHorizonalStartIcon, ZapIcon } from 'lucide-react'
import { Avatar } from '../avatar'
import { ButtonIcon } from '../button-icon'
import { TopBar } from './index'

export default {
  title: 'Layout/TopBar',
  component: TopBar,
  parameters: {
    layout: 'fullscreen',
  },
}

export const Default = () => (
  <TopBar>
    <TopBar.Leading>
      <Avatar size='sm' shape='rounded' variant='primary'>
        <ZapIcon />
      </Avatar>
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
          variant='outline'
        />
        <ButtonIcon
          as={BetweenHorizonalStartIcon}
          size='sm'
          aria-label='Settings'
          variant='outline'
        />
      </TopBar.Actions>
      <Avatar size='sm'>DM</Avatar>
    </TopBar.Trailing>
  </TopBar>
)
