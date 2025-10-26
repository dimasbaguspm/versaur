import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import {
  BREAKPOINT_DESKTOP,
  BREAKPOINT_MOBILE,
  BREAKPOINT_TABLET,
  BREAKPOINT_MOBILE_AND_TABLET,
  BREAKPOINT_TABLET_AND_DESKTOP,
  BREAKPOINT_MOBILE_PORTRAIT,
  BREAKPOINT_MOBILE_LANDSCAPE,
  BREAKPOINT_TABLET_PORTRAIT,
  BREAKPOINT_TABLET_LANDSCAPE,
  DesktopBreakpoint,
  MatchMedia,
  MobileBreakpoint,
  TabletBreakpoint,
  MobileAndTabletBreakpoint,
  TabletAndDesktopBreakpoint,
  MobilePortraitBreakpoint,
  MobileLandscapeBreakpoint,
  TabletPortraitBreakpoint,
  TabletLandscapeBreakpoint,
  useDesktopBreakpoint,
  useMatchMedia,
  useMobileBreakpoint,
  useTabletBreakpoint,
  useMobileAndTabletBreakpoint,
  useTabletAndDesktopBreakpoint,
  useMobilePortraitBreakpoint,
  useMobileLandscapeBreakpoint,
  useTabletPortraitBreakpoint,
  useTabletLandscapeBreakpoint,
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
 * Demonstrates standard breakpoint detection hooks.
 * Resize your browser window to see the hooks respond to viewport changes.
 */
const StandardHooksDemo = () => {
  const isMobile = useMobileBreakpoint()
  const isTablet = useTabletBreakpoint()
  const isDesktop = useDesktopBreakpoint()

  return (
    <div className='space-y-4 p-6 rounded-lg border border-neutral'>
      <div className='space-y-2'>
        <h3 className='text-lg font-semibold text-foreground'>
          Standard Breakpoints
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

export const StandardHooks: Story = {
  render: () => <StandardHooksDemo />,
}

/**
 * Demonstrates combined breakpoint hooks that match multiple device categories.
 */
const CombinedHooksDemo = () => {
  const isMobileAndTablet = useMobileAndTabletBreakpoint()
  const isTabletAndDesktop = useTabletAndDesktopBreakpoint()

  return (
    <div className='space-y-4 p-6 rounded-lg border border-neutral'>
      <div className='space-y-2'>
        <h3 className='text-lg font-semibold text-foreground'>
          Combined Breakpoints
        </h3>
        <p className='text-sm text-foreground-light'>
          Useful for grouping device categories
        </p>
      </div>

      <div className='space-y-2'>
        <div className='flex items-center gap-2'>
          <div
            className={`w-3 h-3 rounded-full ${isMobileAndTablet ? 'bg-success' : 'bg-neutral'}`}
          />
          <span className='text-sm text-foreground'>
            Mobile & Tablet (0-1023px):{' '}
            {isMobileAndTablet ? '✓ Active' : '✗ Inactive'}
          </span>
        </div>

        <div className='flex items-center gap-2'>
          <div
            className={`w-3 h-3 rounded-full ${isTabletAndDesktop ? 'bg-success' : 'bg-neutral'}`}
          />
          <span className='text-sm text-foreground'>
            Tablet & Desktop (768px+):{' '}
            {isTabletAndDesktop ? '✓ Active' : '✗ Inactive'}
          </span>
        </div>
      </div>

      <div className='mt-4 p-3 bg-info-soft border border-info-light rounded'>
        <p className='text-xs text-info-bold'>
          💡 Use combined breakpoints to simplify touch vs. mouse interfaces or
          small vs. large screen layouts
        </p>
      </div>
    </div>
  )
}

export const CombinedHooks: Story = {
  render: () => <CombinedHooksDemo />,
}

/**
 * Demonstrates orientation-specific breakpoint hooks.
 * Rotate your device or resize to see orientation changes.
 */
const OrientationHooksDemo = () => {
  const isMobilePortrait = useMobilePortraitBreakpoint()
  const isMobileLandscape = useMobileLandscapeBreakpoint()
  const isTabletPortrait = useTabletPortraitBreakpoint()
  const isTabletLandscape = useTabletLandscapeBreakpoint()

  return (
    <div className='space-y-4 p-6 rounded-lg border border-neutral'>
      <div className='space-y-2'>
        <h3 className='text-lg font-semibold text-foreground'>
          Orientation-Specific Breakpoints
        </h3>
        <p className='text-sm text-foreground-light'>
          Rotate your device or resize to see changes
        </p>
      </div>

      <div className='space-y-3'>
        <div>
          <p className='text-xs font-semibold text-foreground mb-2'>Mobile:</p>
          <div className='space-y-2 ml-3'>
            <div className='flex items-center gap-2'>
              <div
                className={`w-3 h-3 rounded-full ${isMobilePortrait ? 'bg-success' : 'bg-neutral'}`}
              />
              <span className='text-sm text-foreground'>
                Portrait: {isMobilePortrait ? '✓ Active' : '✗ Inactive'}
              </span>
            </div>
            <div className='flex items-center gap-2'>
              <div
                className={`w-3 h-3 rounded-full ${isMobileLandscape ? 'bg-success' : 'bg-neutral'}`}
              />
              <span className='text-sm text-foreground'>
                Landscape: {isMobileLandscape ? '✓ Active' : '✗ Inactive'}
              </span>
            </div>
          </div>
        </div>

        <div>
          <p className='text-xs font-semibold text-foreground mb-2'>Tablet:</p>
          <div className='space-y-2 ml-3'>
            <div className='flex items-center gap-2'>
              <div
                className={`w-3 h-3 rounded-full ${isTabletPortrait ? 'bg-success' : 'bg-neutral'}`}
              />
              <span className='text-sm text-foreground'>
                Portrait: {isTabletPortrait ? '✓ Active' : '✗ Inactive'}
              </span>
            </div>
            <div className='flex items-center gap-2'>
              <div
                className={`w-3 h-3 rounded-full ${isTabletLandscape ? 'bg-success' : 'bg-neutral'}`}
              />
              <span className='text-sm text-foreground'>
                Landscape: {isTabletLandscape ? '✓ Active' : '✗ Inactive'}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className='mt-4 p-3 bg-info-soft border border-info-light rounded'>
        <p className='text-xs text-info-bold'>
          💡 Perfect for optimizing layouts based on device orientation
        </p>
      </div>
    </div>
  )
}

export const OrientationHooks: Story = {
  render: () => <OrientationHooksDemo />,
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
 * Demonstrates the standard declarative breakpoint components.
 * These components conditionally render their children based on viewport size.
 */
export const StandardBreakpointComponents: Story = {
  render: () => {
    return (
      <div className='space-y-4 p-6 rounded-lg border border-neutral'>
        <div className='space-y-2'>
          <h3 className='text-lg font-semibold text-foreground'>
            Standard Breakpoint Components
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
 * Demonstrates combined breakpoint components for grouping device categories.
 */
export const CombinedBreakpointComponents: Story = {
  render: () => {
    return (
      <div className='space-y-4 p-6 rounded-lg border border-neutral'>
        <div className='space-y-2'>
          <h3 className='text-lg font-semibold text-foreground'>
            Combined Breakpoint Components
          </h3>
          <p className='text-sm text-foreground-light'>
            Useful for touch vs. desktop interfaces
          </p>
        </div>

        <div className='space-y-3'>
          <MobileAndTabletBreakpoint>
            <div className='p-4 bg-warning-soft border border-warning rounded-lg'>
              <p className='text-sm font-medium text-warning-bold'>
                📱 Mobile & Tablet (0-1023px)
              </p>
              <p className='text-xs text-warning mt-1'>
                Touch-optimized interface for smaller devices
              </p>
            </div>
          </MobileAndTabletBreakpoint>

          <TabletAndDesktopBreakpoint>
            <div className='p-4 bg-info-soft border border-info rounded-lg'>
              <p className='text-sm font-medium text-info-bold'>
                💻 Tablet & Desktop (768px+)
              </p>
              <p className='text-xs text-info mt-1'>
                Expanded UI for larger screens
              </p>
            </div>
          </TabletAndDesktopBreakpoint>
        </div>
      </div>
    )
  },
}

/**
 * Demonstrates orientation-specific breakpoint components.
 */
export const OrientationBreakpointComponents: Story = {
  render: () => {
    return (
      <div className='space-y-4 p-6 rounded-lg border border-neutral'>
        <div className='space-y-2'>
          <h3 className='text-lg font-semibold text-foreground'>
            Orientation-Specific Components
          </h3>
          <p className='text-sm text-foreground-light'>
            Rotate device or resize to see changes
          </p>
        </div>

        <div className='space-y-3'>
          <MobilePortraitBreakpoint>
            <div className='p-4 bg-primary-soft border border-primary rounded-lg'>
              <p className='text-sm font-medium text-primary-bold'>
                📱 Mobile Portrait
              </p>
              <p className='text-xs text-primary mt-1'>
                Optimized for vertical mobile screens
              </p>
            </div>
          </MobilePortraitBreakpoint>

          <MobileLandscapeBreakpoint>
            <div className='p-4 bg-secondary-soft border border-secondary rounded-lg'>
              <p className='text-sm font-medium text-secondary-bold'>
                📱 Mobile Landscape
              </p>
              <p className='text-xs text-secondary mt-1'>
                Optimized for horizontal mobile screens
              </p>
            </div>
          </MobileLandscapeBreakpoint>

          <TabletPortraitBreakpoint>
            <div className='p-4 bg-tertiary-soft border border-tertiary rounded-lg'>
              <p className='text-sm font-medium text-tertiary-bold'>
                📱 Tablet Portrait
              </p>
              <p className='text-xs text-tertiary mt-1'>
                Optimized for vertical tablet screens
              </p>
            </div>
          </TabletPortraitBreakpoint>

          <TabletLandscapeBreakpoint>
            <div className='p-4 bg-success-soft border border-success rounded-lg'>
              <p className='text-sm font-medium text-success-bold'>
                📱 Tablet Landscape
              </p>
              <p className='text-xs text-success mt-1'>
                Optimized for horizontal tablet screens
              </p>
            </div>
          </TabletLandscapeBreakpoint>
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
 * Demonstrates all available breakpoint constants that can be used with the base hook.
 */
export const BreakpointConstants: Story = {
  render: () => {
    return (
      <div className='space-y-4 p-6 rounded-lg border border-neutral'>
        <div className='space-y-2'>
          <h3 className='text-lg font-semibold text-foreground'>
            All Breakpoint Constants
          </h3>
          <p className='text-sm text-foreground-light'>
            Complete set of available breakpoints
          </p>
        </div>

        <div className='space-y-4'>
          <div>
            <p className='text-xs font-semibold text-foreground mb-2'>
              Standard Breakpoints:
            </p>
            <div className='space-y-2'>
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
          </div>

          <div>
            <p className='text-xs font-semibold text-foreground mb-2'>
              Combined Breakpoints:
            </p>
            <div className='space-y-2'>
              <div className='p-3 bg-neutral-soft rounded border border-neutral-light'>
                <code className='text-xs font-mono text-foreground break-all'>
                  {`BREAKPOINT_MOBILE_AND_TABLET = "${BREAKPOINT_MOBILE_AND_TABLET}"`}
                </code>
              </div>

              <div className='p-3 bg-neutral-soft rounded border border-neutral-light'>
                <code className='text-xs font-mono text-foreground break-all'>
                  {`BREAKPOINT_TABLET_AND_DESKTOP = "${BREAKPOINT_TABLET_AND_DESKTOP}"`}
                </code>
              </div>
            </div>
          </div>

          <div>
            <p className='text-xs font-semibold text-foreground mb-2'>
              Orientation-Specific Breakpoints:
            </p>
            <div className='space-y-2'>
              <div className='p-3 bg-neutral-soft rounded border border-neutral-light'>
                <code className='text-xs font-mono text-foreground break-all'>
                  {`BREAKPOINT_MOBILE_PORTRAIT = "${BREAKPOINT_MOBILE_PORTRAIT}"`}
                </code>
              </div>

              <div className='p-3 bg-neutral-soft rounded border border-neutral-light'>
                <code className='text-xs font-mono text-foreground break-all'>
                  {`BREAKPOINT_MOBILE_LANDSCAPE = "${BREAKPOINT_MOBILE_LANDSCAPE}"`}
                </code>
              </div>

              <div className='p-3 bg-neutral-soft rounded border border-neutral-light'>
                <code className='text-xs font-mono text-foreground break-all'>
                  {`BREAKPOINT_TABLET_PORTRAIT = "${BREAKPOINT_TABLET_PORTRAIT}"`}
                </code>
              </div>

              <div className='p-3 bg-neutral-soft rounded border border-neutral-light'>
                <code className='text-xs font-mono text-foreground break-all'>
                  {`BREAKPOINT_TABLET_LANDSCAPE = "${BREAKPOINT_TABLET_LANDSCAPE}"`}
                </code>
              </div>
            </div>
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
