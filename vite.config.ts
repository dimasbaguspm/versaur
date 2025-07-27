import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import dts from 'vite-plugin-dts'
import tailwindcss from '@tailwindcss/vite'
import svgr from 'vite-plugin-svgr'

const __dirname = dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    dts({
      outDir: 'dist/types',
      include: ['src'],
      exclude: [
        'src/test',
        'src/utils',
        '**/__tests__/**',
        'src/**/*.stories.tsx',
        'src/**/helpers.ts',
        'src/**/context.ts',
      ],
    }),
    svgr(),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '@/primitive': resolve(__dirname, 'src/primitive'),
      '@/forms': resolve(__dirname, 'src/forms'),
      '@/overlays': resolve(__dirname, 'src/overlays'),
      '@/navigation': resolve(__dirname, 'src/navigation'),
      '@/feedbacks': resolve(__dirname, 'src/feedbacks'),
      '@/layouts': resolve(__dirname, 'src/layouts'),
      '@/utils': resolve(__dirname, 'src/utils'),
    },
  },
  publicDir: 'assets',
  optimizeDeps: {
    esbuildOptions: { target: 'es2022', treeShaking: true },
  },
  build: {
    outDir: 'dist/js',
    target: 'es2022',
    lib: {
      entry: {
        index: resolve(__dirname, 'src/index.ts'),
        primitive: resolve(__dirname, 'src/primitive/index.ts'),
        forms: resolve(__dirname, 'src/forms/index.ts'),
        overlays: resolve(__dirname, 'src/overlays/index.ts'),
        navigation: resolve(__dirname, 'src/navigation/index.ts'),
        feedbacks: resolve(__dirname, 'src/feedbacks/index.ts'),
        layouts: resolve(__dirname, 'src/layouts/index.ts'),
      },
      formats: ['es'],
      fileName: (_, entryName) => {
        if (entryName === 'index') return `index.js`
        return `${entryName}/index.js`
      },
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'lucide-react'],
    },
  },
})
