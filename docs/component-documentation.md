# Component Documentation System

How component documentation is structured in Versaur using Storybook.

## Overview

Components are documented using **Storybook** in `apps/react-doc`. Each component has a corresponding `.stories.tsx` file **colocated with the component** that provides interactive examples and documentation.

## Storybook stories structure

Stories are colocated with components in `packages/react/src/components/<category>/<name>/` and follow the `<name>.stories.tsx` naming convention:

```
packages/react/src/components/
├── primitive/
│   ├── button/
│   │   ├── button.tsx
│   │   ├── button.types.ts
│   │   └── button.stories.tsx
│   ├── badge/
│   │   ├── badge.tsx
│   │   ├── badge.types.ts
│   │   └── badge.stories.tsx
│   └── ...
├── blocks/
│   ├── card/
│   │   ├── card.tsx
│   │   ├── card.types.ts
│   │   └── card.stories.tsx
│   └── ...
└── ...
```

### Basic story structure

```tsx
import type { Meta, StoryObj } from "@storybook/react"
import { Button } from "../index"

const meta = {
  title: "Primitive/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "danger", "ghost", "outline"],
      description: "Visual variant of the button",
    },
    size: {
      control: "select",
      options: ["small", "medium", "large"],
      description: "Size of the button",
    },
    loading: {
      control: "boolean",
      description: "Whether the button is in a loading state",
    },
    disabled: {
      control: "boolean",
      description: "Whether the button is disabled",
    },
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    variant: "primary",
    children: "Primary Button",
  },
}

export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Secondary Button",
  },
}
```

## Component categories

Stories are organized by component category in the Storybook sidebar:

| Category  | Title Prefix | Example Components                 |
| --------- | ------------ | ---------------------------------- |
| Primitive | `Primitive/` | Button, Badge, Text, Heading       |
| Forms     | `Forms/`     | TextInput, Select, Checkbox, Radio |
| Blocks    | `Blocks/`    | Card, Modal, Dialog, Sidebar       |
| Utils     | `Utils/`     | Loader, Icon, Tooltip              |

## Adding documentation for a new component

1. Create `packages/react/src/components/<category>/<name>/<name>.stories.tsx`
2. Import the component using a relative import: `from "../index"` (or from sibling categories like `from "../../<other-category>/index"`)
3. Import icons and Storybook types from absolute paths: `@versaur/icons`, `@storybook/react`
4. Define the story metadata with appropriate category prefix
5. Add multiple story variations to demonstrate different states
6. Configure `argTypes` for interactive controls
7. Use `tags: ['autodocs']` to generate automatic API documentation

## Storybook features

- **Interactive controls**: Adjust component props in real-time
- **Auto-generated docs**: API documentation from TypeScript types
- **Multiple examples**: Each export creates a new story variant
- **Responsive preview**: Test components at different viewport sizes
- **Accessibility testing**: Built-in a11y addon for accessibility checks
- **Source code**: View component implementation directly in Storybook

## Development workflow

```sh
# Start Storybook dev server
pnpm dev

# Build static Storybook site
pnpm build:docs
```

Storybook automatically hot-reloads when you change component source files thanks to source-first resolution (`resolve.conditions: ['source']`).
