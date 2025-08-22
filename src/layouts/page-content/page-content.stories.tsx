import type { Meta, StoryObj } from '@storybook/react'
import { PageContent } from './page-content'
import { Text } from '@/primitive/text'
import { NoResults } from '@/primitive/no-results'
import { Button } from '@/primitive/button'
import { TextInput } from '@/forms/text-input'
import { EmailInput } from '@/forms/email-input'
import { SearchInput } from '@/forms/search-input'
import { TextAreaInput } from '@/forms/textarea-input'
import { SearchIcon, UserPlus } from 'lucide-react'

/**
 * PageContent provides consistent horizontal spacing that matches the page-header
 * component, with additional vertical padding for proper content separation.
 * Perfect for creating cohesive page layouts when used alongside PageHeader.
 */
const meta = {
  title: 'Layouts/PageContent',
  component: PageContent,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
PageContent is a layout component designed to be a sibling of PageHeader. It provides:
- Consistent horizontal spacing matching PageHeader (px-4 sm:px-6)
- Additional vertical padding for content separation (py-6 sm:py-8)
- Mobile-first responsive design
- Full width container for all page content

Use PageContent to wrap your main page content for consistent layouts.
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: { type: 'text' },
      description: 'Content to be displayed inside the page content area',
    },
    className: {
      control: { type: 'text' },
      description: 'Additional CSS classes to apply to the component',
    },
  },
} satisfies Meta<typeof PageContent>

export default meta
type Story = StoryObj<typeof meta>

/**
 * Basic usage of PageContent with Versaur Text components.
 * Shows the default spacing and responsive behavior using semantic typography.
 */
export const Default: Story = {
  args: {
    children: (
      <div className='space-y-6'>
        <div className='prose'>
          <Text as='p' fontSize='base' color='ghost'>
            This is the main content area of your page. PageContent provides
            consistent horizontal spacing that matches the PageHeader component,
            ensuring a cohesive layout across your application.
          </Text>
        </div>
        <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
          <div className='p-4 bg-neutral rounded-lg'>
            <Text as='h3' fontSize='lg' fontWeight='semibold' className='mb-2'>
              Card 1
            </Text>
            <Text as='p' color='gray'>
              Some content in the first card using Versaur Text component.
            </Text>
          </div>
          <div className='p-4 bg-neutral rounded-lg'>
            <Text as='h3' fontSize='lg' fontWeight='semibold' className='mb-2'>
              Card 2
            </Text>
            <Text as='p' color='gray'>
              Some content in the second card with semantic typography.
            </Text>
          </div>
          <div className='p-4 bg-neutral rounded-lg'>
            <Text as='h3' fontSize='lg' fontWeight='semibold' className='mb-2'>
              Card 3
            </Text>
            <Text as='p' color='gray'>
              Some content in the third card demonstrating consistency.
            </Text>
          </div>
        </div>
      </div>
    ),
  },
}

/**
 * PageContent with Versaur form components, showing how it works with
 * interactive components and maintains proper spacing.
 */
export const WithFormElements: Story = {
  args: {
    children: (
      <div className='space-y-8'>
        <div>
          <Text as='h2' fontSize='xl' fontWeight='semibold' className='mb-4'>
            User Settings
          </Text>
          <div className='space-y-6 max-w-lg'>
            <TextInput
              label='Full Name'
              placeholder='Enter your full name'
              variant='primary'
            />
            <EmailInput
              label='Email Address'
              placeholder='Enter your email'
              variant='primary'
            />
            <TextAreaInput
              label='Bio'
              placeholder='Tell us about yourself'
              variant='primary'
              minRows={4}
              maxRows={6}
            />
            <div className='flex gap-3'>
              <Button variant='primary' size='md'>
                Save Changes
              </Button>
              <Button variant='ghost' size='md'>
                Cancel
              </Button>
            </div>
          </div>
        </div>
      </div>
    ),
  },
}

/**
 * PageContent with NoResults component, showing how it handles
 * empty states with proper spacing and semantic structure.
 */
