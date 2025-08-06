
# Versaur UI

<p align="left">
  <a href="https://www.npmjs.com/package/@dimasbaguspm/versaur" target="_blank" rel="noopener noreferrer">
    <img src="https://img.shields.io/npm/v/%40dimasbaguspm%2Fversaur?style=flat-square&color=%23e07a5f" alt="NPM Version" />
  </a>
  <a href="https://www.npmjs.com/package/@dimasbaguspm/versaur" target="_blank" rel="noopener noreferrer">
    <img src="https://img.shields.io/npm/dy/%40dimasbaguspm%2Fversaur?style=flat-square&color=%2381b29a" alt="NPM Downloads" />
  </a>
  <a href="https://www.npmjs.com/package/@dimasbaguspm/versaur" target="_blank" rel="noopener noreferrer">
    <img src="https://img.shields.io/npm/last-update/%40dimasbaguspm%2Fversaur?style=flat-square&color=%2384a5c0" alt="NPM Last Update" />
  </a>
</p>

A modern React UI library built with TypeScript and Tailwind CSS, featuring tree-shakable components

Website: [versaur.dimasbaguspm.com](https://versaur.dimasbaguspm.com)


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
npm install @dimasbaguspm/versaur
yarn add @dimasbaguspm/versaur
bun add @dimasbaguspm/versaur
```

## Usage

### Import all components

```tsx
import { Button, Input, Drawer } from '@dimasbaguspm/versaur'
```

### Tree-shakable imports

```tsx
// import only what you need
import { Button } from '@dimasbaguspm/versaur/primitive'
```


## ESLint: Enforce Sub-path Imports (FlatConfig)

Versaur provides an ESLint rule to enforce sub-path imports for optimal tree-shaking

**Setup:**

1. In your FlatConfig file (e.g., `eslint.config.js`), import and spread the rule:

```js
// eslint.config.{js|ts}
import { versaurEnforceSubpathImport } from '@dimasbaguspm/versaur/enforce-subpath-import'

export default [
  ...versaurEnforceSubpathImport,
  // ...other config
]
```

**What it does:**

Warns when importing from `@dimasbaguspm/versaur` directly, and suggests using sub-path imports (e.g., `@dimasbaguspm/versaur/primitive`) for better tree-shaking

## License

MIT © [Dimas Bagus Prayogo Mukti]
