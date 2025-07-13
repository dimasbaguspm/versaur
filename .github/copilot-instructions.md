# Copilot Instructions for Versaur UI Library

## Project Overview

- **Versaur** is a modern React UI library using TypeScript and Tailwind v4 CSS.
- Components are tree-shakable and organized under `src/components/` (one directory per component,
  kebab-case).
- Utilities are in `src/utils/`, hooks in `src/hooks/`, and styles in `src/styles.css`.
- Subpath exports are supported for optimal bundle size.

## Naming & Structure

- Use kebab-case for all files and directories (e.g., `button/button.tsx`).
- Use PascalCase for component names (e.g., `IamComponent`).
- Place each component in its own directory under `src/components/*`.
- Place each hook in its own directory under `src/hooks/*`.
- Each component/hook directory must have a barrel file (`index.ts`) to expose its public API.
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

Use the **Compound Pattern** for complex components that require multiple related sub-components and sophisticated state management. This pattern provides flexible composition while maintaining clear relationships between parts.

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

For compound components that need shared state or communication between parent and sub-components, combine with the **Context Pattern**:

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

Use the **Regular Pattern** for simple components that directly align with standard HTML browser elements. These components should feel familiar and behave consistently with native browser behavior.

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

## Design System & Theme

Versaur follows modern design system principles with a **clean, focused color palette** perfect for professional applications with clear hierarchy and accessibility. Our color system uses harmonious tones that feel natural and trustworthy.

### Color Palette & Semantic Roles

Our harmonious color system defines clear semantic roles based on the Spenicle palette:

| Role          | Color Name | Color     | Usage                             |
| ------------- | ---------- | --------- | --------------------------------- |
| **Primary**   | Coral      | `#e07a5f` | Main actions, CTAs, brand identity |
| **Secondary** | Sage       | `#81b29a` | Secondary actions, balance states |
| **Tertiary**  | Mist       | `#84a5c0` | Subtle backgrounds, professional elements |
| **Ghost**     | Slate      | `#3d405b` | Text, minimal actions, borders    |
| **Neutral**   | Light Gray | `#f8f9fa` | Neutral surfaces, cards, secondary backgrounds |
| **Success**   | Success    | `#6db285` | Success states, positive feedback |
| **Info**      | Info       | `#6b8fad` | Information, neutral alerts       |
| **Warning**   | Warning    | `#e08a47` | Warning states, caution           |
| **Danger**    | Danger     | `#e06650` | Error states, destructive actions |

### Color Harmony Principles

Our palette follows these harmonious relationships:

1. **Professional Harmony**: Colors work together for business applications
2. **Natural Temperature**: Warm coral balanced with cool sage and mist
3. **Clear Hierarchy**: Each color has a distinct purpose and usage
4. **Complementary Balance**: Coral (warm) balanced with sage/mist (cool)

### Color Psychology

- **Coral (Primary)**: Energetic, friendly, action-oriented
- **Sage (Secondary)**: Calming, natural, trustworthy
- **Mist (Tertiary)**: Professional, subtle, supportive
- **Slate (Ghost)**: Serious, reliable, minimal
- **Light Gray (Neutral)**: Clean, subtle, unobtrusive

### Accessibility & Contrast

All color combinations meet WCAG 2.1 AA standards:

- **Text on backgrounds**: Minimum 4.5:1 contrast ratio
- **Interactive elements**: Minimum 3:1 contrast ratio
- **Focus indicators**: Clear visual distinction

### CSS Custom Properties

All colors are available as CSS custom properties with light, base, and dark variations:

```css
:root {
  /* Core Colors */
  --color-coral: #e07a5f;
  --color-sage: #81b29a;
  --color-mist: #84a5c0;
  --color-slate: #3d405b;
  --color-cream: #f4f1de;
  --color-light-gray: #f8f9fa;

  /* Semantic Colors */
  --color-success: #6db285;
  --color-info: #6b8fad;
  --color-warning: #e08a47;
  --color-danger: #e06650;

  /* Background and Foreground */
  --color-background: #ffffff; /* White */
  --color-foreground: #2d3748; /* Darker Slate */

  /* Button/Component Variants */
  --color-primary: #e07a5f; /* Coral */
  --color-secondary: #81b29a; /* Sage */
  --color-tertiary: #84a5c0; /* Mist */
  --color-ghost: #3d405b; /* Slate */
  --color-neutral: #f8f9fa; /* Light Gray */
}
```

## Testing

- Colocate tests with components/hooks (e.g., `button/__tests__/button.tsx`).
- Use Vitest and React Testing Library for unit/component tests.
- Always use `composeStories` from `@storybook/react` to render stories in tests.
- DOM environment is provided by jsdom.

## Storybook

- Colocate stories with components/hooks (e.g., `button/button.stories.tsx`).
- Provide clear, realistic examples in stories (describe user, useful for generating tests).
- Add JSDoc code comments at the top of each story for automatic documentation in Storybook.
- Use Storybook for interactive documentation and testing.
- Prioritize to documenting the "group" of components, not individual ones
- When dealing with icon, we could use from `lucide-react` it's only deliberately used in storybook and marked as dev dependency.

## Path Aliases

- Use `@/components/*`, `@/utils/*`, `@/hooks/*`, etc. for imports (see `tsconfig.json`).

## Contribution

- Use feature branch workflow for PRs.
- Ensure all code is type-safe and well-tested.
- When discussing or implementing new features, always provide 2 or 3 reasonable approaches, explain
  the top pros and cons of each, and clarify why the selected or suggested approach is
  preferred—prioritizing browser standards.

## References

- See `README.md` for more usage and workflow details.
- Key files: `src/components/`, `src/hooks/`, `src/utils/`, `src/styles/`, `tsconfig.json`,
  `README.md`

