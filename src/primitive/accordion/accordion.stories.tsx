import type { Meta, StoryObj } from '@storybook/react'
import { Accordion } from './accordion'
import { Button } from '@/primitive/button'

const meta: Meta<typeof Accordion> = {
  title: 'Primitive/Accordion',
  component: Accordion,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A collapsible content container with smooth animations and accessibility support. Supports compound pattern for flexible composition.',
      },
    },
  },
  argTypes: {
    title: {
      control: false,
      description: 'Title content (ReactNode)',
    },
    subtitle: {
      control: false,
      description: 'Optional subtitle content (ReactNode)',
    },
    isDefaultOpen: {
      control: 'boolean',
      description: 'Whether the accordion is open by default',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the accordion is disabled',
    },
    children: {
      control: false,
      description: 'Content to show when expanded',
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    title: <Accordion.Title>Default Accordion</Accordion.Title>,
    children: (
      <div className='space-y-4'>
        <p>
          This is the default accordion content. It can contain any React
          content including text, components, and other elements.
        </p>
        <p>
          The accordion uses smooth CSS transitions for expand/collapse
          animations.
        </p>
      </div>
    ),
  },
}

export const WithSubtitle: Story = {
  args: {
    title: <Accordion.Title>Settings</Accordion.Title>,
    subtitle: (
      <Button variant='ghost' size='sm'>
        Clear
      </Button>
    ),
    children: (
      <div className='space-y-4'>
        <p>
          This accordion includes a subtitle area that can contain actions or
          secondary information.
        </p>
        <p>
          The Clear button in this example could be used to reset form values or
          clear data.
        </p>
      </div>
    ),
  },
}

export const DefaultOpen: Story = {
  args: {
    title: <Accordion.Title>Open by Default</Accordion.Title>,
    isDefaultOpen: true,
    children: (
      <div className='space-y-4'>
        <p>This accordion starts in the open state by default.</p>
        <p>Use the isDefaultOpen prop to control the initial state.</p>
      </div>
    ),
  },
}

export const Disabled: Story = {
  args: {
    title: <Accordion.Title>Disabled Accordion</Accordion.Title>,
    disabled: true,
    children: (
      <div>
        <p>
          This content won't be accessible because the accordion is disabled.
        </p>
      </div>
    ),
  },
}

export const MultipleAccordions: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Multiple accordions can be used together to create sections.',
      },
    },
  },
  render: () => (
    <div className='w-96 space-y-2'>
      <Accordion title={<Accordion.Title>First Section</Accordion.Title>}>
        <p>Content for the first accordion section.</p>
      </Accordion>

      <Accordion
        title={<Accordion.Title>Second Section</Accordion.Title>}
        subtitle={
          <Button variant='ghost' size='sm'>
            Action
          </Button>
        }
      >
        <div className='space-y-2'>
          <p>Content for the second accordion section.</p>
          <p>This one has a subtitle with an action button.</p>
        </div>
      </Accordion>

      <Accordion
        title={<Accordion.Title>Third Section</Accordion.Title>}
        isDefaultOpen={true}
      >
        <p>
          This accordion starts open and contains the third section content.
        </p>
      </Accordion>
    </div>
  ),
}

export const CustomContent: Story = {
  args: {
    title: <Accordion.Title>Custom Content</Accordion.Title>,
    children: (
      <Accordion.Content>
        <div className='space-y-4'>
          <h5 className='font-semibold text-gray-900'>
            Advanced Configuration
          </h5>
          <div className='grid grid-cols-2 gap-4'>
            <div className='p-3 bg-gray-50 rounded'>
              <p className='font-medium'>Option A</p>
              <p className='text-sm text-gray-600'>Description for option A</p>
            </div>
            <div className='p-3 bg-gray-50 rounded'>
              <p className='font-medium'>Option B</p>
              <p className='text-sm text-gray-600'>Description for option B</p>
            </div>
          </div>
        </div>
      </Accordion.Content>
    ),
  },
}
