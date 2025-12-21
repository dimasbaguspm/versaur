import type { Meta, StoryObj } from '@storybook/react'
import { FormattedText } from './formatted-text'

/**
 * FormattedText component displays rich HTML content with consistent formatting.
 *
 * ## Features
 * - Supports headings (h1, h2, h3)
 * - Supports lists (ordered and unordered)
 * - Supports text formatting (bold, italic, underline, strikethrough)
 * - Supports links with primary color styling
 * - Optional scrollable content with max height
 * - Matches TextAreaInput formatting styles
 *
 * ## Important Security Note
 * This component uses `dangerouslySetInnerHTML`. Always sanitize user-generated
 * HTML content before passing it to this component to prevent XSS attacks.
 * Consider using a library like DOMPurify for sanitization.
 */
const meta = {
  title: 'Primitive/FormattedText',
  component: FormattedText,
  tags: ['autodocs'],
  argTypes: {
    content: {
      control: 'text',
      description: 'HTML content to display (should be sanitized)',
    },
    scrollable: {
      control: 'boolean',
      description: 'Whether content should be scrollable',
    },
    maxHeight: {
      control: 'number',
      description: 'Maximum height in rem units (when scrollable)',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
  },
} satisfies Meta<typeof FormattedText>

export default meta
type Story = StoryObj<typeof meta>

/**
 * Basic formatted text with various formatting styles
 */
export const Default: Story = {
  args: {
    content: `
      <p>This is a <strong>formatted text</strong> component that supports <em>various</em> <u>formatting</u> <s>options</s>.</p>
      <p>It can display rich HTML content with consistent styling.</p>
    `,
  },
}

/**
 * Formatted text with headings
 */
export const WithHeadings: Story = {
  args: {
    content: `
      <h1>Main Heading</h1>
      <p>This is a paragraph under the main heading with some <strong>bold text</strong>.</p>
      <h2>Section Heading</h2>
      <p>Another paragraph with <em>italic text</em> and a <a href="https://example.com" target="_blank" rel="noopener noreferrer">link</a>.</p>
      <h3>Subsection Heading</h3>
      <p>More content with <u>underlined</u> and <s>strikethrough</s> text.</p>
      <h4>Subsection Detail</h4>
      <p>Supporting details for subsection content.</p>
      <h5>Minor Heading</h5>
      <p>Smaller heading for fine details.</p>
      <h6>Note Heading</h6>
      <p>Smallest heading for captions or notes.</p>
    `,
  },
}

/**
 * Formatted text with ordered list
 */
export const WithOrderedList: Story = {
  args: {
    content: `
      <h2>Steps to Follow</h2>
      <ol>
        <li>First, prepare your ingredients</li>
        <li>Then, <strong>mix them together</strong></li>
        <li>Finally, bake at 350°F for 30 minutes</li>
      </ol>
      <p>Enjoy your creation!</p>
    `,
  },
}

/**
 * Formatted text with unordered list
 */
export const WithUnorderedList: Story = {
  args: {
    content: `
      <h2>Shopping List</h2>
      <ul>
        <li>Milk</li>
        <li>Eggs</li>
        <li>Bread</li>
        <li><em>Optional:</em> Butter</li>
      </ul>
    `,
  },
}

/**
 * Formatted text with links
 */
export const WithLinks: Story = {
  args: {
    content: `
      <p>Visit our <a href="https://example.com" target="_blank" rel="noopener noreferrer">website</a> for more information.</p>
      <p>You can also check out our <a href="https://docs.example.com" target="_blank" rel="noopener noreferrer">documentation</a> or <a href="https://support.example.com" target="_blank" rel="noopener noreferrer">support page</a>.</p>
    `,
  },
}

/**
 * Formatted text with mixed content
 */
export const MixedContent: Story = {
  args: {
    content: `
      <h1>Product Documentation</h1>
      <p>Welcome to our <strong>comprehensive guide</strong> on using our product effectively.</p>
      
      <h2>Getting Started</h2>
      <p>Follow these steps to begin:</p>
      <ol>
        <li>Download the software from our <a href="https://example.com/download" target="_blank" rel="noopener noreferrer">download page</a></li>
        <li>Install it on your system</li>
        <li>Run the initial setup wizard</li>
      </ol>
      
      <h2>Key Features</h2>
      <ul>
        <li><strong>Easy to use</strong> - Intuitive interface</li>
        <li><em>Fast performance</em> - Optimized for speed</li>
        <li>Cross-platform support</li>
      </ul>
      
      <h3>Additional Resources</h3>
      <p>For more help, visit our <a href="https://help.example.com" target="_blank" rel="noopener noreferrer">help center</a> or contact <a href="mailto:support@example.com">support</a>.</p>
    `,
  },
}

/**
 * Scrollable formatted text with max height
 */
export const Scrollable: Story = {
  args: {
    scrollable: true,
    maxHeight: 15,
    content: `
      <h1>Long Content Example</h1>
      <p>This content is scrollable with a maximum height constraint.</p>
      
      <h2>Section 1</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      
      <h2>Section 2</h2>
      <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      
      <h2>Section 3</h2>
      <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
      
      <h2>Section 4</h2>
      <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      
      <h2>Section 5</h2>
      <ul>
        <li>List item 1</li>
        <li>List item 2</li>
        <li>List item 3</li>
        <li>List item 4</li>
        <li>List item 5</li>
      </ul>
    `,
  },
}
