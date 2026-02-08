# @versaur/icons

Simple SVG icon library for Versaur Design System using Vite and SVGR.

## Installation

```bash
npm install @versaur/icons
```

## Usage

Icons are React components transformed from SVG assets at build time.

```tsx
import { LoaderIcon } from "@versaur/icons";
import { Icon } from "@versaur/core";

<Icon as={LoaderIcon} />;
```

## Icons

- `LoaderIcon` - Spinner icon for loading states
