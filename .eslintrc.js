module.exports = {
  extends: [
    'airbnb',
    'plugin:unicorn/recommended',
    'plugin:jest/recommended',
    'prettier',
    'prettier/react',
    'prettier/unicorn',
  ],
  plugins: ['unicorn', 'jest'],
  env: {
    browser: true,
    'jest/globals': true,
  },
  rules: {
    'react/jsx-filename-extension': 'off',
    'unicorn/filename-case': 'off',
    'no-unused-expressions': ['error', { allowTaggedTemplates: true }],
  },
};
