# Copilot Instructions for Versaur UI Library

- Code consistency across the codebase for style, pattern, and structure is our priority
- Keep it simple, readable, and maintainable
- Use the provided guidelines to ensure code quality and maintainability
- Follow the component patterns and conventions outlined below
- Use the latest React and TypeScript features

## Project Overview

- **Versaur** is a modern React UI library using TypeScript and Tailwind v4 CSS.
- Components are tree-shakable and organized under `src/{primitive,feedbacks,forms,navigation,layouts,overlays}/` (one directory per component,
  kebab-case).
- Utilities are in `src/utils/`, and styles in `src/styles.css`.
- Subpath exports are supported for optimal bundle size.

## Naming & Structure

- Use kebab-case for all files and directories (e.g., `button/button.tsx`).
- Use PascalCase for component names (e.g., `IamComponent`).
- Place each component in its own directory under `src/{primitive,feedbacks,forms,navigation,layouts,overlays}/*`.
- If a component need a hook, we should put the hook under the component directory and have a proper naming.
- Each component/hook directory must have a barrel file (`index.ts`) to expose its public API (only expose the main component and all types).
- Example structure:
  ```
  button/
    __tests__/button.test.tsx
    __tests__/button.atoms.test.tsx // tests for the main component and atoms
    button.tsx // main component/place where we assign the compound part
    context.ts // context for the compound pattern component (if needed)
    helpers.ts // utility functions for the component (such as cva declaration variants, sizes, etc.)
    index.ts // barrel file
    button.stories.tsx // storybook stories
    types.ts // types for props and state
    readme.md // optional straightforward documentation
    button.atoms.tsx // place where the sub-components are defined
    use-button.ts // custom hook for the component (if needed)
  ```

## Component Conventions

- Use Tailwind CSS for styling and React 19 hooks.
- Props must be strictly typed (see `button.tsx`, `input.tsx`).
- Document each property interface with JSDoc (inline or multiline, no trailing dot).
- Use utility functions (e.g., `variants.ts`) for variants and sizes.
- Prioritize mobile-first responsive design.
- Use the latest widely supported HTML attributes (e.g., `command`).
- Ensure components have versiliate variations (cva): size, variant, color, etc.
- Standard accessibility is a priority; align with browser DOM and avoid hacks.

## Component Patterns

Versaur uses two primary component patterns based on complexity and browser alignment:

### Compound Pattern

Use the **Compound Pattern** for complex components that require multiple related sub-components and
sophisticated state management. This pattern provides flexible composition while maintaining clear
relationships between parts.

**Use for:**

- `Card` (Card.Header, Card.Body, Card.Footer)
- `Drawer` (Drawer.Root, Drawer.Trigger, Drawer.Content)
- `Modal` (Modal.Root, Modal.Trigger, Modal.Content, Modal.Header, Modal.Footer)
- `Accordion` (Accordion.Root, Accordion.Item, Accordion.Trigger, Accordion.Content)
- `Tabs` (Tabs.Root, Tabs.List, Tabs.Trigger, Tabs.Content)
- `Dropdown` (Dropdown.Root, Dropdown.Trigger, Dropdown.Content, Dropdown.Item)

**Benefits:**

- Flexible composition and customization
- Clear semantic relationships between components
- Shared state management across sub-components
- Better tree-shaking with named exports

#### Context Pattern Integration

For compound components that need shared state or communication between parent and sub-components,
combine with the **Context Pattern**:

**Use Context when:**

- Sub-components need access to shared state (open/closed, active tab, etc.)
- Parent component manages complex interactions between children
- Sub-components need to communicate with each other
- ARIA relationships require coordinated IDs and attributes

**Example with Context:**

```typescript
// tabs/tabs.tsx
interface TabsContextValue {
  activeTab: string
  setActiveTab: (tab: string) => void
  orientation: 'horizontal' | 'vertical'
}

const TabsContext = createContext<TabsContextValue | null>(null)

const TabsRoot = ({ defaultValue, orientation = 'horizontal', children }) => {
  const [activeTab, setActiveTab] = useState(defaultValue)

  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab, orientation }}>
      <div role="tablist" aria-orientation={orientation}>
        {children}
      </div>
    </TabsContext.Provider>
  )
}

const TabsTrigger = ({ value, children }) => {
  const context = useContext(TabsContext)
  if (!context) throw new Error('TabsTrigger must be used within Tabs')

  const { activeTab, setActiveTab } = context

  return (
    <button
      role="tab"
      aria-selected={activeTab === value}
      onClick={() => setActiveTab(value)}
    >
      {children}
    </button>
  )
}

export const Tabs = Object.assign(TabsRoot, {
  List: TabsList,
  Trigger: TabsTrigger,
  Content: TabsContent,
})

// Usage
<Tabs defaultValue="tab1">
  <Tabs.List>
    <Tabs.Trigger value="tab1">Tab 1</Tabs.Trigger>
    <Tabs.Trigger value="tab2">Tab 2</Tabs.Trigger>
  </Tabs.List>
  <Tabs.Content value="tab1">Content 1</Tabs.Content>
  <Tabs.Content value="tab2">Content 2</Tabs.Content>
</Tabs>
```

