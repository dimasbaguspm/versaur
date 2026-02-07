export interface ButtonExample {
  code: string;
  language: "tsx" | "vue" | "angular" | "bash";
}

export const buttonExamples = {
  variants: {
    code: `<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="danger">Danger</Button>`,
    language: "tsx" as const,
  },
  sizes: {
    code: `<Button size="small">Small</Button>
<Button size="medium">Medium</Button>
<Button size="large">Large</Button>`,
    language: "tsx" as const,
  },
  states: {
    code: `<Button loading>Loading</Button>
<Button disabled>Disabled</Button>
<Button pressed>Pressed</Button>`,
    language: "tsx" as const,
  },
  combined: {
    code: `<Button variant="primary" size="large">Large Primary</Button>
<Button variant="danger" size="small">Small Danger</Button>
<Button variant="secondary" loading>Loading Secondary</Button>`,
    language: "tsx" as const,
  },
  installation: {
    code: `# Using npm
npm install @versaur/react @versaur/core

# Using pnpm
pnpm add @versaur/react @versaur/core

# Using yarn
yarn add @versaur/react @versaur/core`,
    language: "bash" as const,
  },
};
