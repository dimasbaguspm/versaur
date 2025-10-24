import { render, screen } from '@testing-library/react'
import { composeStories } from '@storybook/react'
import * as stories from '../app-layout.stories'

describe('AppLayout', () => {
  const { TopAndMain, LeftSidebarAndMain, ThreeColumn, WithBottomNav } =
    composeStories(stories)

  describe('TopAndMain story', () => {
    it('renders correctly (snapshot)', () => {
      const { asFragment } = render(<TopAndMain />)
      expect(asFragment()).toMatchSnapshot()
    })

    it('renders top region with TopBar and main region with scrollable content', () => {
      render(<TopAndMain />)
      expect(screen.getByText('Simple Layout')).toBeInTheDocument()
      expect(screen.getByText('Section 1')).toBeInTheDocument()
      expect(screen.getByText('Section 8')).toBeInTheDocument()
    })

    it('does not render sidebars or bottom region', () => {
      render(<TopAndMain />)
      expect(screen.queryByText('Projects')).not.toBeInTheDocument()
      expect(screen.queryByText('Activity Panel')).not.toBeInTheDocument()
    })

    it('renders tabs', () => {
      render(<TopAndMain />)
      expect(screen.getByRole('tab', { name: 'Overview' })).toBeInTheDocument()
      expect(screen.getByRole('tab', { name: 'Details' })).toBeInTheDocument()
    })
  })

  describe('LeftSidebarAndMain story', () => {
    it('renders correctly (snapshot)', () => {
      const { asFragment } = render(<LeftSidebarAndMain />)
      expect(asFragment()).toMatchSnapshot()
    })

    it('renders left sidebar with menu items', () => {
      render(<LeftSidebarAndMain />)
      expect(screen.getByText('Overview')).toBeInTheDocument()
      expect(screen.getByText('Analytics')).toBeInTheDocument()
      expect(screen.getByText('Settings')).toBeInTheDocument()
    })

    it('renders dashboard content with scrollable widgets', () => {
      render(<LeftSidebarAndMain />)
      expect(screen.getByText('Dashboard Content')).toBeInTheDocument()
      expect(screen.getByText('Widget 1')).toBeInTheDocument()
      expect(screen.getByText('Widget 6')).toBeInTheDocument()
    })
  })

  describe('ThreeColumn story', () => {
    it('renders correctly (snapshot)', () => {
      const { asFragment } = render(<ThreeColumn />)
      expect(asFragment()).toMatchSnapshot()
    })

    it('renders all three columns', () => {
      render(<ThreeColumn />)
      // Left sidebar
      expect(screen.getByText('Home')).toBeInTheDocument()
      // Main content
      expect(screen.getByText('Three Column Layout')).toBeInTheDocument()
      // Right sidebar
      expect(screen.getByText('Details')).toBeInTheDocument()
    })

    it('renders scrollable main content', () => {
      render(<ThreeColumn />)
      expect(screen.getByText('Item 1')).toBeInTheDocument()
      expect(screen.getByText('Item 12')).toBeInTheDocument()
    })
  })

  describe('WithBottomNav story', () => {
    it('renders correctly (snapshot)', () => {
      const { asFragment } = render(<WithBottomNav />)
      expect(asFragment()).toMatchSnapshot()
    })

    it('renders mobile app layout with bottom navigation', () => {
      render(<WithBottomNav />)
      expect(screen.getByText('Feed')).toBeInTheDocument()
    })

    it('renders scrollable feed posts', () => {
      render(<WithBottomNav />)
      expect(screen.getByText('Post 1')).toBeInTheDocument()
      expect(screen.getByText('Post 15')).toBeInTheDocument()
    })
  })

  describe('Accessibility', () => {
    it('uses semantic HTML elements', () => {
      const { container } = render(<ThreeColumn />)
      expect(container.querySelector('aside')).toBeInTheDocument()
      expect(container.querySelector('main')).toBeInTheDocument()
    })

    it('renders multiple aside elements for sidebars', () => {
      const { container } = render(<ThreeColumn />)
      const asides = container.querySelectorAll('aside')
      expect(asides).toHaveLength(2) // left and right sidebars
    })

    it('main region is scrollable with proper classes', () => {
      const { container } = render(<ThreeColumn />)
      const main = container.querySelector('main')
      expect(main).toHaveClass('overflow-y-auto')
      expect(main).toHaveClass('min-h-0')
    })

    it('root container prevents document-level scroll', () => {
      const { container } = render(<ThreeColumn />)
      const root = container.querySelector('[class*="grid"]')
      expect(root).toHaveClass('h-screen')
      expect(root).toHaveClass('overflow-hidden')
    })

    it('sidebars do not have overflow-y-auto class', () => {
      const { container } = render(<ThreeColumn />)
      const asides = container.querySelectorAll('aside')
      asides.forEach(aside => {
        expect(aside).not.toHaveClass('overflow-y-auto')
      })
    })
  })

  describe('Grid Area Positioning', () => {
    it('main region uses grid-area for positioning', () => {
      const { container } = render(<ThreeColumn />)
      const main = container.querySelector('main')
      expect(main?.className).toContain('[grid-area:main]')
    })

    it('sidebars use grid-area for positioning', () => {
      const { container } = render(<ThreeColumn />)
      const asides = container.querySelectorAll('aside')
      expect(asides[0]?.className).toContain('[grid-area:left]')
      expect(asides[1]?.className).toContain('[grid-area:right]')
    })

    it('top region uses grid-area', () => {
      const { container } = render(<TopAndMain />)
      const topElement = container.querySelector('[class*="[grid-area:top]"]')
      expect(topElement).toBeInTheDocument()
    })

    it('bottom region uses grid-area', () => {
      const { container } = render(<WithBottomNav />)
      const bottomElement = container.querySelector(
        '[class*="[grid-area:bottom]"]'
      )
      expect(bottomElement).toBeInTheDocument()
    })
  })

  describe('Scoped Scrolling Behavior', () => {
    it('only main region has scrolling enabled', () => {
      const { container } = render(<ThreeColumn />)

      const main = container.querySelector('main')
      expect(main).toHaveClass('overflow-y-auto')

      // Top region should not scroll
      const topElement = container.querySelector('[class*="[grid-area:top]"]')
      expect(topElement?.className).not.toContain('overflow')

      // Sidebars should not scroll
      const asides = container.querySelectorAll('aside')
      asides.forEach(aside => {
        expect(aside.className).not.toContain('overflow-y-auto')
      })
    })

    it('root container constrains height to viewport', () => {
      const { container } = render(<ThreeColumn />)
      const root = container.querySelector('[class*="grid"]')
      expect(root).toHaveClass('h-screen')
      expect(root).not.toHaveClass('min-h-screen')
    })

    it('main region has min-h-0 for grid overflow', () => {
      const { container } = render(<ThreeColumn />)
      const main = container.querySelector('main')
      expect(main).toHaveClass('min-h-0')
    })
  })
})
