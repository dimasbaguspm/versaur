/**
 * PageLayout stories for Storybook
 * Group: Layout
 * Demonstrates PageLayout compound usage with different region combinations
 * PageLayout provides page-level layout structure between header and content
 */
import type { Meta, StoryObj } from '@storybook/react'
import { PageLayout } from './page-layout'
import { PageHeader } from '@/layouts/page-header'
import { PageContent } from '@/layouts/page-content'
import { Button, Badge } from '@/primitive'
import { Breadcrumbs } from '@/navigation/breadcrumbs'
import { PlusIcon } from 'lucide-react'

const meta: Meta<typeof PageLayout> = {
  title: 'Layouts/PageLayout',
  component: PageLayout,
  parameters: {
    layout: 'fullscreen',
  },
}
export default meta

type Story = StoryObj<typeof PageLayout>

/**
 * Sample content component to demonstrate layout behavior
 */
const SampleContent = ({ label = 'Content' }: { label?: string }) => (
  <div className='mb-6 rounded-lg bg-primary-soft p-6 text-foreground'>
    <h2 className='mb-2 text-xl font-semibold'>{label}</h2>
    <p className='text-foreground-light'>
      This is sample content to demonstrate the page layout behavior.
    </p>
  </div>
)

/**
 * Basic usage with white backgrounds
 * Demonstrates simple page layout with header and content regions
 */
export const Basic: Story = {
  render: function BasicStory() {
    return (
      <PageLayout>
        <PageLayout.HeaderRegion>
          <PageHeader
            size='wide'
            title='Page Title'
            subtitle='A brief description of this page'
          />
        </PageLayout.HeaderRegion>
        <PageLayout.ContentRegion>
          <PageContent size='wide'>
            {Array.from({ length: 5 }).map((_, idx) => (
              <SampleContent key={idx} label={`Section ${idx + 1}`} />
            ))}
          </PageContent>
        </PageLayout.ContentRegion>
      </PageLayout>
    )
  },
}

/**
 * With margins
 * Demonstrates page layout with horizontal margins applied
 */
export const WithMargins: Story = {
  render: function WithMarginsStory() {
    return (
      <PageLayout hasMargin>
        <PageLayout.HeaderRegion>
          <PageHeader
            size='wide'
            title='Page with Margins'
            subtitle='Notice the horizontal margins on the layout'
          />
        </PageLayout.HeaderRegion>
        <PageLayout.ContentRegion>
          <PageContent size='wide'>
            {Array.from({ length: 5 }).map((_, idx) => (
              <SampleContent key={idx} label={`Section ${idx + 1}`} />
            ))}
          </PageContent>
        </PageLayout.ContentRegion>
      </PageLayout>
    )
  },
}

/**
 * Gray header, white content
 * Demonstrates different background colors for header and content regions
 */
export const GrayHeaderWhiteContent: Story = {
  render: function GrayHeaderWhiteContentStory() {
    return (
      <PageLayout>
        <PageLayout.HeaderRegion backgroundColor='gray'>
          <PageHeader
            size='wide'
            title='Dashboard'
            subtitle='Monitor your metrics and performance'
            breadcrumbs={
              <Breadcrumbs>
                <Breadcrumbs.Item href='/'>Home</Breadcrumbs.Item>
                <Breadcrumbs.Item href='/analytics'>Analytics</Breadcrumbs.Item>
                <Breadcrumbs.Item isCurrent>Dashboard</Breadcrumbs.Item>
              </Breadcrumbs>
            }
            badges={
              <>
                <Badge color='success' size='sm'>
                  Active
                </Badge>
                <Badge color='info' size='sm'>
                  Beta
                </Badge>
              </>
            }
            actions={
              <Button variant='primary' size='md'>
                <PlusIcon className='h-4 w-4' />
                Add Widget
              </Button>
            }
          />
        </PageLayout.HeaderRegion>
        <PageLayout.ContentRegion backgroundColor='white'>
          <PageContent size='wide'>
            {Array.from({ length: 6 }).map((_, idx) => (
              <SampleContent key={idx} label={`Widget ${idx + 1}`} />
            ))}
          </PageContent>
        </PageLayout.ContentRegion>
      </PageLayout>
    )
  },
}

/**
 * White header, gray content
 * Demonstrates different background colors for header and content regions
 */
export const WhiteHeaderGrayContent: Story = {
  render: function WhiteHeaderGrayContentStory() {
    return (
      <PageLayout>
        <PageLayout.HeaderRegion backgroundColor='white'>
          <PageHeader
            size='wide'
            title='Settings'
            subtitle='Manage your account preferences'
            breadcrumbs={
              <Breadcrumbs>
                <Breadcrumbs.Item href='/'>Home</Breadcrumbs.Item>
                <Breadcrumbs.Item isCurrent>Settings</Breadcrumbs.Item>
              </Breadcrumbs>
            }
          />
        </PageLayout.HeaderRegion>
        <PageLayout.ContentRegion backgroundColor='gray'>
          <PageContent size='wide'>
            {Array.from({ length: 4 }).map((_, idx) => (
              <SampleContent key={idx} label={`Setting Group ${idx + 1}`} />
            ))}
          </PageContent>
        </PageLayout.ContentRegion>
      </PageLayout>
    )
  },
}

/**
 * Both gray backgrounds
 * Demonstrates uniform gray background across header and content
 */
export const BothGray: Story = {
  render: function BothGrayStory() {
    return (
      <PageLayout>
        <PageLayout.HeaderRegion backgroundColor='gray'>
          <PageHeader
            size='wide'
            title='Reports'
            subtitle='View and download your reports'
          />
        </PageLayout.HeaderRegion>
        <PageLayout.ContentRegion backgroundColor='gray'>
          <PageContent size='wide'>
            {Array.from({ length: 5 }).map((_, idx) => (
              <SampleContent key={idx} label={`Report ${idx + 1}`} />
            ))}
          </PageContent>
        </PageLayout.ContentRegion>
      </PageLayout>
    )
  },
}

/**
 * Narrow size layout
 * Demonstrates page layout with narrow content width
 */
export const NarrowLayout: Story = {
  render: function NarrowLayoutStory() {
    return (
      <PageLayout hasMargin>
        <PageLayout.HeaderRegion backgroundColor='white'>
          <PageHeader
            size='narrow'
            title='Article Title'
            subtitle='Published on October 25, 2025'
          />
        </PageLayout.HeaderRegion>
        <PageLayout.ContentRegion backgroundColor='white'>
          <PageContent size='narrow'>
            {Array.from({ length: 8 }).map((_, idx) => (
              <SampleContent key={idx} label={`Paragraph ${idx + 1}`} />
            ))}
          </PageContent>
        </PageLayout.ContentRegion>
      </PageLayout>
    )
  },
}

/**
 * Fluid layout
 * Demonstrates page layout with full-width content
 */
export const FluidLayout: Story = {
  render: function FluidLayoutStory() {
    return (
      <PageLayout>
        <PageLayout.HeaderRegion backgroundColor='gray'>
          <PageHeader
            size='fluid'
            title='Full Width Dashboard'
            subtitle='Utilize the entire viewport width'
          />
        </PageLayout.HeaderRegion>
        <PageLayout.ContentRegion backgroundColor='white'>
          <PageContent size='fluid'>
            {Array.from({ length: 5 }).map((_, idx) => (
              <SampleContent key={idx} label={`Panel ${idx + 1}`} />
            ))}
          </PageContent>
        </PageLayout.ContentRegion>
      </PageLayout>
    )
  },
}
