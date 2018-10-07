module.exports = {
  extends: [
    'airbnb',
    'plugin:unicorn/recommended',
    'prettier',
    'prettier/react',
    'prettier/unicorn',
  ],
  plugins: ['unicorn'],
  env: {
    browser: true,
  },
  rules: {
    'react/jsx-filename-extension': 'off',
    'unicorn/filename-case': 'off',
    'no-unused-expressions': ['error', { allowTaggedTemplates: true }],
  },
};
