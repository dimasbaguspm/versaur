# Anchor

Primitive anchor component for Versaur UI library. Renders an accessible `<a>` tag with color roles,
font utilities, and pseudo selector support.

## Usage

```tsx
import { Anchor } from '@/primitive/anchor'

// Default anchor (with underline)
<Anchor
  href='https://versaur.com'
  target='_blank'
  color='primary'
  fontSize='base'
  fontWeight='medium'
>
  Versaur Docs
</Anchor>

// Quiet anchor (no underline)
<Anchor
  href='https://versaur.com'
  target='_blank'
  color='primary'
  fontSize='base'
  fontWeight='medium'
  quiet
>
  Versaur Docs
</Anchor>
```

## Props

- `color`: 'primary' | 'secondary' | 'ghost' | 'danger' | 'neutral' (default: 'primary')
- `fontSize`: Tailwind font size utility (default: 'base')
- `fontWeight`: Tailwind font weight utility (default: 'medium')
- `quiet`: boolean — removes underline style when true (default: false)
- All standard anchor (`<a>`) props

## Pseudo Selectors & Variants

- `:hover` and `:visited` states are styled according to color and web standards
- `quiet` disables underline and hover underline

## Accessibility

- Uses native anchor semantics
- Focus ring and hover states for clarity
- Follows WCAG 2.1 AA contrast

## Testing

- Unit tests use `composeStories` from Storybook
- Snapshot and accessibility assertions included

## Storybook

- Stories demonstrate all color roles, font utilities, pseudo selectors, and quiet variant

---

For more details, see the Versaur design system and contribution guidelines.
