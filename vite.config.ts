import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve, dirname, join, basename } from 'node:path'
import { fileURLToPath } from 'node:url'
import dts from 'vite-plugin-dts'
import tailwindcss from '@tailwindcss/vite'
import { globSync } from 'node:fs'

const __dirname = dirname(fileURLToPath(import.meta.url))

const components = Object.fromEntries(
  globSync('src/components/*/index.ts', { withFileTypes: true }).map(file => [
    join('components', basename(file.parentPath, '.ts')),
    join(file.parentPath, file.name),
  ])
)

const hooks = Object.fromEntries(
  globSync('src/hooks/*.ts', { withFileTypes: true }).map(file => [
    join('hooks', basename(file.name, '.ts')),
    join(file.parentPath, file.name),
  ])
)
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    dts({
      include: ['src'],
      exclude: ['src/test', 'src/utils', '**/__tests__/**'],
    }),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '@/components': resolve(__dirname, 'src/components'),
      '@/utils': resolve(__dirname, 'src/utils'),
      '@/hooks': resolve(__dirname, 'src/hooks'),
    },
  },
  publicDir: 'assets',
  build: {
    outDir: 'dist',
    lib: {
      entry: {
        index: 'src/index.ts',
        ...components,
        ...hooks,
      },
      formats: ['es'],
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'lucide-react'],
    },
  },
})
