import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import {
  BREAKPOINT_DESKTOP,
  BREAKPOINT_MOBILE,
  BREAKPOINT_TABLET,
  DesktopBreakpoint,
  MatchMedia,
  MobileBreakpoint,
  TabletBreakpoint,
  useDesktopBreakpoint,
  useMatchMedia,
  useMobileBreakpoint,
  useTabletBreakpoint,
} from './index'

/**
 * Match Media helpers provide responsive breakpoint detection using the native `matchMedia` API.
 *
 * This story demonstrates the various hooks and components available for responsive design.
 *
 * **Features:**
 * - Standard Tailwind-aligned breakpoint constants
 * - Hooks for programmatic breakpoint detection
 * - JSX components for declarative responsive rendering
 * - Uses native `matchMedia` API for optimal performance
 */
const meta = {
  title: 'Helpers/Match Media',
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Responsive breakpoint utilities using native matchMedia API for performance and reliability.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

/**
 * Demonstrates all breakpoint detection hooks in action.
 * Resize your browser window to see the hooks respond to viewport changes.
 */
const AllHooksDemo = () => {
  const isMobile = useMobileBreakpoint()
  const isTablet = useTabletBreakpoint()
  const isDesktop = useDesktopBreakpoint()

  return (
    <div className='space-y-4 p-6 rounded-lg border border-neutral'>
      <div className='space-y-2'>
        <h3 className='text-lg font-semibold text-foreground'>
          Current Breakpoints
        </h3>
        <p className='text-sm text-foreground-light'>
          Resize your browser window to see changes
        </p>
      </div>

      <div className='space-y-2'>
        <div className='flex items-center gap-2'>
          <div
            className={`w-3 h-3 rounded-full ${isMobile ? 'bg-success' : 'bg-neutral'}`}
          />
          <span className='text-sm text-foreground'>
            Mobile (0-767px): {isMobile ? '✓ Active' : '✗ Inactive'}
          </span>
        </div>

        <div className='flex items-center gap-2'>
          <div
            className={`w-3 h-3 rounded-full ${isTablet ? 'bg-success' : 'bg-neutral'}`}
          />
          <span className='text-sm text-foreground'>
            Tablet (768-1023px): {isTablet ? '✓ Active' : '✗ Inactive'}
          </span>
        </div>

        <div className='flex items-center gap-2'>
          <div
            className={`w-3 h-3 rounded-full ${isDesktop ? 'bg-success' : 'bg-neutral'}`}
          />
          <span className='text-sm text-foreground'>
            Desktop (1024px+): {isDesktop ? '✓ Active' : '✗ Inactive'}
          </span>
        </div>
      </div>
    </div>
  )
}

export const AllHooks: Story = {
  render: () => <AllHooksDemo />,
}

/**
 * Shows how to use the base `useMatchMedia` hook with custom media queries.
 */
const CustomMediaQueryDemo = () => {
  const isLargeScreen = useMatchMedia('(min-width: 1440px)')
  const isPortrait = useMatchMedia('(orientation: portrait)')
  const prefersDark = useMatchMedia('(prefers-color-scheme: dark)')

  return (
    <div className='space-y-4 p-6 rounded-lg border border-neutral'>
      <div className='space-y-2'>
        <h3 className='text-lg font-semibold text-foreground'>
          Custom Media Queries
        </h3>
        <p className='text-sm text-foreground-light'>
          Using useMatchMedia with custom queries
        </p>
      </div>

      <div className='space-y-2'>
        <div className='flex items-center gap-2'>
          <div
            className={`w-3 h-3 rounded-full ${isLargeScreen ? 'bg-success' : 'bg-neutral'}`}
          />
          <span className='text-sm text-foreground'>
            Large Screen (1440px+): {isLargeScreen ? '✓ Yes' : '✗ No'}
          </span>
        </div>

        <div className='flex items-center gap-2'>
          <div
            className={`w-3 h-3 rounded-full ${isPortrait ? 'bg-success' : 'bg-neutral'}`}
          />
          <span className='text-sm text-foreground'>
            Portrait Orientation: {isPortrait ? '✓ Yes' : '✗ No'}
          </span>
        </div>

        <div className='flex items-center gap-2'>
          <div
            className={`w-3 h-3 rounded-full ${prefersDark ? 'bg-success' : 'bg-neutral'}`}
          />
          <span className='text-sm text-foreground'>
            Prefers Dark Mode: {prefersDark ? '✓ Yes' : '✗ No'}
          </span>
        </div>
      </div>
    </div>
  )
}

export const CustomMediaQuery: Story = {
  render: () => <CustomMediaQueryDemo />,
}

/**
 * Demonstrates the generic MatchMedia component with custom queries.
 */
export const GenericMatchMedia: Story = {
  render: () => {
    return (
      <div className='space-y-4 p-6 rounded-lg border border-neutral'>
        <div className='space-y-2'>
          <h3 className='text-lg font-semibold text-foreground'>
            MatchMedia Component
          </h3>
          <p className='text-sm text-foreground-light'>
            Generic component for any media query
          </p>
        </div>

        <div className='space-y-3'>
          <MatchMedia query='(min-width: 1440px)'>
            <div className='p-4 bg-success-soft border border-success rounded-lg'>
              <p className='text-sm font-medium text-success-bold'>
                🖥️ Large Screen (1440px+)
              </p>
              <p className='text-xs text-success mt-1'>
                Rendered with {'<MatchMedia query="(min-width: 1440px)" />'}
              </p>
            </div>
          </MatchMedia>

          <MatchMedia query='(prefers-color-scheme: dark)'>
            <div className='p-4 bg-info-soft border border-info rounded-lg'>
              <p className='text-sm font-medium text-info-bold'>
                🌙 Dark Mode Preference
              </p>
              <p className='text-xs text-info mt-1'>
                Rendered with{' '}
                {'<MatchMedia query="(prefers-color-scheme: dark)" />'}
              </p>
            </div>
          </MatchMedia>

          <MatchMedia query='(orientation: portrait)'>
            <div className='p-4 bg-warning-soft border border-warning rounded-lg'>
              <p className='text-sm font-medium text-warning-bold'>
                📱 Portrait Orientation
              </p>
              <p className='text-xs text-warning mt-1'>
                Rendered with {'<MatchMedia query="(orientation: portrait)" />'}
              </p>
            </div>
          </MatchMedia>
        </div>

        <div className='mt-4 p-3 bg-info-soft border border-info-light rounded'>
          <p className='text-xs text-info-bold'>
            💡 Tip: MatchMedia works with any valid CSS media query, not just
            breakpoints!
          </p>
        </div>
      </div>
    )
  },
}

/**
 * Demonstrates the declarative breakpoint components.
 * These components conditionally render their children based on viewport size.
 */
export const BreakpointComponents: Story = {
  render: () => {
    return (
      <div className='space-y-4 p-6 rounded-lg border border-neutral'>
        <div className='space-y-2'>
          <h3 className='text-lg font-semibold text-foreground'>
            Breakpoint Components
          </h3>
          <p className='text-sm text-foreground-light'>
            Resize to see different content
          </p>
        </div>

        <div className='space-y-3'>
          <MobileBreakpoint>
            <div className='p-4 bg-primary-soft border border-primary rounded-lg'>
              <p className='text-sm font-medium text-primary-bold'>
                📱 Mobile View (0-767px)
              </p>
              <p className='text-xs text-primary mt-1'>
                This content only appears on mobile devices
              </p>
            </div>
          </MobileBreakpoint>

          <TabletBreakpoint>
            <div className='p-4 bg-secondary-soft border border-secondary rounded-lg'>
              <p className='text-sm font-medium text-secondary-bold'>
                📱 Tablet View (768-1023px)
              </p>
              <p className='text-xs text-secondary mt-1'>
                This content only appears on tablets
              </p>
            </div>
          </TabletBreakpoint>

          <DesktopBreakpoint>
            <div className='p-4 bg-tertiary-soft border border-tertiary rounded-lg'>
              <p className='text-sm font-medium text-tertiary-bold'>
                🖥️ Desktop View (1024px+)
              </p>
              <p className='text-xs text-tertiary mt-1'>
                This content only appears on desktop
              </p>
            </div>
          </DesktopBreakpoint>
        </div>
      </div>
    )
  },
}

/**
 * Shows a practical example of using breakpoints to conditionally render navigation.
 */
const ResponsiveNavigationDemo = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className='w-full'>
      {/* Mobile Navigation */}
      <MobileBreakpoint>
        <div className='p-4 bg-background border border-border rounded-lg'>
          <div className='flex items-center justify-between'>
            <span className='font-semibold text-foreground'>Logo</span>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className='px-3 py-2 text-sm bg-primary text-white rounded-md'
            >
              {mobileMenuOpen ? 'Close' : 'Menu'}
            </button>
          </div>
          {mobileMenuOpen && (
            <nav className='mt-4 space-y-2'>
              <a
                href='#'
                className='block px-3 py-2 text-sm text-foreground hover:bg-neutral rounded'
              >
                Home
              </a>
              <a
                href='#'
                className='block px-3 py-2 text-sm text-foreground hover:bg-neutral rounded'
              >
                Products
              </a>
              <a
                href='#'
                className='block px-3 py-2 text-sm text-foreground hover:bg-neutral rounded'
              >
                About
              </a>
            </nav>
          )}
        </div>
      </MobileBreakpoint>

      {/* Tablet Navigation */}
      <TabletBreakpoint>
        <div className='p-4 bg-background border border-border rounded-lg'>
          <div className='flex items-center justify-between'>
            <span className='font-semibold text-foreground'>Logo</span>
            <nav className='flex gap-4'>
              <a
                href='#'
                className='text-sm text-foreground hover:text-primary'
              >
                Home
              </a>
              <a
                href='#'
                className='text-sm text-foreground hover:text-primary'
              >
                Products
              </a>
              <a
                href='#'
                className='text-sm text-foreground hover:text-primary'
              >
                About
              </a>
            </nav>
          </div>
        </div>
      </TabletBreakpoint>

      {/* Desktop Navigation */}
      <DesktopBreakpoint>
        <div className='p-4 bg-background border border-border rounded-lg'>
          <div className='flex items-center justify-between'>
            <div className='flex items-center gap-8'>
              <span className='font-semibold text-foreground'>Logo</span>
              <nav className='flex gap-6'>
                <a
                  href='#'
                  className='text-sm text-foreground hover:text-primary'
                >
                  Home
                </a>
                <a
                  href='#'
                  className='text-sm text-foreground hover:text-primary'
                >
                  Products
                </a>
                <a
                  href='#'
                  className='text-sm text-foreground hover:text-primary'
                >
                  About
                </a>
                <a
                  href='#'
                  className='text-sm text-foreground hover:text-primary'
                >
                  Contact
                </a>
              </nav>
            </div>
            <button className='px-4 py-2 text-sm bg-primary text-white rounded-md'>
              Sign In
            </button>
          </div>
        </div>
      </DesktopBreakpoint>
    </div>
  )
}

