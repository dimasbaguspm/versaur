import type { Meta, StoryObj } from '@storybook/react'
import { TextAreaInput } from './textarea-input'
import { useState } from 'react'
import { FormattedText } from '@/primitive'

/**
 * TextAreaInput provides a robust multi-line text input using contentEditable div.
 * Uses primary variant by default with support for error states, disabled, and readOnly modes.
 * Supports rich text formatting with an optional toolbar.
 */
const meta: Meta<typeof TextAreaInput> = {
  title: 'Forms/TextAreaInput',
  component: TextAreaInput,
  parameters: {
    docs: {
      description: {
        component: `
A versatile textarea component built with contentEditable div for better control:
- Uses primary variant styling by default
- Error states with validation messages
- Disabled and readOnly support
- Helper text for guidance
- Full accessibility with proper ARIA attributes
- Works cross-browser with consistent behavior
- Rich text formatting with optional toolbar (bold, italic, underline, headings, lists, links)

Perfect for forms, comments, descriptions, and any multi-line text input needs.
        `,
      },
    },
  },
  args: {
    label: 'Description',
    placeholder: 'Enter your description here...',
  },
  argTypes: {
    disabled: {
      control: 'boolean',
    },
    readOnly: {
      control: 'boolean',
    },
    row: {
      control: 'number',
      description: 'Height in rem units',
    },
    showToolbar: {
      control: 'boolean',
      description: 'Show formatting toolbar',
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

/**
 * Default textarea with primary styling
 */
export const Default: Story = {}

/**
 * With default value for uncontrolled usage
 */
export const WithDefaultValue: Story = {
  args: {
    label: 'Comment',
    placeholder: 'Add your comment...',
    defaultValue:
      'This is a default value that can be edited.\n\nIt supports multi-line content naturally.',
  },
}

/**
 * Error state with validation message
 */
export const WithError: Story = {
  args: {
    label: 'Project Description',
    placeholder: 'Describe your project...',
    error: 'Description must be at least 10 characters long.',
    defaultValue: 'Too short',
  },
}

/**
 * With helper text for additional guidance
 */
export const WithHelperText: Story = {
  args: {
    label: 'Feedback',
    placeholder: 'Share your thoughts...',
    helperText:
      'Your feedback helps us improve our services. Please be as detailed as possible.',
  },
}

/**
 * Required field with asterisk indicator
 */
export const Required: Story = {
  args: {
    label: 'Message',
    placeholder: 'Enter your message...',
    required: true,
    helperText: 'This field is required and must be filled out.',
  },
}

/**
 * Disabled state prevents all interactions
 */
export const Disabled: Story = {
  args: {
    label: 'Disabled Field',
    disabled: true,
    defaultValue:
      'This content cannot be edited because the field is disabled.',
  },
}

/**
 * ReadOnly state allows viewing but not editing
 */
export const ReadOnly: Story = {
  args: {
    label: 'Read-Only Content',
    readOnly: true,
    defaultValue:
      'This content is read-only. You can select and copy the text, but cannot modify it.',
  },
}

/**
 * Custom height using row prop (in rem units)
 */
export const CustomHeight: Story = {
  render: () => (
    <div className='space-y-6 w-96'>
      <TextAreaInput
        label='Small (1 row)'
        placeholder='Compact textarea...'
        row={1}
      />
      <TextAreaInput
        label='Default (3 rows)'
        placeholder='Default size textarea...'
      />
      <TextAreaInput
        label='Large (10 rows)'
        placeholder='Expanded textarea...'
        row={10}
      />
    </div>
  ),
}

/**
 * Rich text editor with full formatting toolbar
 */
export const WithFormattingToolbar: Story = {
  args: {
    label: 'Article Content',
    placeholder: 'Start writing your article...',
    showToolbar: true,
    row: 8,
    helperText:
      'Use the toolbar to format your text with bold, italic, headings, and more.',
  },
}

/**
 * Rich text editor with controlled value
 */
export const ControlledRichText: Story = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [value, setValue] = useState('<p>Hello <strong>world</strong>!</p>')

    return (
      <div className='space-y-4 w-full max-w-2xl'>
        <TextAreaInput
          label='Controlled Rich Text Editor'
          placeholder='Type and format text...'
          showToolbar={true}
          value={value}
          onChange={setValue}
          row={6}
        />
        <div className='p-4 bg-neutral-soft rounded-md border border-primary/30'>
          <p className='text-sm font-medium text-foreground mb-2'>
            HTML Output:
          </p>
          <pre className='text-xs bg-white p-2 rounded border overflow-x-auto'>
            {value}
          </pre>
        </div>
        <div className='p-4 bg-neutral-soft rounded-md border border-primary/30'>
          <p className='text-sm font-medium text-foreground mb-2'>
            Rendered Output:
          </p>
          <FormattedText content={value} />
        </div>
      </div>
    )
  },
}

/**
 * Limited formatting options
 */
export const LimitedFormats: Story = {
  args: {
    label: 'Comment Editor',
    placeholder: 'Add your comment...',
    showToolbar: true,
    allowedFormats: ['bold', 'italic', 'underline', 'link'],
    row: 5,
    helperText: 'Only basic text formatting is available.',
  },
}

/**
 * Heading and list formatting
 */
export const HeadingsAndLists: Story = {
  args: {
    label: 'Document Editor',
    placeholder: 'Start your document...',
    showToolbar: true,
    allowedFormats: ['h1', 'h2', 'h3', 'orderedList', 'unorderedList'],
    row: 8,
    helperText: 'Structure your document with headings and lists.',
  },
}

/**
 * Disabled with toolbar
 */
export const DisabledWithToolbar: Story = {
  args: {
    label: 'Disabled Rich Text',
    showToolbar: true,
    disabled: true,
    defaultValue:
      '<p>This is <strong>formatted</strong> content that cannot be edited.</p>',
    row: 5,
  },
}

/**
 * Read-only with toolbar (viewing formatted content)
 */
export const ReadOnlyWithToolbar: Story = {
  args: {
    label: 'Preview Mode',
    showToolbar: true,
    readOnly: true,
    defaultValue:
      '<h2>Article Title</h2><p>This is a <strong>formatted</strong> article with <em>various</em> styles.</p><ul><li>Point one</li><li>Point two</li></ul>',
    row: 8,
    helperText: 'Content is read-only but you can see the formatting.',
  },
}

/**
 * With error and toolbar
 */
export const ErrorWithToolbar: Story = {
  args: {
    label: 'Required Content',
    showToolbar: true,
    error: 'Content must be at least 50 characters long.',
    defaultValue: '<p>Too short</p>',
    required: true,
    row: 6,
  },
}
