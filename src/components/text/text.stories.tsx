import type { Meta, StoryObj } from '@storybook/react'
import { Text } from './text'
import type { TextProps } from './types'

const meta: Meta<typeof Text> = {
  title: 'Components/Text',
  component: Text,
  tags: ['autodocs'],
  argTypes: {
    as: {
      control: 'select',
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span', 'label'],
      description: 'HTML element to render',
      table: { type: { summary: 'ElementType' } },
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
      control: 'number',
      description: 'Clamp lines (1-5)',
      table: { type: { summary: '1 | 2 | 3 | 4 | 5 | none' } },
    },
    ellipsis: {
      control: 'boolean',
      description: 'Truncate text with ellipsis',
      table: { type: { summary: 'boolean' } },
    },
    children: {
      control: 'text',
      description: 'Text content',
      table: { type: { summary: 'ReactNode' } },
    },
  },
  args: {
    as: 'span',
    color: 'neutral',
    hasUnderline: false,
    isCapitalize: false,
    align: 'left',
    italic: false,
    clamp: 'none',
    ellipsis: false,
    children: 'Text content',
  },
}
export default meta

type Story = StoryObj<typeof Text>

export const Default: Story = {}

export const Heading: Story = {
  render: () => (
    <Text
      as='h1'
      color='primary'
      hasUnderline
      isCapitalize
      align='center'
      italic
      clamp={1}
      ellipsis
    >
      Heading: Primary, Underline, Capitalize, Center, Italic, Clamp 1, Ellipsis
    </Text>
  ),
}

export const SubHeading: Story = {
  render: () => (
    <Text as='h2' color='secondary' align='right' italic clamp={2} ellipsis>
      SubHeading: Secondary, Right, Italic, Clamp 2, Ellipsis
    </Text>
  ),
}

export const Paragraph: Story = {
  render: () => (
    <Text as='p' color='tertiary' align='justify' clamp={3} ellipsis>
      Paragraph: Tertiary, Justify, Clamp 3, Ellipsis. Lorem ipsum dolor sit
      amet, consectetur adipiscing elit. Sed euismod, nunc ut laoreet cursus,
      enim erat facilisis urna, vitae dictum massa enim nec velit.
    </Text>
  ),
}

export const ItalicText: Story = {
  render: () => (
    <Text as='span' color='ghost' italic clamp={4} ellipsis>
      ItalicText: Ghost, Italic, Clamp 4, Ellipsis
    </Text>
  ),
}

export const UnderlineCapitalize: Story = {
  render: () => (
    <Text
      as='span'
      color='danger'
      hasUnderline
      isCapitalize
      align='right'
      clamp={5}
      ellipsis
    >
      UnderlineCapitalize: Danger, Underline, Capitalize, Right, Clamp 5,
      Ellipsis
    </Text>
  ),
}

export const ClampEllipsis: Story = {
  render: () => (
    <Text as='p' color='info' clamp={2} ellipsis>
      ClampEllipsis: Info, Clamp 2, Ellipsis. This is a long informational text
      that will be clamped to two lines and truncated with ellipsis if it
      overflows. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
      euismod, nunc ut laoreet cursus, enim erat facilisis urna, vitae dictum
      massa enim nec velit.
    </Text>
  ),
}

export const ColorVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
      {[
        'primary',
        'secondary',
        'tertiary',
        'ghost',
        'neutral',
        'success',
        'info',
        'warning',
        'danger',
      ].map(color => (
        <Text key={color} as='span' color={color as TextProps['color']}>
          {`Color: ${color}`}
        </Text>
      ))}
    </div>
  ),
}

export const AsVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
      {['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span', 'label'].map(tag => (
        <Text key={tag} as={tag as TextProps['as']}>
          {`As: <${tag}>`}
        </Text>
      ))}
    </div>
  ),
}
