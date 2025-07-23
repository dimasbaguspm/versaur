/**
 * ESLint rule for Versaur: enforce sub-path imports for optimal tree-shaking (Flat config compatible)
 */

const symbolToSubpath = {
  // primitive
  Button: 'primitive',
  ButtonFloat: 'primitive',
  ButtonIcon: 'primitive',
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
  ChipInput: 'forms',
  DateSinglePickerInput: 'forms',
  RadioInput: 'forms',
  SegmentMultipleInput: 'forms',
  SegmentSingleInput: 'forms',
  SelectInput: 'forms',
  SwitchInput: 'forms',
  TextInput: 'forms',
  TextareaInput: 'forms',
  TimePickerInput: 'forms',
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
          const importSpecifiers = node.specifiers
            .filter(s => s.type === 'ImportSpecifier')
            .map(s => s.imported.name)
          const known = importSpecifiers.find(name => symbolToSubpath[name])
          const subpath = known ? symbolToSubpath[known] : null
          let message =
            'Use sub-path import for better tree-shaking (e.g., @dimasbaguspm/versaur/primitive)'
          if (subpath) {
            message = `Import { ${known} } from '@dimasbaguspm/versaur/${subpath}' instead.`
          }
          context.report({
            node,
            message,
            suggest: subpath
              ? [
                  {
                    desc: `Change to import { ${known} } from '@dimasbaguspm/versaur/${subpath}'`,
                    fix(fixer) {
                      return fixer.replaceText(
                        node.source,
                        `'@dimasbaguspm/versaur/${subpath}'`
                      )
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
