# PageHeader

Compound layout component for page headers that provides a flexible layout system for various
components including breadcrumbs, titles, badges, actions, and tabs.

## Usage

PageHeader supports two usage patterns:

### 1. Simplified API (Prop-based)

Perfect for common scenarios with straightforward requirements:

```tsx
<PageHeader
  title='User Management'
  subtitle='Manage user accounts and permissions'
  breadcrumbs={
    <Breadcrumbs>
      <Breadcrumbs.Item href='/'>Home</Breadcrumbs.Item>
      <Breadcrumbs.Item>Users</Breadcrumbs.Item>
    </Breadcrumbs>
  }
  badges={
    <>
      <Badge color='success'>Active</Badge>
      <Badge color='info'>v2.1</Badge>
    </>
  }
  actions={
    <ButtonGroup>
      <Button variant='secondary'>Export</Button>
      <Button variant='primary'>Add User</Button>
    </ButtonGroup>
  }
  tabs={
    <Tabs value={activeTab} onValueChange={setActiveTab}>
      <Tabs.Trigger value='all'>All Users</Tabs.Trigger>
      <Tabs.Trigger value='active'>Active</Tabs.Trigger>
      <Tabs.Trigger value='pending'>Pending</Tabs.Trigger>
    </Tabs>
  }
/>
```

### 2. Compound Pattern (Maximum Flexibility)

For complex layouts requiring precise control:

```tsx
<PageHeader variant='primary'>
  <PageHeader.Top>
    <PageHeader.Content>
      <PageHeader.Breadcrumbs>
        <Breadcrumbs>
          <Breadcrumbs.Item href='/'>Home</Breadcrumbs.Item>
          <Breadcrumbs.Item>Users</Breadcrumbs.Item>
        </Breadcrumbs>
      </PageHeader.Breadcrumbs>
      <PageHeader.Title>User Management</PageHeader.Title>
      <PageHeader.Subtitle>Manage user accounts and permissions</PageHeader.Subtitle>
      <PageHeader.Badges>
        <Badge color='success'>Active</Badge>
        <Badge color='info'>v2.1</Badge>
      </PageHeader.Badges>
    </PageHeader.Content>
    <PageHeader.Actions>
      <ButtonGroup>
        <Button variant='secondary'>Export</Button>
        <Button variant='primary'>Add User</Button>
      </ButtonGroup>
    </PageHeader.Actions>
  </PageHeader.Top>
  <PageHeader.Bottom>
    <Tabs value={activeTab} onValueChange={setActiveTab}>
      <Tabs.Trigger value='all'>All Users</Tabs.Trigger>
      <Tabs.Trigger value='active'>Active</Tabs.Trigger>
      <Tabs.Trigger value='pending'>Pending</Tabs.Trigger>
    </Tabs>
  </PageHeader.Bottom>
</PageHeader>
```

## API

### PageHeader (Root)

Main container component that accepts both simplified props and compound children.

**Props:**

- `variant`: Color variant (`'primary' | 'secondary' | 'tertiary' | 'ghost' | 'neutral'`)
- `title`: Page title (ReactNode)
- `subtitle`: Page subtitle/description (ReactNode)
- `breadcrumbs`: Breadcrumbs navigation component (ReactNode)
- `badges`: Status badges (ReactNode)
- `actions`: Action buttons/button groups (ReactNode)
- `tabs`: Bottom content like tabs or filters (ReactNode)

### Compound Components

- `PageHeader.Top`: Main header area container
- `PageHeader.Content`: Content area for title, subtitle, and badges
- `PageHeader.Breadcrumbs`: Breadcrumbs section wrapper
- `PageHeader.Title`: Main title heading (supports `as` prop for heading level)
- `PageHeader.Subtitle`: Subtitle/description text
- `PageHeader.Badges`: Badges container
- `PageHeader.Actions`: Actions section for buttons and button groups
- `PageHeader.Bottom`: Bottom section for tabs and filters

## Layout Structure

```
┌─ PageHeader ─────────────────────────────────────────────┐
│  ┌─ Top ───────────────────────────────────────────────┐ │
│  │  ┌─ Content ─────────────┐  ┌─ Actions ──────────┐  │ │
│  │  │  • Breadcrumbs        │  │  • Button groups   │  │ │
│  │  │  • Title              │  │  • Individual      │  │ │
│  │  │  • Subtitle           │  │    buttons         │  │ │
│  │  │  • Badges             │  │                    │  │ │
│  │  └───────────────────────┘  └────────────────────┘  │ │
│  └─────────────────────────────────────────────────────┘ │
│  ┌─ Bottom ────────────────────────────────────────────┐ │
│  │  • Tabs                                            │ │
│  │  • Filters                                         │ │
│  │  • Other navigation                                │ │
│  └─────────────────────────────────────────────────────┘ │
└───────────────────────────────────────────────────────────┘
```

## Design Principles

- **Responsive**: Mobile-first design with proper spacing and alignment
- **Flexible**: Supports various content combinations without breaking layout
- **Accessible**: Uses semantic HTML elements and proper ARIA roles
- **Consistent**: Follows Versaur's design system and color palette
- **Composable**: Both simple prop-based and flexible compound pattern APIs

## Accessibility

- Uses `role="banner"` for the main header element
- Supports proper heading hierarchy through the `as` prop on Title
- Maintains semantic structure for screen readers
- Proper focus management and keyboard navigation
- Meets WCAG 2.1 AA color contrast standards

## Examples

### Simple Dashboard Header

```tsx
<PageHeader
  title='Dashboard'
  subtitle='Welcome back, John'
  actions={<Button variant='primary'>New Project</Button>}
/>
```

### Product Detail Page

```tsx
<PageHeader
  breadcrumbs={
    <Breadcrumbs>
      <Breadcrumbs.Item href='/products'>Products</Breadcrumbs.Item>
      <Breadcrumbs.Item>iPhone 15</Breadcrumbs.Item>
    </Breadcrumbs>
  }
  title='iPhone 15'
  subtitle='Latest Apple smartphone with advanced features'
  badges={
    <>
      <Badge color='success'>In Stock</Badge>
      <Badge color='warning'>Limited</Badge>
    </>
  }
  actions={
    <ButtonGroup>
      <Button variant='secondary'>Share</Button>
      <Button variant='primary'>Add to Cart</Button>
    </ButtonGroup>
  }
/>
```

### Admin Section with Tabs

```tsx
<PageHeader
  title='System Settings'
  subtitle='Configure system-wide preferences and options'
  tabs={
    <Tabs value='general' onValueChange={setTab}>
      <Tabs.Trigger value='general'>General</Tabs.Trigger>
      <Tabs.Trigger value='security'>Security</Tabs.Trigger>
      <Tabs.Trigger value='integrations'>Integrations</Tabs.Trigger>
    </Tabs>
  }
  actions={<Button variant='primary'>Save Changes</Button>}
/>
```