export const ResponsiveNavigation: Story = {
  render: () => <ResponsiveNavigationDemo />,
}

/**
 * Demonstrates the breakpoint constants that can be used with the base hook.
 */
export const BreakpointConstants: Story = {
  render: () => {
    return (
      <div className='space-y-4 p-6 rounded-lg border border-neutral'>
        <div className='space-y-2'>
          <h3 className='text-lg font-semibold text-foreground'>
            Breakpoint Constants
          </h3>
          <p className='text-sm text-foreground-light'>
            Standard Tailwind-aligned breakpoints
          </p>
        </div>

        <div className='space-y-3'>
          <div className='p-3 bg-neutral-soft rounded border border-neutral-light'>
            <code className='text-xs font-mono text-foreground'>
              BREAKPOINT_MOBILE = "{BREAKPOINT_MOBILE}"
            </code>
          </div>

          <div className='p-3 bg-neutral-soft rounded border border-neutral-light'>
            <code className='text-xs font-mono text-foreground'>
              BREAKPOINT_TABLET = "{BREAKPOINT_TABLET}"
            </code>
          </div>

          <div className='p-3 bg-neutral-soft rounded border border-neutral-light'>
            <code className='text-xs font-mono text-foreground'>
              BREAKPOINT_DESKTOP = "{BREAKPOINT_DESKTOP}"
            </code>
          </div>
        </div>

        <div className='mt-4 p-3 bg-info-soft border border-info-light rounded'>
          <p className='text-xs text-info-bold'>
            💡 Tip: Use these constants with useMatchMedia() for consistent
            breakpoint detection across your app.
          </p>
        </div>
      </div>
    )
  },
}
