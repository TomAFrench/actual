module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'prettier'],
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true,
    node: true
  },
  rules: {
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    'no-loop-func': 'off',
    'no-restricted-globals': 'off',

    // Consider re-enabling these rules.
    '@typescript-eslint/no-empty-function': 'off',
    'no-case-declarations': 'off',
    'no-prototype-builtins': 'off',
    'no-constant-condition': 'off',
    'no-empty': 'off',
    'no-import-assign': 'off',
    'no-async-promise-executor': 'off',
    'no-useless-catch': 'off'
  }
};