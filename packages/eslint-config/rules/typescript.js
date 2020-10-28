module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint'
  ],
  plugins: ['@typescript-eslint'],
  rules: {
    camelcase: 0,
    'no-unused-vars': 0,
    'no-dupe-class-members': 0,
    '@typescript-eslint/camelcase': 0,
    '@typescript-eslint/ban-ts-ignore': 0,
    '@typescript-eslint/prefer-for-of': 0,
    '@typescript-eslint/member-ordering': 0,
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/no-empty-interface': 0,
    '@typescript-eslint/no-inferrable-types': 0,
    '@typescript-eslint/no-parameter-properties': 0,
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/explicit-module-boundary-types': 0,
    '@typescript-eslint/explicit-member-accessibility': [0, { accessibility: 'explicit' }],
    '@typescript-eslint/unified-signatures': 2,
    '@typescript-eslint/prefer-function-type': 2,
    '@typescript-eslint/no-use-before-define': [2, 'nofunc'],
    '@typescript-eslint/array-type': [2, { default: 'array-simple' }],
    '@typescript-eslint/no-unused-vars': [2, { varsIgnorePattern: '^_', argsIgnorePattern: '^_' }],
  }
}
