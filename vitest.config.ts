import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import svgr from 'vite-plugin-svgr'

const __dirname = dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '@/primitive': resolve(__dirname, 'src/primitive'),
      '@/forms': resolve(__dirname, 'src/forms'),
      '@/overlays': resolve(__dirname, 'src/overlays'),
      '@/navigation': resolve(__dirname, 'src/navigation'),
      '@/feedbacks': resolve(__dirname, 'src/feedbacks'),
      '@/layouts': resolve(__dirname, 'src/layouts'),
      '@/providers': resolve(__dirname, 'src/providers'),
      '@/utils': resolve(__dirname, 'src/utils'),
    },
  },
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./vitest.setup.ts'],
    css: true,
    coverage: {
      reporter: ['text', 'json', 'html'],
      exclude: [
        'node_modules/',
        'src/test/',
        '**/*.d.ts',
        '**/*.config.*',
        'dist/',
        'coverage/',
        '.storybook/',
        'stories/',
      ],
    },
  },
})
