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

