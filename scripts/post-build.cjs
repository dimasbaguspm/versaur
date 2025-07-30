#!/usr/bin/env node

// Script to execute lint-rules/generate.cjs with Node.js
const { execSync } = require('child_process')
const path = require('path')
const fs = require('fs')

const scriptPath = path.resolve(__dirname, 'lint-rules/generate.cjs')

try {
  execSync(`node "${scriptPath}"`, { stdio: 'inherit' })
  console.log('Successfully ran lint-rules/generate.cjs')

  // Copy assets/styles.css to dist/assets/styles.css
  const srcCss = path.resolve(__dirname, '../assets/styles.css')
  const destCss = path.resolve(__dirname, '../dist/assets/styles.css')
  // ensure destination directory exists
  fs.mkdirSync(path.dirname(destCss), { recursive: true })
  fs.copyFileSync(srcCss, destCss)
  console.log('Copied assets/styles.css to dist/assets/styles.css')
  
} catch (err) {
  console.error('Failed to run lint-rules/generate.cjs:', err)
  process.exit(1)
}
