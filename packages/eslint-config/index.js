module.exports = {
  extends: [require.resolve('./rules/base')],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      extends: [require.resolve('./rules/typescript')]
    },
    {
      files: ['*.js', '*.tsx'],
      extends: [require.resolve('./rules/react')]
    },
    {
      files: ['*.vue'],
      extends: [require.resolve('./rules/vue')]
    },
  ],
};
