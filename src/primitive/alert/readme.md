# Alert Component

The Alert component provides inline notifications and status messages for your application. It's perfect for displaying "Record not available" messages, form validation feedback, and general status information.

## Features

- **Inline placement** for contextual information
- **Variant support**: default (soft colors) and outline styles  
- **Complete color system** integration with Versaur's color palette
- **Icon support** via the `icon` prop for maximum flexibility
- **Simple API** for direct children (text or elements)
- **Accessible design** following WCAG 2.1 AA standards

## Usage

### Basic Alert

```tsx
import { Alert } from '@versaur/components'
import { InfoIcon } from 'lucide-react'

<Alert color="info" icon={<InfoIcon />}>
  This is an informational message.
</Alert>
```

### Record Not Available

```tsx
import { Alert } from '@versaur/components'
import { XCircleIcon } from 'lucide-react'

<Alert color="danger" icon={<XCircleIcon />}>
  <strong>Record Not Available:</strong> The requested record could not be found. Please check the ID and try again.
</Alert>
```

### Outline Variant

```tsx
<Alert variant="outline" color="success" icon={<CheckCircleIcon />}>
  Your data has been saved successfully.
</Alert>
```

### Without Icon

```tsx
<Alert color="warning">
  Please review your input before continuing.
</Alert>
```

### Complex Content

```tsx
<Alert color="info" icon={<InfoIcon />}>
  <div>
    <strong>Information:</strong>
    <p>This alert can contain multiple elements and complex content structures.</p>
  </div>
</Alert>
```

## Props

### Alert Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'default' \| 'outline'` | `'default'` | Visual style variant |
| `color` | `'primary' \| 'secondary' \| 'tertiary' \| 'ghost' \| 'neutral' \| 'success' \| 'info' \| 'warning' \| 'danger'` | `'neutral'` | Color theme |
| `icon` | `ReactNode` | - | Icon element to display |
| `className` | `string` | - | Additional CSS classes |
| `children` | `ReactNode` | - | Alert content (text or elements) |

## Color System

The Alert component uses Versaur's harmonious color system:

- **Primary** (Coral): Main actions and brand identity
- **Secondary** (Sage): Secondary information and balance
- **Tertiary** (Mist): Subtle professional elements
- **Ghost** (Slate): Minimal styling
- **Neutral** (Light Gray): Balanced information
- **Success**: Positive feedback
- **Info**: Information and neutral alerts
- **Warning**: Caution and attention
- **Danger**: Errors and destructive actions

## Accessibility

- Uses semantic `role="alert"` for screen readers
- Meets WCAG 2.1 AA contrast standards
- Proper focus management
- Clear visual hierarchy

## Best Practices

1. **Use appropriate colors**: Match the alert color to the message type
2. **Keep content concise**: Use clear, actionable language
3. **Choose relevant icons**: Icons should reinforce the message meaning
4. **Consider placement**: Position alerts near related content for context
5. **Structure content**: Use strong text or elements to create hierarchy within the alert content
