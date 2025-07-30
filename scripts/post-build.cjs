#!/usr/bin/env node

// Script to execute lint-rules/generate.cjs with Node.js
const { execSync } = require('child_process')
const path = require('path')

const scriptPath = path.resolve(__dirname, 'lint-rules/generate.cjs')

try {
  execSync(`node "${scriptPath}"`, { stdio: 'inherit' })
  console.log('Successfully ran lint-rules/generate.cjs')
} catch (err) {
  console.error('Failed to run lint-rules/generate.cjs:', err)
  process.exit(1)
}
