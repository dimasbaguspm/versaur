# BottomBar

Compound bottom navigation bar for Versaur UI, following Material 3 guidelines and Versaur design system.

## Usage

```tsx
<BottomBar variant="primary">
  <BottomBar.Item icon={<HomeIcon />} active label="Home" />
  <BottomBar.Item icon={<SearchIcon />} label="Search" />
  <BottomBar.Item icon={<ProfileIcon />} label="Profile" />
</BottomBar>
```

## API
- `BottomBar`: main container, accepts `variant` and `size` props
- `BottomBar.Item`: navigation/action item, accepts `icon`, `label`, `active`

## Testing

Unit tests are colocated in `__tests__/bottom-bar.test.tsx` and use Vitest + React Testing Library. Stories are rendered using `composeStories` from Storybook for consistency.

```tsx
import { render, screen } from '@testing-library/react'
import { composeStories } from '@storybook/react'
import * as stories from '../bottom-bar.stories'

const { ThreeItems, FiveItems } = composeStories(stories)

describe('BottomBar', () => {
  it('renders 3 items and matches snapshot', () => {
    const { asFragment } = render(<ThreeItems />)
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('Search')).toBeInTheDocument()
    expect(screen.getByText('Profile')).toBeInTheDocument()
    expect(asFragment()).toMatchSnapshot()
  })

  it('renders 5 items and matches snapshot', () => {
    const { asFragment } = render(<FiveItems />)
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('Search')).toBeInTheDocument()
    expect(screen.getByText('Settings')).toBeInTheDocument()
    expect(screen.getByText('Profile')).toBeInTheDocument()
    expect(asFragment()).toMatchSnapshot()
  })

  it('has accessible role navigation', () => {
    render(<ThreeItems />)
    expect(screen.getByRole('navigation')).toBeInTheDocument()
  })
})
```

- All tests assert accessibility and correct HTML output
- Snapshots ensure visual consistency
- See Storybook stories for more interactive examples
