import { cva } from 'class-variance-authority'

/**
 * PageContent root styles
 * Provides consistent horizontal spacing matching page-header
 * with additional vertical padding for content separation
 */
export const pageContentVariants = cva('w-full px-4 sm:px-6 py-6 sm:py-8')
