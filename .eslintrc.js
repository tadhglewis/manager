const path = require('path');

module.exports = {
  root: true,
  parser: 'babel-eslint',
  plugins: ['@typescript-eslint/eslint-plugin', 'angular', 'prettier'],
  extends: ['airbnb-base', 'prettier'],
  env: {
    browser: true,
    jquery: true,
  },
  rules: {
    'no-bitwise': ['error', { allow: ['~'] }],
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'import/no-unresolved': 0,
    'prettier/prettier': 'error',
  },
  settings: {
    'import/resolver': {
      'eslint-import-resolver-lerna': {
        packages: [
          path.resolve(__dirname, 'packages/manager/apps'),
          path.resolve(__dirname, 'packages/manager/modules'),
          path.resolve(__dirname, 'packages/manager/tools'),
        ],
      },
    },
  },
};