**Simple Compound (No Context):**

```typescript
// card/card.tsx
export const Card = Object.assign(CardRoot, {
  Header: CardHeader,
  Body: CardBody,
  Footer: CardFooter,
})

// Usage
<Card>
  <Card.Header>Title</Card.Header>
  <Card.Body>Content</Card.Body>
  <Card.Footer>Actions</Card.Footer>
</Card>
```

### Regular Pattern

Use the **Regular Pattern** for simple components that directly align with standard HTML browser
elements. These components should feel familiar and behave consistently with native browser
behavior.

**Use for:**

- `Button` (aligns with `<button>`)
- `Link` (aligns with `<a>`)
- `Input` (aligns with `<input>`)
- `Checkbox` (aligns with `<input type="checkbox">`)
- `Radio` (aligns with `<input type="radio">`)

**Benefits:**

- Familiar developer experience
- Direct alignment with browser standards
- Simpler API and mental model
- Better accessibility through native behavior
- Easier testing and form integration

**Example structure:**

```typescript
// button/button.tsx
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', ...props }, ref) => {
    return <button ref={ref} {...props} />
  }
)

// Usage
<Button variant="primary" size="lg">Click me</Button>
```

### Pattern Selection Guidelines

**Choose Compound Pattern when:**

- Component has multiple related sub-components
- Complex state needs to be shared between parts
- Users need flexible composition and customization
- Component doesn't directly map to a single HTML element

**Choose Compound + Context Pattern when:**

- Sub-components need shared state management
- Parent coordinates interactions between children
- ARIA relationships require synchronized IDs/attributes
- Components need to communicate with each other
- Examples: Tabs, Accordion, Dropdown, Modal with complex interactions

**Choose Simple Compound Pattern when:**

- Sub-components are independent
- No shared state required
- Pure composition without coordination
- Examples: Card, Layout components

**Choose Regular Pattern when:**

- Component directly enhances a single HTML element
- Behavior should match browser standards
- Simple props-based API is sufficient
- Component is primarily a styled wrapper

**Accessibility Considerations:**

- Compound Pattern: Implement ARIA relationships between sub-components
- Regular Pattern: Leverage native browser accessibility features
- Both patterns must meet WCAG 2.1 AA standards

tones that feel natural and trustworthy.

## Design System & Theme

Versaur’s design system is built for clarity, accessibility, and modern professional UI. The color palette and semantic roles are defined in `src/styles.css` and are available as CSS custom properties for easy theming and consistent usage across components.

### Color Palette & Semantic Roles


The color system is based on a harmonious, accessible palette with clear semantic roles, including soft variants for subtle backgrounds and states:

| Role            | CSS Variable                | Color      | Usage                                              |
| --------------- | -------------------------- | ---------- | -------------------------------------------------- |
| **Primary**     | `--color-primary`           | #e07a5f    | Main actions, CTAs, brand identity                 |
| **Primary Soft**| `--color-primary-soft`      | #fff8f6    | Soft backgrounds, hover/focus for primary          |
| **Secondary**   | `--color-secondary`         | #81b29a    | Secondary actions, balance states                  |
| **Secondary Soft**| `--color-secondary-soft`  | #f6fffa    | Soft backgrounds, hover/focus for secondary        |
| **Tertiary**    | `--color-tertiary`          | #84a5c0    | Subtle backgrounds, professional elements          |
| **Tertiary Soft**| `--color-tertiary-soft`    | #f5faff    | Soft backgrounds, hover/focus for tertiary         |
| **Ghost**       | `--color-ghost`             | #3d405b    | Text, minimal actions, borders                     |
| **Ghost Soft**  | `--color-ghost-soft`        | #e3e4ea    | Soft backgrounds, hover/focus for ghost            |
| **Neutral**     | `--color-neutral`           | #e9ecef    | Neutral surfaces, cards, backgrounds               |
| **Neutral Soft**| `--color-neutral-soft`      | #f8f9fa    | Soft backgrounds, hover/focus for neutral          |
| **Success**     | `--color-success`           | #6db285    | Success states, positive feedback                  |
| **Success Soft**| `--color-success-soft`      | #f4fff9    | Soft backgrounds, hover/focus for success          |
| **Info**        | `--color-info`              | #6b8fad    | Information, neutral alerts                        |
| **Info Soft**   | `--color-info-soft`         | #f0f8ff    | Soft backgrounds, hover/focus for info             |
| **Warning**     | `--color-warning`           | #e08a47    | Warning states, caution                            |
| **Warning Soft**| `--color-warning-soft`      | #fff9f2    | Soft backgrounds, hover/focus for warning          |
| **Danger**      | `--color-danger`            | #e06650    | Error states, destructive actions                  |
| **Danger Soft** | `--color-danger-soft`       | #fff5f4    | Soft backgrounds, hover/focus for danger           |
| **Background**  | `--color-background`        | #ffffff    | App background                                     |
| **Foreground**  | `--color-foreground`        | #2d3748    | Main text, foreground                              |
| **Cream**       | `--color-cream`             | #f4f1de    | Subtle backgrounds, highlights                     |
| **Cream Soft**  | `--color-cream-soft`        | #fefdfb    | Soft backgrounds, highlights                       |

