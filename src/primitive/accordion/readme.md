# Accordion

A collapsible content container component that follows the Compound Pattern with Context for
flexible composition.

## Features

- **Compound Pattern**: Use `Accordion.Title`, `Accordion.Content`, and `Accordion.Icon` for
  flexible composition
- **Internal State Management**: Built-in expand/collapse state with `isDefaultOpen` prop
- **Smooth Animations**: CSS transitions for expand/collapse with opacity and height animations
- **Accessibility**: Full ARIA support with proper `aria-expanded` and `aria-disabled` attributes
- **Customizable**: Supports custom title and subtitle content as ReactNode
- **Integration**: Leverages existing Versaur components (Heading, Icon, etc.)

## Usage

### Basic Accordion

```tsx
<Accordion title={<Accordion.Title>Basic Title</Accordion.Title>}>
  <p>This is the accordion content</p>
</Accordion>
```

### With Subtitle

```tsx
<Accordion
  title={<Accordion.Title>Settings</Accordion.Title>}
  subtitle={
    <Button variant='ghost' size='sm'>
      Clear
    </Button>
  }
>
  <p>Advanced settings content here</p>
</Accordion>
```

### Default Open

```tsx
<Accordion title={<Accordion.Title>FAQ Section</Accordion.Title>} isDefaultOpen={true}>
  <p>This accordion starts in the open state</p>
</Accordion>
```

### Disabled State

```tsx
<Accordion title={<Accordion.Title>Disabled Section</Accordion.Title>} disabled={true}>
  <p>This content cannot be accessed</p>
</Accordion>
```

### Using Accordion.Content

```tsx
<Accordion title={<Accordion.Title>Advanced</Accordion.Title>}>
  <Accordion.Content>
    <div className='space-y-4'>
      <h5>Custom Content</h5>
      <p>More structured content here</p>
    </div>
  </Accordion.Content>
</Accordion>
```

## Props

### AccordionProps

| Prop            | Type        | Default | Description                                      |
| --------------- | ----------- | ------- | ------------------------------------------------ |
| `title`         | `ReactNode` | -       | **Required.** Title content to display in header |
| `subtitle`      | `ReactNode` | -       | Optional subtitle content (e.g., actions)        |
| `isDefaultOpen` | `boolean`   | `false` | Whether accordion is open by default             |
| `disabled`      | `boolean`   | `false` | Whether accordion is disabled                    |
| `children`      | `ReactNode` | -       | Content to show when expanded                    |
| `className`     | `string`    | -       | Additional CSS classes                           |

### AccordionTitleProps

| Prop        | Type        | Default | Description                 |
| ----------- | ----------- | ------- | --------------------------- |
| `children`  | `ReactNode` | -       | **Required.** Title content |
| `className` | `string`    | -       | Additional CSS classes      |

### AccordionContentProps

| Prop        | Type        | Default | Description                      |
| ----------- | ----------- | ------- | -------------------------------- |
| `children`  | `ReactNode` | -       | **Required.** Content to display |
| `className` | `string`    | -       | Additional CSS classes           |

## Component Structure

The Accordion uses a compound component pattern:

- **`Accordion`**: Main container with state management
- **`Accordion.Title`**: Styled title using the Heading component
- **`Accordion.Content`**: Content wrapper with proper padding
- **`Accordion.Icon`**: Chevron icon with rotation animation

## Accessibility

- Uses semantic `button` element for the header
- Proper ARIA attributes (`aria-expanded`, `aria-disabled`)
- Keyboard navigation support
- Focus management with visible focus indicators
- Screen reader friendly with proper roles and states

## Animation

The component uses CSS transitions for smooth expand/collapse:

- **Duration**: 300ms
- **Properties**: `max-height`, `opacity`, `transform` (for icon rotation)
- **Easing**: Default CSS transition timing

## Dependencies

- `@/primitive/heading` - For title styling
- `@/primitive/icon` - For chevron icon
- `lucide-react` - For ChevronDown icon
- `@/utils/cn` - For className merging
- `@/utils/variants` - For component styling variants
