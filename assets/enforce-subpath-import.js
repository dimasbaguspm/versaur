/**
 * ESLint rule for Versaur: enforce sub-path imports for optimal tree-shaking (Flat config compatible)
 */

const symbolToSubpath = {
  // primitive
  Button: 'primitive',
  ButtonFloat: 'primitive',
  ButtonIcon: 'primitive',
  Anchor: 'primitive',
  Avatar: 'primitive',
  Badge: 'primitive',
  Brand: 'primitive',
  Calculator: 'primitive',
  Calendar: 'primitive',
  Icon: 'primitive',
  Snackbar: 'primitive',
  Table: 'primitive',
  Text: 'primitive',
  Tile: 'primitive',
  Alert: 'primitive',
  // overlays
  Drawer: 'overlays',
  Modal: 'overlays',
  Menu: 'overlays',
  BottomSheet: 'overlays',
  // navigation
  Tabs: 'navigation',
  Breadcrumbs: 'navigation',
  // layouts
  AppBar: 'layouts',
  BottomBar: 'layouts',
  FormLayout: 'layouts',
  PageLayout: 'layouts',
  TopBar: 'layouts',
  // feedbacks
  LoadingIndicator: 'feedbacks',
  ProgressIndicator: 'feedbacks',
  Skeleton: 'feedbacks',
  // forms
  CalculatorInput: 'forms',
  CheckboxInput: 'forms',
  ChipSingleInput: 'forms',
  ChipMultipleInput: 'forms',
  RadioInput: 'forms',
  SegmentMultipleInput: 'forms',
  SegmentSingleInput: 'forms',
  SelectInput: 'forms',
  SwitchInput: 'forms',
  TextInput: 'forms',
  TextareaInput: 'forms',
  TimePickerInput: 'forms',
  PriceInput: 'forms',
}

const rules = {
  meta: {
    id: 'versaur-enforce-subpath-import',
    name: 'versaur-enforce-subpath-import',
    type: 'suggestion',
    docs: {
      description: 'Prefer sub-path imports for @dimasbaguspm/versaur',
    },
    fixable: 'code',
    hasSuggestions: true,
  },
  create(context) {
    return {
      ImportDeclaration(node) {
        if (node.source.value === '@dimasbaguspm/versaur') {
          const importSpecifiers = node.specifiers.filter(
            s => s.type === 'ImportSpecifier'
          )
          // Group symbols by subpath
          const subpathGroups = {}
          importSpecifiers.forEach(s => {
            const name = s.imported.name
            const subpath = symbolToSubpath[name]
            if (subpath) {
              if (!subpathGroups[subpath]) subpathGroups[subpath] = []
              subpathGroups[subpath].push(name)
            }
          })
          // If no known symbol, fallback to generic message
          const allKnown = Object.keys(subpathGroups).length > 0
          let message =
            'Use sub-path import for better tree-shaking (e.g., @dimasbaguspm/versaur/primitive)'
          if (allKnown) {
            message =
              'Split imports by sub-path for optimal tree-shaking (e.g., import {A} from .../primitive, {B} from .../overlays)'
          }
          context.report({
            node,
            message,
            suggest: allKnown
              ? [
                  {
                    desc: 'Split imports by sub-path for all symbols',
                    fix(fixer) {
                      // Build new import statements
                      const newImports = Object.entries(subpathGroups)
                        .map(
                          ([subpath, names]) =>
                            `import { ${names.join(', ')} } from '@dimasbaguspm/versaur/${subpath}';`
                        )
                        .join('\n')
                      return fixer.replaceText(node, newImports)
                    },
                  },
                ]
              : [],
          })
        }
      },
    }
  },
}

// export array of config objects for flexible flat config usage
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
