# PageLoader

A layout component that centers a loading indicator within a flexible container, making it ideal for full-page loading states.

## Features

- **Centered Loading**: Automatically centers the loading indicator in the available space
- **Flexible Layout**: Uses flex-grow to fill the parent container
- **Loading Message**: Optional message display below the indicator
- **Minimal Mode**: Reduced height for inline loading states
- **Full LoadingIndicator Support**: Supports all LoadingIndicator props (type, size, color)
- **Accessibility**: Proper ARIA labels and live regions for screen readers

## Usage

```tsx
import { PageLoader } from '@/layouts/page-loader'

// Basic usage
<PageLoader />

// With custom props
<PageLoader
  type="spinner"
  size="lg"
  color="primary"
  message="Loading your content..."
/>

// Minimal height for inline use
<PageLoader
  minimal
  size="sm"
  message="Loading..."
/>
```

## Props

Extends all `LoadingIndicatorProps` and adds:

- `message?: string` - Optional loading message
- `minimal?: boolean` - Use minimal height for inline loading states

## Design System

The PageLoader follows Versaur's layout patterns and integrates seamlessly with the LoadingIndicator component for consistent loading experiences across your application.