export const WithNoResults: Story = {
  args: {
    children: (
      <NoResults
        icon={SearchIcon}
        title='No Content Yet'
        subtitle='This area is waiting for content. Add some items to get started.'
        action={
          <Button variant='primary' size='md'>
            Get Started
          </Button>
        }
      />
    ),
  },
}

/**
 * PageContent with search and data display, demonstrating how it works
 * with complex layouts including search functionality.
 */
export const WithSearchAndData: Story = {
  args: {
    children: (
      <div className='space-y-6'>
        <div className='flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center'>
          <Text as='h2' fontSize='xl' fontWeight='semibold'>
            Users
          </Text>
          <div className='flex gap-3 w-full sm:w-auto'>
            <SearchInput
              placeholder='Search users...'
              className='flex-1 sm:w-64'
            />
            <Button variant='primary' size='md'>
              <UserPlus className='w-4 h-4 mr-2' />
              Add User
            </Button>
          </div>
        </div>
        <div className='overflow-x-auto'>
          <table className='w-full border-collapse'>
            <thead>
              <tr className='border-b border-border'>
                <th className='text-left py-3 px-4'>
                  <Text as='span' fontWeight='medium'>
                    Name
                  </Text>
                </th>
                <th className='text-left py-3 px-4'>
                  <Text as='span' fontWeight='medium'>
                    Email
                  </Text>
                </th>
                <th className='text-left py-3 px-4'>
                  <Text as='span' fontWeight='medium'>
                    Role
                  </Text>
                </th>
                <th className='text-left py-3 px-4'>
                  <Text as='span' fontWeight='medium'>
                    Status
                  </Text>
                </th>
                <th className='text-left py-3 px-4'>
                  <Text as='span' fontWeight='medium'>
                    Actions
                  </Text>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className='border-b border-border'>
                <td className='py-3 px-4'>
                  <Text as='span'>John Doe</Text>
                </td>
                <td className='py-3 px-4'>
                  <Text as='span' color='gray'>
                    john@example.com
                  </Text>
                </td>
                <td className='py-3 px-4'>
                  <Text as='span'>Admin</Text>
                </td>
                <td className='py-3 px-4'>
                  <span className='px-2 py-1 bg-success-soft text-success-bold rounded text-sm'>
                    <Text as='span' fontSize='sm' color='success'>
                      Active
                    </Text>
                  </span>
                </td>
                <td className='py-3 px-4'>
                  <Button variant='ghost' size='sm'>
                    Edit
                  </Button>
                </td>
              </tr>
              <tr className='border-b border-border'>
                <td className='py-3 px-4'>
                  <Text as='span'>Jane Smith</Text>
                </td>
                <td className='py-3 px-4'>
                  <Text as='span' color='gray'>
                    jane@example.com
                  </Text>
                </td>
                <td className='py-3 px-4'>
                  <Text as='span'>Editor</Text>
                </td>
                <td className='py-3 px-4'>
                  <span className='px-2 py-1 bg-warning-soft text-warning-bold rounded text-sm'>
                    <Text as='span' fontSize='sm' color='warning'>
                      Pending
                    </Text>
                  </span>
                </td>
                <td className='py-3 px-4'>
                  <Button variant='ghost' size='sm'>
                    Edit
                  </Button>
                </td>
              </tr>
              <tr className='border-b border-border'>
                <td className='py-3 px-4'>
                  <Text as='span'>Mike Johnson</Text>
                </td>
                <td className='py-3 px-4'>
                  <Text as='span' color='gray'>
                    mike@example.com
                  </Text>
                </td>
                <td className='py-3 px-4'>
                  <Text as='span'>Viewer</Text>
                </td>
                <td className='py-3 px-4'>
                  <span className='px-2 py-1 bg-success-soft text-success-bold rounded text-sm'>
                    <Text as='span' fontSize='sm' color='success'>
                      Active
                    </Text>
                  </span>
                </td>
                <td className='py-3 px-4'>
                  <Button variant='ghost' size='sm'>
                    Edit
                  </Button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    ),
  },
}
