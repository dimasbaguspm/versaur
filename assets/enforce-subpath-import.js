/**
 * ESLint plugin for Versaur: prefer sub-path imports for optimal tree-shaking
 */

module.exports = {
  rules: {
    'versaur-enforce-subpath-import': {
      meta: {
        type: 'suggestion',
        docs: {
          description: 'Prefer sub-path imports for @dimasbaguspm/versaur',
        },
        fixable: 'code',
      },
      create(context) {
        return {
          ImportDeclaration(node) {
            if (node.source.value === '@dimasbaguspm/versaur') {
              const importSpecifiers = node.specifiers
                .filter(s => s.type === 'ImportSpecifier')
                .map(s => s.imported.name)

              // Map symbol to sub-path
              // Clean, maintainable mapping from symbol to sub-path
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

              // Find first known symbol
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
    },
  },
}
