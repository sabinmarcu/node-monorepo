const a11y = require('eslint-plugin-jsx-a11y/lib/index.js');
const path = require('path');

module.exports = Object.assign({
  parser: 'babel-eslint',
  extends: [
    'airbnb',
    'plugin:flowtype/recommended',
    'plugin:monorepo/recommended',
  ],
  plugins: [
    'flowtype',
    'disable',
    'monorepo',
  ],
  settings: {
    'import/resolver': {
      'node-extended': {
        paths: [
          path.resolve(__dirname),
        ],
        moduleDirectory: [
          'node-modules',
          'packages',
        ],
      },
    },
    'eslint-plugin-disable': {
      paths: {
        'jsx-a11y': ['*'],
      },
    },
  },
  env: {
    browser: true,
    jest: true,
  },
}, {
  rules: Object.assign(
    Object.keys(a11y.configs.recommended.rules).reduce(
      (prev, key) => Object.assign(
        {},
        prev,
        { [key]: 'off' },
      ), {},
    ), {
      // Add more here, if needed
      'indent': ['error', 4],
      'function-paren-newline': ['error', 'consistent'],
      'react/default-props-match-prop-types': [1, { allowRequiredDefaults: true }],
    },
  ),
});
