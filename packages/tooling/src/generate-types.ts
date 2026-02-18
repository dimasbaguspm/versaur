import { readFileSync, writeFileSync } from "node:fs"
import { basename, dirname, join, resolve } from "node:path"

import { glob } from "glob"

import { generateCssDtsFile, generateTypesFile } from "./codegen"
import { parseCssModule } from "./css-parser"

const ROOT = resolve(import.meta.dirname, "../../..")
const COMPONENTS_GLOB = "packages/core/src/components/**/*.module.css"

const isCheck = process.argv.includes("--check")

async function main() {
  const files = await glob(COMPONENTS_GLOB, { absolute: true, cwd: ROOT })

  if (files.length === 0) {
    // eslint-disable-next-line no-console
    console.log("No CSS module files found.")
    return
  }

  let hasChanges = false

  for (const file of files.toSorted()) {
    const css = readFileSync(file, "utf8")
    const dir = dirname(file)
    const fileName = basename(file, ".module.css")
    const componentName = fileName

    const parsed = parseCssModule(css, componentName)

    // Generate .types.generated.ts
    const typesContent = generateTypesFile(parsed)
    const typesPath = join(dir, `${componentName}.types.generated.ts`)

    // Generate .module.css.d.ts
    const dtsContent = generateCssDtsFile(parsed)
    const dtsPath = join(dir, `${componentName}.module.css.d.ts`)

    if (isCheck) {
      const existingTypes = safeRead(typesPath)
      const existingDts = safeRead(dtsPath)

      if (existingTypes !== typesContent) {
        // eslint-disable-next-line no-console
        console.error(`OUT OF DATE: ${relative(typesPath)}`)
        hasChanges = true
      }
      if (existingDts !== dtsContent) {
        // eslint-disable-next-line no-console
        console.error(`OUT OF DATE: ${relative(dtsPath)}`)
        hasChanges = true
      }
    } else {
      writeFileSync(typesPath, typesContent)
      // eslint-disable-next-line no-console
      console.log(`Generated: ${relative(typesPath)}`)

      writeFileSync(dtsPath, dtsContent)
      // eslint-disable-next-line no-console
      console.log(`Generated: ${relative(dtsPath)}`)
    }
  }

  if (isCheck && hasChanges) {
    // eslint-disable-next-line no-console
    console.error("\nGenerated type files are out of date. Run `pnpm generate:types` to update.")
    process.exit(1)
  }

  if (isCheck) {
    // eslint-disable-next-line no-console
    console.log("All generated type files are up to date.")
  }
}

function safeRead(path: string): string {
  try {
    return readFileSync(path, "utf8")
  } catch {
    return ""
  }
}

function relative(path: string): string {
  return path.replace(ROOT + "/", "")
}

main().catch((error) => {
  // eslint-disable-next-line no-console
  console.error(error)
  process.exit(1)
})
