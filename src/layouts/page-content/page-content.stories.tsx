/**
 * PageContent stories
 *
 * @group Layout
 * @description
 * The PageContent component serves as a parent wrapper for main content,
 * sitting in the body region or below the page header. It provides flexible
 * sizing, column templates, and background color options.
 */
import type { Meta, StoryObj } from '@storybook/react'
import { PageContent } from './page-content'

const meta: Meta<typeof PageContent> = {
  title: 'Layouts/PageContent',
  component: PageContent,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    size: {
      control: 'radio',
      options: ['fluid', 'wide', 'narrow'],
    },
    template: {
      control: 'radio',
      options: [
        'single-column',
        'two-column',
        'two-column-asymmetric-left',
        'two-column-asymmetric-right',
      ],
    },
  },
  decorators: [
    Story => (
      <div className='min-h-screen'>
        <Story />
      </div>
    ),
  ],
}
export default meta

type Story = StoryObj<typeof PageContent>

const SampleContent = ({ label = 'Content' }: { label?: string }) => (
  <div className='rounded-lg bg-primary-soft p-6 text-foreground'>
    <h2 className='mb-2 text-xl font-semibold'>{label}</h2>
    <p className='text-foreground-light'>
      This is sample content to demonstrate the layout behavior.
    </p>
  </div>
)

/**
 * Default PageContent with fluid size, single column, and white background
 */
export const Default: Story = {
  args: {
    children: <SampleContent />,
  },
}

/**
 * Wide container with centered content (desktop screens)
 */
export const WideContainer: Story = {
  args: {
    size: 'wide',
    children: <SampleContent label='Wide Container Content' />,
  },
}

/**
 * Narrow container with centered content (mobile screens)
 */
export const NarrowContainer: Story = {
  args: {
    size: 'narrow',
    children: <SampleContent label='Narrow Container Content' />,
  },
}

/**
 * Two equal columns layout
 */
export const TwoColumn: Story = {
  args: {
    size: 'wide',
    template: 'two-column',
    children: (
      <>
        <SampleContent label='Column 1' />
        <SampleContent label='Column 2' />
      </>
    ),
  },
}

/**
 * Two columns with left column wider (2:1 ratio)
 */
export const TwoColumnAsymmetricLeft: Story = {
  args: {
    size: 'wide',
    template: 'two-column-asymmetric-left',
    children: (
      <>
        <div className='md:col-span-2'>
          <SampleContent label='Main Content (Wider)' />
        </div>
        <SampleContent label='Sidebar' />
      </>
    ),
  },
}

/**
 * Two columns with right column wider (1:2 ratio)
 */
export const TwoColumnAsymmetricRight: Story = {
  args: {
    size: 'wide',
    template: 'two-column-asymmetric-right',
    children: (
      <>
        <SampleContent label='Sidebar' />
        <div className='md:col-span-2'>
          <SampleContent label='Main Content (Wider)' />
        </div>
      </>
    ),
  },
}

/**
 * Content with white background cards
 */
export const WhiteBackgroundCards: Story = {
  args: {
    size: 'wide',
    children: (
      <div className='rounded-lg bg-white p-6'>
        <h2 className='mb-2 text-xl font-semibold'>Content Card</h2>
        <p className='text-foreground-light'>
          Card content with white background.
        </p>
      </div>
    ),
  },
}