All colors, including soft variants, are defined as CSS custom properties in `:root` for light mode, and can be extended for dark mode as needed.

#### Example CSS Custom Properties

```css
:root {
  --color-primary: #e07a5f;
  --color-secondary: #81b29a;
  --color-tertiary: #84a5c0;
  --color-ghost: #3d405b;
  --color-neutral: #f8f9fa;
  --color-success: #6db285;
  --color-info: #6b8fad;
  --color-warning: #e08a47;
  --color-danger: #e06650;
  --color-background: #ffffff;
  --color-foreground: #2d3748;
  --color-cream: #f4f1de;
}
```

### Color Harmony Principles

- **Professional Harmony**: All palette colors are designed to work together for business and product UIs
- **Natural Temperature**: Warm primary (coral) is balanced by cool secondary/tertiary (sage, mist)
- **Clear Hierarchy**: Each color variable has a distinct, documented purpose
- **Complementary Balance**: Warm and cool tones are used for visual balance and clarity

### Color Psychology

- **Primary (Coral)**: Energetic, action-oriented, friendly
- **Secondary (Sage)**: Calming, natural, trustworthy
- **Tertiary (Mist)**: Professional, subtle, supportive
- **Ghost (Slate)**: Minimal, reliable, for text and outlines
- **Neutral (Light Gray)**: Clean, subtle, unobtrusive
- **Success**: Positive, affirming
- **Info**: Informative, neutral
- **Warning**: Caution, alert
- **Danger**: Destructive, error

### Accessibility & Contrast

All color combinations are chosen to meet or exceed WCAG 2.1 AA standards:

- **Text on backgrounds**: Minimum 4.5:1 contrast ratio
- **Interactive elements**: Minimum 3:1 contrast ratio
- **Focus indicators**: Always visible and clear

### Usage in Components

- Use the transpiled CSS variables (e.g., from `var(--color-primary)` to be `bg-primary`) in Tailwind config and component styles for consistency
- All variants, states, and backgrounds should use these variables for easy theming

Refer to `assets/styles.css` for the full palette and to add or update color roles as the design system evolves.

## Testing

- Colocate tests with components/hooks (e.g., `button/__tests__/button.tsx`).
- Use Vitest and React Testing Library for unit/component tests.
- Always use `composeStories` from `@storybook/react` to render stories in tests.
- DOM environment is provided by jsdom.
- Prioritize asserting the accessibility of components and interactions
- There should be 1 test case that asserting the html output,
  `expect(render().asFragment()).toMatchSnapshot()` to ensure the component is rendered correctly

## Storybook

- Colocate stories with components/hooks (e.g., `button/button.stories.tsx`).
- Provide clear, realistic examples in stories (describe user, useful for generating tests).
- Add JSDoc code comments at the top of each story for automatic documentation in Storybook.
- Use Storybook for interactive documentation and testing.
- Prioritize to documenting the "group" of components, not individual ones
- When dealing with icon, we could use from `lucide-react` it's only deliberately used in storybook
  and marked as dev dependency.

## Path Aliases

- Use `@/utils/*`, etc. for imports (see `tsconfig.json`).

## Contribution

- Use feature branch workflow for PRs.
- Ensure all code is type-safe and well-tested.
- When discussing or implementing new features, always provide 2 or 3 reasonable approaches, explain
  the top pros and cons of each, and clarify why the selected or suggested approach is
  preferred—prioritizing browser standards.

## References

- See `README.md` for more usage and workflow details.
- Key files: `src/primitive/`, `src/feedbacks/`, `src/forms/`, `src/layouts/`, `src/navigation`, `src/overlays`, `tsconfig.json`,
  `README.md`
