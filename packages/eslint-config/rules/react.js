module.exports = {
  env: {
    browser: true
  },
  extends: ['plugin:react/recommended', 'prettier/react'],
  plugins: ['react', 'react-hooks'],
  rules: {
    'react/no-deprecated': 0,
    'react/jsx-uses-vars': 2,
    'react-hooks/rules-of-hooks': 2,
  },
  settings: {
    react: {
      version: '>= 15'
    }
  }
};
