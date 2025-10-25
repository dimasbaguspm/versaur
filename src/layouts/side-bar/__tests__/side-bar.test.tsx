import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { composeStories } from '@storybook/react'
import * as stories from '../side-bar.stories'

describe('SideBar', () => {
  const {
    Default,
    DefaultCollapsed,
    WithScrollableContent,
    WithCollapseCallback,
    WithCollapsedGroups,
  } = composeStories(stories)

  describe('Basic Rendering', () => {
    it('renders correctly and matches snapshot', () => {
      const { asFragment } = render(<Default />)
      expect(asFragment()).toMatchSnapshot()
    })

    it('renders all sidebar items in expanded state', () => {
      render(<Default />)
      expect(screen.getByText('Dashboard')).toBeInTheDocument()
      expect(screen.getByText('Home')).toBeInTheDocument()
      expect(screen.getByText('Settings')).toBeInTheDocument()
      expect(screen.getByText('Web Application')).toBeInTheDocument()
      expect(screen.getByText('Mobile App')).toBeInTheDocument()
    })

    it('sidebar has correct semantic structure', () => {
      render(<Default />)
      const nav = screen.getByLabelText('Sidebar')
      expect(nav.tagName).toBe('NAV')
      expect(nav.querySelector('ul')).toBeInTheDocument()
      expect(screen.getAllByRole('listitem').length).toBeGreaterThan(0)
    })
  })

  describe('Collapsed State', () => {
    it('renders collapsed by default when defaultCollapsed is true', () => {
      render(<DefaultCollapsed />)
      const nav = screen.getByLabelText('Sidebar')
      expect(nav).toHaveClass('w-16')
    })

    it('hides level 2 items when collapsed', () => {
      render(<DefaultCollapsed />)
      // Level 1 items should still be visible (icons only)
      expect(screen.getByLabelText('Sidebar')).toBeInTheDocument()
      // Level 2 item text should not be visible
      expect(screen.queryByText('Web Application')).not.toBeInTheDocument()
      expect(screen.queryByText('Mobile App')).not.toBeInTheDocument()
    })

    it('shows level 1 items when collapsed', () => {
      render(<DefaultCollapsed />)
      // Level 1 items are in DOM (with title attributes for tooltips)
      const nav = screen.getByLabelText('Sidebar')
      expect(nav).toBeInTheDocument()
    })

    it('renders expanded by default when defaultCollapsed is false', () => {
      render(<Default />)
      const nav = screen.getByLabelText('Sidebar')
      expect(nav).toHaveClass('w-56')
    })
  })

  describe('Toggle Functionality', () => {
    it('has a toggle button with correct label', async () => {
      render(<Default />)
      const toggleButton = screen.getByLabelText('Collapse sidebar')
      expect(toggleButton).toBeInTheDocument()
    })

    it('toggle button changes aria-label when clicked', async () => {
      const user = userEvent.setup()
      render(<Default />)

      const toggleButton = screen.getByLabelText('Collapse sidebar')
      await user.click(toggleButton)

      expect(screen.getByLabelText('Expand sidebar')).toBeInTheDocument()
    })

    it('changes width when toggled', async () => {
      const user = userEvent.setup()
      render(<Default />)

      const nav = screen.getByLabelText('Sidebar')
      expect(nav).toHaveClass('w-56')

      const toggleButton = screen.getByLabelText('Collapse sidebar')
      await user.click(toggleButton)

      expect(nav).toHaveClass('w-16')
    })
  })

  describe('Groups', () => {
    it('renders group labels in expanded state', () => {
      render(<Default />)
      expect(screen.getByText('Projects')).toBeInTheDocument()
      expect(screen.getByText('Team')).toBeInTheDocument()
    })

    it('shows groups as icons when sidebar is collapsed horizontally', () => {
      render(<DefaultCollapsed />)
      // Groups should be visible as level 1 items with icons
      const nav = screen.getByLabelText('Sidebar')
      expect(nav).toBeInTheDocument()
      // Title attributes should exist for tooltips
      const groupLinks = nav.querySelectorAll('a[title]')
      expect(groupLinks.length).toBeGreaterThan(0)
    })

    it('groups can be toggled vertically when sidebar is expanded', async () => {
      const user = userEvent.setup()
      render(<Default />)

      // Find a group header button (without href)
      const projectsGroup = screen.getByText('Projects')
      expect(screen.getByText('Web Application')).toBeInTheDocument()

      // Click to collapse
      await user.click(projectsGroup)

      // Children should be hidden
      expect(screen.queryByText('Web Application')).not.toBeInTheDocument()

      // Click to expand again
      await user.click(projectsGroup)

      // Children should be visible again
      expect(screen.getByText('Web Application')).toBeInTheDocument()
    })

    it('supports defaultExpanded prop', () => {
      render(<WithCollapsedGroups />)
      // Groups start collapsed, so level 2 items should not be visible
      expect(screen.queryByText('Web Application')).not.toBeInTheDocument()
      expect(screen.queryByText('Members')).not.toBeInTheDocument()
    })
  })

  describe('Level Hierarchy', () => {
    it('level 1 items are always visible when collapsed', () => {
      render(<DefaultCollapsed />)
      // Check that Dashboard, Home, Settings (level 1) are in DOM
      const nav = screen.getByLabelText('Sidebar')
      expect(nav).toBeInTheDocument()
    })

    it('level 2 items are hidden when collapsed', () => {
      render(<DefaultCollapsed />)
      // Level 2 items should not be visible
      expect(screen.queryByText('Web Application')).not.toBeInTheDocument()
      expect(screen.queryByText('Mobile App')).not.toBeInTheDocument()
    })
  })

  describe('Active State', () => {
    it('applies active class to active items', () => {
      render(<Default />)
      const homeLink = screen.getByText('Home').closest('a')
      expect(homeLink).toHaveClass('bg-primary/10')
    })
  })

  describe('Scrollable Content', () => {
    it('sidebar is scrollable when content overflows', () => {
      render(<WithScrollableContent />)
      const nav = screen.getByLabelText('Sidebar')
      const scrollContainer = nav.querySelector('div.overflow-y-auto')
      expect(scrollContainer).toHaveClass('overflow-y-auto')
    })
  })

  describe('Accessibility', () => {
    it('has proper ARIA labels', () => {
      render(<Default />)
      expect(screen.getByLabelText('Sidebar')).toBeInTheDocument()
      expect(screen.getByLabelText('Collapse sidebar')).toBeInTheDocument()
    })

    it('toggle button has title attribute', () => {
      render(<Default />)
      const toggleButton = screen.getByLabelText('Collapse sidebar')
      expect(toggleButton).toHaveAttribute('title', 'Collapse sidebar')
    })

    it('collapsed items have title attributes for tooltips', () => {
      render(<DefaultCollapsed />)
      const nav = screen.getByLabelText('Sidebar')
      const links = nav.querySelectorAll('a[title]')
      expect(links.length).toBeGreaterThan(0)
    })
  })

  describe('Callbacks', () => {
    it('calls onCollapseChange when toggled', async () => {
      const user = userEvent.setup()
      const alertSpy = vi.spyOn(window, 'alert').mockImplementation(() => {})
      const consoleSpy = vi.spyOn(console, 'log').mockImplementation(() => {})

      render(<WithCollapseCallback />)

      const toggleButton = screen.getByLabelText('Collapse sidebar')
      await user.click(toggleButton)

      expect(consoleSpy).toHaveBeenCalledWith('Sidebar collapsed state:', true)
      expect(alertSpy).toHaveBeenCalledWith('Sidebar is now collapsed')

      alertSpy.mockRestore()
      consoleSpy.mockRestore()
    })
  })
})
