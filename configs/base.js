module.exports = {
  env: {
    browser: true,
    node: true,
    es2020: true,
  },
  parser: '@babel/eslint-parser',
  parserOptions: {
    sourceType: 'module',
    experimentalObjectRestSpread: true,
    ecmaVersion: 6,
    requireConfigFile: false,
  },
  plugins: ['import', 'prettier', 'destructuring', 'simple-import-sort'],
  extends: ['eslint:recommended', 'plugin:destructuring/recommended'],
  rules: {
    'no-console': 'warn',
    'no-unused-vars': ['error', { vars: 'all', args: 'after-used', ignoreRestSiblings: true }],
    'destructuring/in-params': ['error', { 'max-params': 0 }],
    'destructuring/no-rename': 'off',
    'no-debugger': 'warn',
    'no-eval': 'off',
    'no-shadow': 'error',
    'prefer-const': 'error',
    'no-restricted-exports': 'off',
    camelcase: 'error',
    'react/display-name': 'off',
    'arrow-body-style': 'off',
    'import/extensions': 'off',
    'import/no-anonymous-default-export': 'error',
    'import/no-extraneous-dependencies': 'off',
    'import/no-import-module-exports': 'off',
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        trailingComma: 'all',
        printWidth: 120,
        arrowParens: 'always',
      },
    ],
  },
};

// "parser": "@babel/eslint-parser",
// "parserOptions": {
//   "ecmaFeatures": {
//     "experimentalObjectRestSpread": true,
//     "jsx": true
//   },
//   "babelOptions": {
//     "presets": ["@babel/preset-react"],
//     "plugins": [["@babel/plugin-proposal-pipeline-operator", { "proposal": "minimal" }]]
//   },
//   "ecmaVersion": 6,
//   "requireConfigFile": false,
//   "sourceType": "module"
// },
