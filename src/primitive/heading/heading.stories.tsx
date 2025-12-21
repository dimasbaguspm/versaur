import type { Meta, StoryObj } from '@storybook/react'
import { Heading } from './heading'
import type { HeadingProps } from './types'

const meta: Meta<typeof Heading> = {
  title: 'Primitive/Heading',
  component: Heading,
  tags: ['autodocs'],
  argTypes: {
    as: {
      control: 'select',
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
      description: 'Heading tag to render',
      table: { type: { summary: 'h1 | h2 | h3 | h4 | h5 | h6' } },
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
    transform: {
      control: 'select',
      options: ['none', 'capitalize', 'uppercase', 'lowercase'],
      description: 'Text transform helper',
    },
    decoration: {
      control: 'select',
      options: ['none', 'underline', 'line-through', 'overline'],
      description: 'Text decoration helper',
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
    as: 'h1',
    color: 'ghost',
    children: 'Default Heading',
  },
}

/**
 * Primary heading with all features enabled
 */
export const PrimaryWithFeatures: Story = {
  args: {
    as: 'h1',
    color: 'primary',
    decoration: 'underline',
    transform: 'capitalize',
    hasMargin: true,
    align: 'center',
    children: 'Primary Heading: Underline, Capitalize, Center, Margin',
  },
}

/**
 * Secondary heading with right alignment and clamp
 */
export const SecondaryWithClamp: Story = {
  args: {
    as: 'h2',
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
    as: 'h3',
    color: 'tertiary',
    ellipsis: true,
    decoration: 'underline',
    hasMargin: true,
    children:
      'Tertiary Heading: This is a very long text that will be truncated with ellipsis',
    className: 'max-w-2xl',
  },
}

/**
 * Success heading with level 4
 */
export const SuccessHeading: Story = {
  args: {
    as: 'h4',
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
    as: 'h5',
    color: 'warning',
    transform: 'capitalize',
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
    as: 'h6',
    color: 'danger',
    transform: 'uppercase',
    decoration: 'underline',
    hasMargin: true,
    children: 'Danger Heading: Uppercase and Underlined',
  },
}

/**
 * All heading levels showcase
 */
export const AllLevels: Story = {
  render: () => (
    <div className='space-y-4'>
      <Heading as='h1' color='primary' hasMargin>
        H1 Heading - Primary Color
      </Heading>
      <Heading as='h2' color='secondary' hasMargin>
        H2 Heading - Secondary Color
      </Heading>
      <Heading as='h3' color='tertiary' hasMargin>
        H3 Heading - Tertiary Color
      </Heading>
      <Heading as='h4' color='success' hasMargin>
        H4 Heading - Success Color
      </Heading>
      <Heading as='h5' color='warning' hasMargin>
        H5 Heading - Warning Color
      </Heading>
      <Heading as='h6' color='danger' hasMargin>
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
      <Heading color='primary' hasMargin>
        Primary Heading
      </Heading>
      <Heading color='secondary' hasMargin>
        Secondary Heading
      </Heading>
      <Heading color='tertiary' hasMargin>
        Tertiary Heading
      </Heading>
      <Heading color='ghost' hasMargin>
        Ghost Heading
      </Heading>
      <Heading color='neutral' hasMargin>
        Neutral Heading
      </Heading>
      <Heading color='success' hasMargin>
        Success Heading
      </Heading>
      <Heading color='info' hasMargin>
        Info Heading
      </Heading>
      <Heading color='warning' hasMargin>
        Warning Heading
      </Heading>
      <Heading color='danger' hasMargin>
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
      <Heading align='left' hasMargin>
        Left Aligned Heading
      </Heading>
      <Heading align='center' hasMargin>
        Center Aligned Heading
      </Heading>
      <Heading align='right' hasMargin>
        Right Aligned Heading
      </Heading>
      <Heading align='justify' hasMargin>
        Justify Aligned Heading - This is a longer heading text to demonstrate
        justify alignment behavior
      </Heading>
    </div>
  ),
}
