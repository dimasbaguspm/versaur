# ActionCard Component

A clickable action item component with icon, title, badge, and navigation support. Perfect for
creating settings menus, feature lists, and navigation interfaces.

## Features

- **Interactive Design**: Clickable cards with hover effects and focus states
- **Icon Support**: Icon container with gradient background that changes on hover
- **Flexible Content**: Support for title, subtitle, and badges
- **Navigation Arrow**: Optional chevron indicator for navigation actions
- **Group Support**: Can be grouped together for list-like interfaces
- **Multiple Sizes**: Small, medium, and large size variants
- **Accessibility**: WCAG 2.1 AA compliant with proper ARIA support

## Usage

### Basic ActionCard

```tsx
import { ActionCard } from '@versaur/ui'
import { Wallet } from 'lucide-react'

;<ActionCard icon={<Icon as={Wallet} />} title='Account Groups' onClick={handleClick} />
```

### With Subtitle and Badge

```tsx
<ActionCard
  icon={<Icon as={Tags} />}
  title='Category Groups'
  subtitle='Organize expense and income categories into logical groups for better tracking'
  badge={<Badge color='success'>Popular</Badge>}
  onClick={handleClick}
/>
```

### ActionCard Groups

Use `ActionCard.Group` to create grouped lists of action cards:

```tsx
<ActionCard.Group>
  <ActionCard
    icon={<Icon as={Wallet} />}
    title='Account Groups'
    badge={<Badge color='success'>Popular</Badge>}
    onClick={handleAccountGroups}
  />
  <ActionCard icon={<Icon as={Tags} />} title='Category Groups' onClick={handleCategoryGroups} />
  <ActionCard icon={<Icon as={Database} />} title='Backup & Restore' onClick={handleBackup} />
</ActionCard.Group>
```

## Props

### ActionCard Props

| Name      | Type                 | Default  | Description                                   |
| --------- | -------------------- | -------- | --------------------------------------------- |
| title     | ReactNode            | —        | **Required.** Main title text                 |
| icon      | ReactNode            | —        | Icon element to display in the icon container |
| subtitle  | ReactNode            | —        | Subtitle or description text                  |
| badge     | ReactNode            | —        | Badge element to display next to the title    |
| showArrow | boolean              | true     | Whether to show the chevron arrow             |
| size      | 'sm' \| 'md' \| 'lg' | 'md'     | Size variant affecting padding and spacing    |
| as        | 'button' \| 'div'    | 'button' | HTML element type to render as                |
| onClick   | Function             | —        | Click handler function                        |
| ...props  | ButtonHTMLAttributes | —        | Additional button/div props                   |

### ActionCard.Group Props

| Name      | Type      | Default | Description                         |
| --------- | --------- | ------- | ----------------------------------- |
| children  | ReactNode | —       | **Required.** ActionCard components |
| className | string    | —       | Additional CSS classes              |

## Variants

### Sizes

- **Small (`sm`)**: Compact spacing, ideal for dense interfaces
- **Medium (`md`)**: Default size, balanced for most use cases
- **Large (`lg`)**: Prominent spacing for important actions

### Element Types

- **Button (`button`)**: Default interactive element with click handlers
- **Div (`div`)**: Non-interactive container for display purposes

## Examples

### Settings Menu

```tsx
<ActionCard.Group>
  <ActionCard
    icon={<Icon as={User} />}
    title='Profile Settings'
    subtitle='Update your personal information'
    onClick={() => navigate('/profile')}
  />
  <ActionCard
    icon={<Icon as={Bell} />}
    title='Notifications'
    subtitle='Manage your notification preferences'
    onClick={() => navigate('/notifications')}
  />
  <ActionCard
    icon={<Icon as={Shield} />}
    title='Privacy & Security'
    subtitle='Control your privacy settings'
    onClick={() => navigate('/privacy')}
  />
</ActionCard.Group>
```

### Feature Showcase

```tsx
<ActionCard.Group>
  <ActionCard
    icon={<Icon as={Zap} />}
    title='Quick Actions'
    badge={<Badge color='primary'>New</Badge>}
    onClick={handleQuickActions}
  />
  <ActionCard
    icon={<Icon as={Star} />}
    title='Premium Features'
    badge={<Badge color='warning'>Pro</Badge>}
    onClick={handlePremium}
  />
</ActionCard.Group>
```

### Without Navigation

```tsx
<ActionCard
  icon={<Icon as={CheckCircle} />}
  title='Task Completed'
  subtitle='Your backup has been successfully created'
  showArrow={false}
  as='div'
/>
```

## Accessibility

- Uses semantic HTML elements (`button` or `div`)
- Proper ARIA attributes for screen readers
- Keyboard navigation support for button elements
- Focus management with visible focus indicators
- High contrast support for better visibility

## Design System

The ActionCard follows the HTML structure and design patterns shown in your attachment:

- **Icon Container**: Gradient background that transitions on hover
- **Content Area**: Flexible layout for title, subtitle, and badges
- **Navigation**: Optional chevron arrow for indicating navigation
- **Group Layout**: Clean container with borders and dividers

The component is designed to match the exact visual appearance and interaction patterns from your
provided HTML structure.
