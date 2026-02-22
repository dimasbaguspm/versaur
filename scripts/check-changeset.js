#!/usr/bin/env node

/**
 * Pre-commit hook to enforce changesets for public packages
 *
 * Public packages that require changesets on modification:
 * - @versaur/react
 * - @versaur/icons
 *
 * Internal packages that don't require changesets:
 * - @versaur/core (internal, used as peer dependency)
 * - @versaur/tooling (internal, development only)
 * - @versaur/icons (when only docs change)
 */

import { execSync } from "child_process"
import { readdirSync } from "fs"

const PUBLIC_PACKAGES = ["@versaur/react", "@versaur/icons"]

// Get all staged files
let stagedFiles
try {
  stagedFiles = execSync("git diff --cached --name-only", {
    encoding: "utf-8",
  })
    .trim()
    .split("\n")
    .filter(Boolean)
} catch (error) {
  // eslint-disable-next-line no-console
  console.error("Error getting staged files:", error.message)
  process.exit(1)
}

if (stagedFiles.length === 0) {
  process.exit(0)
}

// Check which packages have changes
const changedPackages = new Set()

for (const file of stagedFiles) {
  // Skip changelog and version files
  if (
    file.includes("CHANGELOG.md") ||
    file.includes(".changeset") ||
    file === "package.json" ||
    file.match(/^packages\/[^/]+\/package.json$/)
  ) {
    continue
  }

  // Determine which package the file belongs to
  if (file.startsWith("packages/")) {
    const packageName = file.split("/")[1]
    const packagePath = `packages/${packageName}`

    // Only track public packages
    const packageJson = `${packagePath}/package.json`
    try {
      const pkg = JSON.parse(execSync(`cat ${packageJson}`, { encoding: "utf-8" }))
      if (PUBLIC_PACKAGES.includes(pkg.name)) {
        changedPackages.add(pkg.name)
      }
    } catch {}
  } else if (file.startsWith("apps/")) {
    // Apps don't require changesets
    continue
  }
}

if (changedPackages.size === 0) {
  process.exit(0)
}

// Check if changesets exist
const changesetDir = ".changeset"
let changesetFiles
try {
  changesetFiles = readdirSync(changesetDir)
    .filter((f) => f.endsWith(".md") && f !== "README.md")
    .sort()
} catch {
  changesetFiles = []
}

if (changesetFiles.length === 0) {
  // eslint-disable-next-line no-console
  console.error("")
  // eslint-disable-next-line no-console
  console.error("❌ Changesets required for public packages")
  // eslint-disable-next-line no-console
  console.error("")
  // eslint-disable-next-line no-console
  console.error(`You modified: ${Array.from(changedPackages).join(", ")}`)
  // eslint-disable-next-line no-console
  console.error("")
  // eslint-disable-next-line no-console
  console.error("Please add a changeset before committing:")
  // eslint-disable-next-line no-console
  console.error("")
  // eslint-disable-next-line no-console
  console.error("  pnpm changeset:add")
  // eslint-disable-next-line no-console
  console.error("")
  // eslint-disable-next-line no-console
  console.error("or from a specific package:")
  // eslint-disable-next-line no-console
  console.error("")
  Array.from(changedPackages).forEach((pkg) => {
    // eslint-disable-next-line no-console
    console.error(`  pnpm --filter ${pkg} changeset:add`)
  })
  // eslint-disable-next-line no-console
  console.error("")
  process.exit(1)
}

// eslint-disable-next-line no-console
console.log(`✅ Changesets found: ${changesetFiles.join(", ")}`)
process.exit(0)
