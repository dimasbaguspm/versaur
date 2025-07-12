# Copilot Instructions for Versaur UI Library

## Project Overview

- **Versaur** is a modern React UI library using TypeScript and Tailwind CSS.
- Components are tree-shakable and organized under `src/components/` (one directory per component,
  kebab-case).
- Utilities are in `src/utils/`, hooks in `src/hooks/`, and styles in `src/styles/`.
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
    button.tsx
    index.ts
    button.stories.tsx
    types.ts
    readme.md
    button.atoms.tsx
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

## Design System & Theme

Versaur follows modern design system principles with a **warm, earthy color palette** that creates
natural harmony and excellent accessibility. Our color system uses analogous warm tones that feel
connected and organic.

### Color Palette & Semantic Roles

Our harmonious color system defines clear semantic roles with light, base, and dark variations:

| Role          | Color Name       | Light     | Base      | Dark      | Usage                             |
| ------------- | ---------------- | --------- | --------- | --------- | --------------------------------- |
| **Primary**   | Atomic Tangerine | `#F4C4A6` | `#E58F65` | `#C66B3D` | Main actions, brand identity      |
| **Secondary** | Earth Yellow     | `#F5D7B5` | `#EFBB75` | `#E09A47` | Secondary actions, accents        |
| **Tertiary**  | Flax             | `#FCF2C4` | `#F9E784` | `#F3D93E` | Subtle highlights, backgrounds    |
| **Success**   | Sage Green       | `#D4E6D4` | `#A8C8A8` | `#7BA77B` | Success states, positive feedback |
| **Info**      | Warm Blue        | `#D6E5F0` | `#8BB5D9` | `#5A8DB3` | Information, neutral alerts       |
| **Warning**   | Flax             | `#FCF2C4` | `#F9E784` | `#F3D93E` | Warning states, caution           |
| **Danger**    | Indian Red       | `#E8A8A8` | `#D05353` | `#B63636` | Error states, destructive actions |
| **Neutral**   | Warm Gray        | `#F1E8B8` | `#753636` | `#191919` | Text, borders, backgrounds        |

### Color Harmony Principles

Our palette follows these harmonious relationships:

1. **Analogous Harmony**: Colors are adjacent on the color wheel (yellows, oranges, reds)
2. **Warm Temperature**: All colors have warm undertones for cohesion
3. **Natural Progression**: Colors flow naturally from light to dark
4. **Complementary Accents**: Sage green and warm blue provide gentle contrast without breaking harmony

### Color Psychology

- **Primary (Atomic Tangerine)**: Confident, energetic, approachable
- **Secondary (Earth Yellow)**: Warm, stable, optimistic
- **Tertiary (Flax)**: Gentle, subtle, sophisticated
- **Success (Sage Green)**: Natural, growth, positive
- **Info (Warm Blue)**: Trustworthy, calm, informative
- **Warning (Flax)**: Cautious but not alarming
- **Danger (Indian Red)**: Attention-grabbing, urgent, clear

### Accessibility & Contrast

All color combinations meet WCAG 2.1 AA standards:

- **Text on backgrounds**: Minimum 4.5:1 contrast ratio
- **Interactive elements**: Minimum 3:1 contrast ratio
- **Focus indicators**: Clear visual distinction

### CSS Custom Properties

All colors are available as CSS custom properties with light, base, and dark variations:

```css
:root {
  /* Primary Colors */
  --color-primary-light: #f4c4a6;
  --color-primary: #e58f65;
  --color-primary-dark: #c66b3d;

  /* Secondary Colors */
  --color-secondary-light: #f5d7b5;
  --color-secondary: #efbb75;
  --color-secondary-dark: #e09a47;

  /* Tertiary Colors */
  --color-tertiary-light: #fcf2c4;
  --color-tertiary: #f9e784;
  --color-tertiary-dark: #f3d93e;

  /* Success Colors */
  --color-success-light: #d4e6d4;
  --color-success: #a8c8a8;
  --color-success-dark: #7ba77b;

  /* Info Colors */
  --color-info-light: #d6e5f0;
  --color-info: #8bb5d9;
  --color-info-dark: #5a8db3;

  /* Warning Colors */
  --color-warning-light: #fcf2c4;
  --color-warning: #f9e784;
  --color-warning-dark: #f3d93e;

  /* Danger Colors */
  --color-danger-light: #e8a8a8;
  --color-danger: #d05353;
  --color-danger-dark: #b63636;

  /* Neutral Colors */
  --color-background: #f1e8b8;
  --color-foreground: #191919;
  --color-muted: #753636;
  --color-border: #753636;
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

