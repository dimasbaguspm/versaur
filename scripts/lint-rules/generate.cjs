#!/usr/bin/env node

/**
 * Script to auto-generate symbol-to-subpath mapping for Versaur UI library (CommonJS)
 * Scans src/{primitive,feedbacks,forms,navigation,layouts,overlays,providers}
 * index.ts for exported symbols.
 *
 * Outputs a JS file with the symbolToSubpath object for use in lint rules or tooling
 */
const fs = require('fs')
const path = require('path')

const ROOT = path.resolve(__dirname, '../../src')

// Automatically detect groups as first-level directories under src
function getGroups() {
  return fs
    .readdirSync(ROOT, { withFileTypes: true })
    .filter(d => d.isDirectory())
    .map(d => d.name)
}

function getExportedSymbols(indexPath) {
  if (!fs.existsSync(indexPath)) return []
  const content = fs.readFileSync(indexPath, 'utf8')
  // Match: export { Foo, Bar } from './button'; or export { Foo } from './foo';
  const re = /export\s+\{([^}]+)\}\s+from\s+['"][^'"]+['"]/g
  const symbols = []
  let match
  while ((match = re.exec(content))) {
    const names = match[1]
      .split(',')
      .map(s => s.trim())
      .filter(Boolean)
    symbols.push(...names)
  }
  // Also match: export { Foo };
  const re2 = /export\s+\{([^}]+)\}\s*;/g
  while ((match = re2.exec(content))) {
    const names = match[1]
      .split(',')
      .map(s => s.trim())
      .filter(Boolean)
    symbols.push(...names)
  }
  // Also match: export const Foo = ...
  const re3 = /export\s+const\s+([A-Z][A-Za-z0-9_]*)/g
  while ((match = re3.exec(content))) {
    symbols.push(match[1])
  }
  // Also match: export function Foo ...
  const re4 = /export\s+function\s+([A-Z][A-Za-z0-9_]*)/g
  while ((match = re4.exec(content))) {
    symbols.push(match[1])
  }
  // Also match: export class Foo ...
  const re5 = /export\s+class\s+([A-Z][A-Za-z0-9_]*)/g
  while ((match = re5.exec(content))) {
    symbols.push(match[1])
  }
  return Array.from(new Set(symbols))
}

function ensureDirSync(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true })
  }
}

function main() {
  const symbolToSubpath = {}
  const GROUPS = getGroups()
  for (const group of GROUPS) {
    const groupDir = path.join(ROOT, group)
    if (!fs.existsSync(groupDir)) continue

    // 1. Scan group-level index.ts
    const groupIndex = path.join(groupDir, 'index.ts')
    const groupSymbols = getExportedSymbols(groupIndex)

    for (const symbol of groupSymbols) {
      symbolToSubpath[symbol] = group
    }

    // 2. Scan subdirectories as before
    const subdirs = fs
      .readdirSync(groupDir, { withFileTypes: true })
      .filter(d => d.isDirectory())
      .map(d => d.name)

    for (const subdir of subdirs) {
      const indexPath = path.join(groupDir, subdir, 'index.ts')
      const symbols = getExportedSymbols(indexPath)

      for (const symbol of symbols) {
        symbolToSubpath[symbol] = group
      }
    }
  }

  // Ensure dist/utils directory exists
  ensureDirSync(__dirname)
  // Write output file with both symbolToSubpath and the ESLint rule
  const outPath = path.join(__dirname, '../../dist/utils/enforce-subpath-import.js')
  const header =
    '/**\n * Auto-generated symbol-to-subpath mapping and ESLint rule for Versaur\n * Run dist/utils/lint-rules.cjs to update\n */\n'
  // Load the rule template
  const rulePath = path.resolve(__dirname, './base-rule.js')
  let ruleSrc = fs.readFileSync(rulePath, 'utf8')
  // Remove the module.exports line from the rule template
  ruleSrc = ruleSrc.replace(/module\.exports\s*=\s*\{\s*rules\s*}\s*;?/g, '')
  // Compose the output
  const output = `${header}
const symbolToSubpath = ${JSON.stringify(symbolToSubpath, null, 2)};

${ruleSrc}

// Compose the config for ESLint Flat config usage
export const versaurEnforceSubpathImport = [
  {
    plugins: {
      dimasbaguspm: {
        rules: {
          'versaur-enforce-subpath-import': rules,
        },
      },
    },
    rules: {
      'dimasbaguspm/versaur-enforce-subpath-import': 'warn',
    },
  },
]
`
  // Ensure the output file and its parent directories exist
  const outDir = path.dirname(outPath)
  ensureDirSync(outDir)
  if (!fs.existsSync(outPath)) {
    fs.writeFileSync(outPath, '', 'utf8')
  }
  fs.writeFileSync(outPath, output, 'utf8')

  // Format the generated file with Prettier if available
  try {
    require('child_process').execSync(`npx prettier --write "${outPath}"`, { stdio: 'inherit' })
  } catch (e) {
    console.warn('Prettier not found or failed to format. Skipping formatting.')
  }
  console.log('Generated', outPath)
}

if (require.main === module) {
  main()
}
