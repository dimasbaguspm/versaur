# TopBar

A desktop-only compound layout header/navigation bar for Versaur UI. Follows the design system and code style conventions. Inspired by GitHub's TopBar, but adapted for Versaur's color palette, spacing, and accessibility.

## Usage

```tsx
<TopBar variant="primary">
  <TopBar.Leading>
    {/* Logo, brand, navigation */}
    <TopBar.Nav>
      <TopBar.NavItem active>Home</TopBar.NavItem>
      <TopBar.NavItem>Docs</TopBar.NavItem>
      <TopBar.NavItem>Pricing</TopBar.NavItem>
    </TopBar.Nav>
  </TopBar.Leading>
  <TopBar.Trailing>
    <TopBar.Actions>
      {/* Actions, profile, etc */}
      <ButtonIcon aria-label="Notifications" />
      <ButtonIcon aria-label="Settings" />
    </TopBar.Actions>
    <Avatar size="sm">DM</Avatar>
  </TopBar.Trailing>
</TopBar>
```

### Example: Navigation
```tsx
<TopBar>
  <TopBar.Leading>
    <TopBar.Nav>
      <TopBar.NavItem active>Home</TopBar.NavItem>
      <TopBar.NavItem>Docs</TopBar.NavItem>
      <TopBar.NavItem>Pricing</TopBar.NavItem>
    </TopBar.Nav>
  </TopBar.Leading>
  <TopBar.Trailing>
    <TopBar.Actions>
      <TopBar.NavItem>Sign In</TopBar.NavItem>
    </TopBar.Actions>
  </TopBar.Trailing>
</TopBar>
```

## API

- `TopBar`: Main container
- `TopBar.Leading`: Left section (logo, brand, navigation)
- `TopBar.Trailing`: Right section (actions, profile, etc)
- `TopBar.Nav`: Container for navigation items
- `TopBar.NavItem`: Individual navigation item
- `TopBar.Actions`: Container for action items

## Accessibility

- Uses semantic elements (`header`, `nav`)
- `aria-current="page"` for active navigation item
- Follows WCAG 2.1 AA color and contrast standards
