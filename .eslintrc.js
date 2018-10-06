module.exports = {
  extends: [
    'airbnb',
    'plugin:unicorn/recommended',
    'prettier',
    'prettier/unicorn',
  ],
  plugins: ['unicorn'],
  env: {
    browser: true,
  },
  rules: {
    'react/jsx-filename-extension': 'off',
  },
};
