import type { Meta, StoryObj } from '@storybook/react'
import { Heading } from './heading'
import type { HeadingProps } from './types'

const meta: Meta<typeof Heading> = {
  title: 'Primitive/Heading',
  component: Heading,
  tags: ['autodocs'],
  argTypes: {
    level: {
      control: 'select',
      options: [1, 2, 3, 4, 5, 6],
      description: 'Heading level (1-6, corresponding to h1-h6)',
      table: { type: { summary: '1 | 2 | 3 | 4 | 5 | 6' } },
    },
    color: {
      control: 'select',
      options: [
        'primary',
        'secondary',
        'tertiary',
        'ghost',
        'neutral',
        'success',
        'info',
        'warning',
        'danger',
        'inherit',
        'white',
        'black',
        'gray',
      ],
      description: 'Versaur color system',
      table: { type: { summary: 'Color' } },
    },
    hasUnderline: {
      control: 'boolean',
      description: 'Underline text',
      table: { type: { summary: 'boolean' } },
    },
    isCapitalize: {
      control: 'boolean',
      description: 'Capitalize text',
      table: { type: { summary: 'boolean' } },
    },
    hasMargin: {
      control: 'boolean',
      description: 'Add margin bottom (mb-4)',
      table: { type: { summary: 'boolean' } },
    },
    align: {
      control: 'select',
      options: ['left', 'center', 'right', 'justify'],
      description: 'Text alignment',
      table: { type: { summary: 'left | center | right | justify' } },
    },
    italic: {
      control: 'boolean',
      description: 'Italic text',
      table: { type: { summary: 'boolean' } },
    },
    clamp: {
      control: 'select',
      options: [1, 2, 3, 4, 5, 'none'],
      description: 'Clamp lines (1-5)',
      table: { type: { summary: '1 | 2 | 3 | 4 | 5 | none' } },
    },
    ellipsis: {
      control: 'boolean',
      description: 'Truncate text with ellipsis',
      table: { type: { summary: 'boolean' } },
    },
  },
} satisfies Meta<typeof Heading>

export default meta

type Story = StoryObj<HeadingProps>

/**
 * Default heading component showcasing h1 with primary color
 */
export const Default: Story = {
  args: {
    level: 1,
    color: 'ghost',
    children: 'Default Heading',
  },
}

/**
 * Primary heading with all features enabled
 */
export const PrimaryWithFeatures: Story = {
  args: {
    level: 1,
    color: 'primary',
    hasUnderline: true,
    isCapitalize: true,
    hasMargin: true,
    align: 'center',
    italic: true,
    children: 'Primary Heading: Underline, Capitalize, Center, Italic, Margin',
  },
}

/**
 * Secondary heading with right alignment and clamp
 */
export const SecondaryWithClamp: Story = {
  args: {
    level: 2,
    color: 'secondary',
    align: 'right',
    clamp: 2,
    hasMargin: true,
    children:
      'Secondary Heading: Right aligned with line clamp set to 2. This is a very long text that should be clamped at 2 lines when the container is narrow enough.',
  },
}

/**
 * Tertiary heading with ellipsis and underline
 */
export const TertiaryWithEllipsis: Story = {
  args: {
    level: 3,
    color: 'tertiary',
    ellipsis: true,
    hasUnderline: true,
    hasMargin: true,
    children:
      'Tertiary Heading: This is a very long text that will be truncated with ellipsis',
  },
}

/**
 * Success heading with level 4
 */
export const SuccessHeading: Story = {
  args: {
    level: 4,
    color: 'success',
    hasMargin: true,
    children: 'Success Heading',
  },
}

/**
 * Warning heading with capitalize and justify alignment
 */
export const WarningCapitalize: Story = {
  args: {
    level: 5,
    color: 'warning',
    isCapitalize: true,
    align: 'justify',
    hasMargin: true,
    children: 'warning heading with capitalize and justify alignment',
  },
}

/**
 * Danger heading with italic and underline
 */
export const DangerItalicUnderline: Story = {
  args: {
    level: 6,
    color: 'danger',
    italic: true,
    hasUnderline: true,
    hasMargin: true,
    children: 'Danger Heading: Italic and Underlined',
  },
}

/**
 * All heading levels showcase
 */
export const AllLevels: Story = {
  render: () => (
    <div className='space-y-4'>
      <Heading level={1} color='primary' hasMargin>
        H1 Heading - Primary Color
      </Heading>
      <Heading level={2} color='secondary' hasMargin>
        H2 Heading - Secondary Color
      </Heading>
      <Heading level={3} color='tertiary' hasMargin>
        H3 Heading - Tertiary Color
      </Heading>
      <Heading level={4} color='success' hasMargin>
        H4 Heading - Success Color
      </Heading>
      <Heading level={5} color='warning' hasMargin>
        H5 Heading - Warning Color
      </Heading>
      <Heading level={6} color='danger' hasMargin>
        H6 Heading - Danger Color
      </Heading>
    </div>
  ),
}

/**
 * Color variants showcase
 */
export const ColorVariants: Story = {
  render: () => (
    <div className='space-y-4'>
      <Heading level={3} color='primary' hasMargin>
        Primary Heading
      </Heading>
      <Heading level={3} color='secondary' hasMargin>
        Secondary Heading
      </Heading>
      <Heading level={3} color='tertiary' hasMargin>
        Tertiary Heading
      </Heading>
      <Heading level={3} color='ghost' hasMargin>
        Ghost Heading
      </Heading>
      <Heading level={3} color='neutral' hasMargin>
        Neutral Heading
      </Heading>
      <Heading level={3} color='success' hasMargin>
        Success Heading
      </Heading>
      <Heading level={3} color='info' hasMargin>
        Info Heading
      </Heading>
      <Heading level={3} color='warning' hasMargin>
        Warning Heading
      </Heading>
      <Heading level={3} color='danger' hasMargin>
        Danger Heading
      </Heading>
    </div>
  ),
}

/**
 * Alignment variants showcase
 */
export const AlignmentVariants: Story = {
  render: () => (
    <div className='space-y-4'>
      <Heading level={3} align='left' hasMargin>
        Left Aligned Heading
      </Heading>
      <Heading level={3} align='center' hasMargin>
        Center Aligned Heading
      </Heading>
      <Heading level={3} align='right' hasMargin>
        Right Aligned Heading
      </Heading>
      <Heading level={3} align='justify' hasMargin>
        Justify Aligned Heading - This is a longer heading text to demonstrate
        justify alignment behavior
      </Heading>
    </div>
  ),
}
