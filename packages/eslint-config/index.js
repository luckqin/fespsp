module.exports = {
  extends: [require.resolve('./rules/base')],
  overrides: [
    {
      files: ['*.ts'],
      extends: [require.resolve('./rules/typescript')]
    },
    {
      files: ['*.tsx'],
      extends: [require.resolve('./rules/react'), require.resolve('./rules/typescript')]
    },
    {
      files: ['*.vue'],
      extends: [require.resolve('./rules/vue')]
    },
  ],
};
