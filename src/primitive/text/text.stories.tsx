import type { Meta, StoryObj } from '@storybook/react'
import { Text } from './text'
import type { TextProps } from './types'

const meta: Meta<typeof Text> = {
  title: 'Primitive/Text',
  component: Text,
  tags: ['autodocs'],
  argTypes: {
    as: {
      control: 'select',
      options: ['span', 'p', 'q', 's', 'strong', 'em', 'small', 'label'],
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
    children: {
      control: 'text',
      description: 'Text content',
      table: { type: { summary: 'ReactNode' } },
    },
  },
  args: {
    as: 'span',
    color: 'neutral',
    transform: 'none',
    decoration: 'none',
    align: 'left',
    italic: false,
    clamp: 'none',
    ellipsis: false,
    fontWeight: undefined,
    children: 'Text content',
  },
}

export default meta

type Story = StoryObj<typeof Text>

export const Default: Story = {}

export const Paragraph: Story = {
  render: () => (
    <Text as='p' color='tertiary' align='justify' clamp={3} ellipsis>
      Paragraph: Tertiary, Justify, Clamp 3, Ellipsis. Lorem ipsum dolor sit
      amet, consectetur adipiscing elit. Sed euismod, nunc ut laoreet cursus,
      enim erat facilisis urna, vitae dictum massa enim nec velit.
    </Text>
  ),
}

export const Transformations: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
      <Text transform='capitalize'>capitalize transformation</Text>
      <Text transform='uppercase'>uppercase transformation</Text>
      <Text transform='lowercase'>LOWERCASE INPUT TO LOWERCASE OUTPUT</Text>
      <Text transform='none'>No transform applied</Text>
    </div>
  ),
}

export const Decorations: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
      <Text decoration='underline'>Underline decoration</Text>
      <Text decoration='line-through'>Line-through decoration</Text>
      <Text decoration='overline'>Overline decoration</Text>
      <Text decoration='none'>No decoration</Text>
    </div>
  ),
}

export const ClampEllipsis: Story = {
  render: () => (
    <Text as='p' color='info' clamp={2} ellipsis className='max-w-xl'>
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
      {['span', 'p', 'q', 's', 'strong', 'em', 'small', 'label'].map(tag => (
        <Text key={tag} as={tag as TextProps['as']}>
          {`As: <${tag}>`}
        </Text>
      ))}
    </div>
  ),
}

export const FontWeightVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
      {[
        'thin',
        'extralight',
        'light',
        'normal',
        'medium',
        'semibold',
        'bold',
        'extrabold',
        'black',
      ].map(weight => (
        <Text key={weight} fontWeight={weight as TextProps['fontWeight']}>
          {`Font weight: font-${weight}`}
        </Text>
      ))}
    </div>
  ),
}
