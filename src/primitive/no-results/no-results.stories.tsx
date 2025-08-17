import type { Meta, StoryObj } from '@storybook/react'
import { SearchIcon, FolderIcon, UsersIcon, FileTextIcon } from 'lucide-react'
import { NoResults } from './no-results'
import { Button } from '@/primitive/button'

/**
 * NoResults displays an empty state with icon, title, subtitle, and optional action.
 * Perfect for search results, filtered lists, or any empty data scenarios.
 * Uses semantic HTML with proper headings and ARIA labels for accessibility.
 */
const meta: Meta<typeof NoResults> = {
  title: 'Primitive/NoResults',
  component: NoResults,
  parameters: {
    docs: {
      description: {
        component:
          'A flexible empty state component that displays when no content is available. Includes customizable icon, messaging, and action elements with proper semantic structure.',
      },
    },
  },
  argTypes: {
    icon: {
      control: false,
      description: 'Icon component to display (from lucide-react)',
    },
    title: {
      control: 'text',
      description: 'Main heading text for the empty state',
    },
    subtitle: {
      control: 'text',
      description: 'Secondary descriptive text',
    },
    action: {
      control: false,
      description: 'Optional action element (typically a Button)',
    },
  },
}

export default meta
type Story = StoryObj<typeof NoResults>

/**
 * Basic NoResults with just icon and title - minimal empty state display
 */
export const Default: Story = {
  args: {
    icon: SearchIcon,
    title: 'No results found',
  },
}

/**
 * Complete NoResults with all props - full empty state with action
 */
export const WithSubtitleAndAction: Story = {
  args: {
    icon: SearchIcon,
    title: 'No results found',
    subtitle: "We couldn't find any items matching your search criteria.",
    action: <Button variant='neutral'>Clear Search</Button>,
  },
}

/**
 * Search-specific empty state with contextual messaging
 */
export const SearchEmpty: Story = {
  args: {
    icon: SearchIcon,
    title: 'No groups found',
    subtitle: 'We couldn\'t find any groups matching "design team"',
    action: <Button variant='neutral'>Clear Search</Button>,
  },
}

/**
 * File/folder empty state for directory listings
 */
export const EmptyFolder: Story = {
  args: {
    icon: FolderIcon,
    title: 'This folder is empty',
    subtitle: 'Upload files or create new folders to get started.',
    action: <Button variant='primary'>Upload Files</Button>,
  },
}

/**
 * Team/users empty state for member lists
 */
export const NoTeamMembers: Story = {
  args: {
    icon: UsersIcon,
    title: 'No team members',
    subtitle: 'Invite colleagues to collaborate on this project.',
    action: <Button variant='primary'>Invite Members</Button>,
  },
}

/**
 * Document empty state with contextual action
 */
export const NoDocuments: Story = {
  args: {
    icon: FileTextIcon,
    title: 'No documents found',
    subtitle: 'Create your first document to get started with writing.',
    action: <Button variant='primary'>Create Document</Button>,
  },
}

/**
 * Custom styling example with additional className
 */
export const GreyBackground: Story = {
  args: {
    icon: SearchIcon,
    title: 'No results found',
    subtitle: 'Try adjusting your filters or search terms.',
    action: <Button variant='neutral'>Reset Filters</Button>,
    hasGrayBackground: true,
  },
}
