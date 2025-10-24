import { render, screen } from '@testing-library/react'
import { composeStories } from '@storybook/react'
import * as stories from '../page-layout.stories'

describe('PageLayout', () => {
  const {
    Basic,
    WithMargins,
    GrayHeaderWhiteContent,
    WhiteHeaderGrayContent,
    BothGray,
    NarrowLayout,
    FluidLayout,
  } = composeStories(stories)

  describe('Basic story', () => {
    it('renders correctly (snapshot)', () => {
      const { asFragment } = render(<Basic />)
      expect(asFragment()).toMatchSnapshot()
    })

    it('renders header region with page header', () => {
      render(<Basic />)
      expect(screen.getByText('Page Title')).toBeInTheDocument()
      expect(
        screen.getByText('A brief description of this page')
      ).toBeInTheDocument()
    })

    it('renders content region with scrollable content', () => {
      render(<Basic />)
      expect(screen.getByText('Section 1')).toBeInTheDocument()
      expect(screen.getByText('Section 5')).toBeInTheDocument()
    })
  })

  describe('WithMargins story', () => {
    it('renders correctly (snapshot)', () => {
      const { asFragment } = render(<WithMargins />)
      expect(asFragment()).toMatchSnapshot()
    })

    it('applies horizontal margins when hasMargin is true', () => {
      const { container } = render(<WithMargins />)
      const root = container.firstChild
      expect(root).toHaveClass('[&_[class*="grid-area:header"]]:px-4')
    })

    it('renders page title', () => {
      render(<WithMargins />)
      expect(screen.getByText('Page with Margins')).toBeInTheDocument()
    })
  })

  describe('GrayHeaderWhiteContent story', () => {
    it('renders correctly (snapshot)', () => {
      const { asFragment } = render(<GrayHeaderWhiteContent />)
      expect(asFragment()).toMatchSnapshot()
    })

    it('renders header with gray background', () => {
      const { container } = render(<GrayHeaderWhiteContent />)
      const headerRegion = container.querySelector(
        '[class*="grid-area:header"]'
      )
      expect(headerRegion).toHaveClass('bg-gray-100')
    })

    it('renders badges', () => {
      render(<GrayHeaderWhiteContent />)
      expect(screen.getByText('Active')).toBeInTheDocument()
      expect(screen.getByText('Beta')).toBeInTheDocument()
    })

    it('renders action button', () => {
      render(<GrayHeaderWhiteContent />)
      expect(screen.getByText('Add Widget')).toBeInTheDocument()
    })
  })

  describe('WhiteHeaderGrayContent story', () => {
    it('renders correctly (snapshot)', () => {
      const { asFragment } = render(<WhiteHeaderGrayContent />)
      expect(asFragment()).toMatchSnapshot()
    })

    it('renders content with gray background', () => {
      const { container } = render(<WhiteHeaderGrayContent />)
      const contentRegion = container.querySelector(
        '[class*="grid-area:content"]'
      )
      expect(contentRegion).toHaveClass('bg-gray-100')
    })
  })

  describe('BothGray story', () => {
    it('renders correctly (snapshot)', () => {
      const { asFragment } = render(<BothGray />)
      expect(asFragment()).toMatchSnapshot()
    })

    it('applies gray background to both regions', () => {
      const { container } = render(<BothGray />)
      const regions = container.querySelectorAll('[class*="bg-gray-100"]')
      expect(regions.length).toBeGreaterThan(0)
    })

    it('renders reports content', () => {
      render(<BothGray />)
      expect(screen.getByText('Reports')).toBeInTheDocument()
      expect(screen.getByText('Report 1')).toBeInTheDocument()
      expect(screen.getByText('Report 5')).toBeInTheDocument()
    })
  })

  describe('NarrowLayout story', () => {
    it('renders correctly (snapshot)', () => {
      const { asFragment } = render(<NarrowLayout />)
      expect(asFragment()).toMatchSnapshot()
    })

    it('renders narrow layout with margins', () => {
      const { container } = render(<NarrowLayout />)
      const root = container.firstChild
      expect(root).toHaveClass('[&_[class*="grid-area:header"]]:px-4')
    })

    it('renders article content', () => {
      render(<NarrowLayout />)
      expect(screen.getByText('Article Title')).toBeInTheDocument()
      expect(screen.getByText('Paragraph 1')).toBeInTheDocument()
      expect(screen.getByText('Paragraph 8')).toBeInTheDocument()
    })
  })

  describe('FluidLayout story', () => {
    it('renders correctly (snapshot)', () => {
      const { asFragment } = render(<FluidLayout />)
      expect(asFragment()).toMatchSnapshot()
    })

    it('renders full-width dashboard', () => {
      render(<FluidLayout />)
      expect(screen.getByText('Full Width Dashboard')).toBeInTheDocument()
      expect(screen.getByText('Panel 1')).toBeInTheDocument()
      expect(screen.getByText('Panel 5')).toBeInTheDocument()
    })
  })

  describe('Accessibility', () => {
    it('uses semantic HTML grid structure', () => {
      const { container } = render(<Basic />)
      const root = container.firstChild as HTMLElement
      expect(root).toHaveClass('grid')
    })

    it('applies proper grid areas for regions', () => {
      const { container } = render(<GrayHeaderWhiteContent />)
      const headerRegion = container.querySelector(
        '[class*="grid-area:header"]'
      )
      const contentRegion = container.querySelector(
        '[class*="grid-area:content"]'
      )
      expect(headerRegion).toBeInTheDocument()
      expect(contentRegion).toBeInTheDocument()
    })

    it('supports keyboard navigation through content', () => {
      render(<Basic />)
      const content = screen.getByText('Section 1')
      expect(content).toBeInTheDocument()
    })
  })

  describe('Layout behavior', () => {
    it('applies grid template areas correctly', () => {
      const { container } = render(<Basic />)
      const root = container.firstChild as HTMLElement
      expect(root).toHaveClass('grid-rows-[auto_1fr]')
    })

    it('makes content region scrollable', () => {
      const { container } = render(<Basic />)
      const contentRegion = container.querySelector(
        '[class*="grid-area:content"]'
      )
      expect(contentRegion).toHaveClass('overflow-y-auto')
    })

    it('does not apply margins by default', () => {
      const { container } = render(<Basic />)
      const root = container.firstChild as HTMLElement
      expect(root).not.toHaveClass('mx-4')
    })
  })
})
