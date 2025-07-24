# Anchor

Primitive anchor component for Versaur UI library. Renders an accessible `<a>` tag with color roles,
font utilities, and pseudo selector support.

## Usage

```tsx
import { Anchor } from '@/primitive/anchor'

;<Anchor
  href='https://versaur.com'
  target='_blank'
  color='primary'
  fontSize='base'
  fontWeight='medium'
>
  Versaur Docs
</Anchor>
```

## Props

- `color`: 'primary' | 'secondary' | 'ghost' | 'danger' | 'neutral' (default: 'primary')
- `fontSize`: Tailwind font size utility (default: 'base')
- `fontWeight`: Tailwind font weight utility (default: 'medium')
- All standard anchor (`<a>`) props

## Pseudo Selectors

- `:hover` and `:visited` states are styled according to color and web standards

## Accessibility

- Uses native anchor semantics
- Focus ring and hover states for clarity
- Follows WCAG 2.1 AA contrast

## Testing

- Unit tests use `composeStories` from Storybook
- Snapshot and accessibility assertions included

## Storybook

- Stories demonstrate all color roles, font utilities, and pseudo selectors

---

For more details, see the Versaur design system and contribution guidelines.
