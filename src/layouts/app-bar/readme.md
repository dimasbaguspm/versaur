# AppBar

Compound layout header/navigation bar for Versaur UI

## Usage

```tsx
<AppBar>
  <AppBar.Leading>
    {/* Logo or nav icon */}
  </AppBar.Leading>
  <AppBar.Center>
    <AppBar.Headline>Title</AppBar.Headline>
    <AppBar.Subtitle>Subtitle</AppBar.Subtitle>
  </AppBar.Center>
  <AppBar.Trailing>
    {/* Actions, avatar, etc. */}
  </AppBar.Trailing>
  <AppBar.Bottom>
    {/* Tabs, filters, etc. Always renders on a new line */}
  </AppBar.Bottom>
</AppBar>
```

### AppBar.Bottom Layout

- `AppBar.Bottom` can be placed anywhere among children.
- It will always render on a new line (full width) due to a data attribute and Tailwind CSS selector.
- No extra JavaScript logic is used; layout is enforced by CSS.
- You can have multiple `AppBar.Bottom` if needed; all will render as new lines.

#### Example: Bottom in the middle
```tsx
<AppBar>
  <AppBar.Leading>...</AppBar.Leading>
  <AppBar.Bottom>Tabs</AppBar.Bottom>
  <AppBar.Center>...</AppBar.Center>
  <AppBar.Trailing>...</AppBar.Trailing>
</AppBar>
```

### Example: Home
```tsx
<AppBar variant="tertiary">
  <AppBar.Leading>
    <Avatar size="sm">DM</Avatar>
  </AppBar.Leading>
  <AppBar.Center placement="center">
    <AppBar.Headline>Spenicle</AppBar.Headline>
  </AppBar.Center>
  <AppBar.Trailing>
    <ButtonIcon variant="neutral-ghost" size="sm" shape="circle" aria-label="More">
      <EllipsisVerticalIcon />
    </ButtonIcon>
  </AppBar.Trailing>
</AppBar>
```

## API
- `AppBar`: main container, accepts `variant` prop
- `AppBar.Leading`: left section (logo, nav, avatar)
- `AppBar.Center`: vertical stack for headline/subtitle, accepts `placement` prop
- `AppBar.Headline`: main title, truncates text
- `AppBar.Subtitle`: subtitle, truncates text
- `AppBar.Trailing`: right section (actions, avatar, etc.)
- `AppBar.Bottom`: bottom section (tabs, filters, etc.), always new line

## Props
- `variant`: color variant (primary, secondary, tertiary, ghost, neutral)
- `height`: custom height (default: 4rem)
- All sub-components accept `className` and `children`
- `AppBar.Center` accepts `placement` (`center` or default)

## Accessibility
- Uses `role="banner"` for main header
- Sub-components are flexible for ARIA roles
- Headline and subtitle are truncated for overflow

## Design
- Mobile-first responsive layout
- Follows Versaur color system and spacing
- All atoms are tree-shakable and strictly typed
- `AppBar.Bottom` layout is enforced by `[data-versaur-appbar-bottom]` and Tailwind CSS

## Testing
- See `__tests__/app-bar.test.tsx` for unit and snapshot tests
- Storybook stories demonstrate all major variants and composition
