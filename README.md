# Versaur UI Library

A modern React UI library built with TypeScript and Tailwind CSS, featuring tree-shakable
components, comprehensive testing, and Storybook documentation.

## Features

- 🎨 **Tailwind CSS 4** - Modern styling with CSS-in-JS
- 📦 **Tree Shakable** - Subpath exports for optimal bundle size
- 🔧 **TypeScript** - Full type safety and IntelliSense
- 📚 **Storybook** - Interactive component documentation
- 🧪 **Vitest** - Fast unit testing with React Testing Library
- ⚡ **Vite** - Lightning-fast development and build
- 🎯 **Modern React** - Built with React 19 and hooks
- 🎨 **Design Tokens** - Consistent color palette and spacing


## Installation

```bash
yarn install versaur
```

## Usage

### Import all components

```tsx
import { Button, Input, Card } from 'versaur'
```

### Tree-shakable imports

```tsx
// Import only what you need
import { Button } from 'versaur/components'
import Button from 'versaur/components/button'
```

## Testing

The library includes comprehensive testing setup:

- **Vitest** - Fast unit testing
- **React Testing Library** - Component testing utilities
- **jsdom** - DOM environment for testing

```bash
# Run all tests
yarn test

# Run tests with coverage
yarn test:coverage

# Run tests with UI
yarn test:ui
```

## Storybook

Interactive component documentation and testing:

```bash
# Start Storybook development server
yarn storybook

# Build Storybook for production
yarn build-storybook
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

MIT © [Dimas Bagus Prayogo Mukti]
