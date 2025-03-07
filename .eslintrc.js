module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: [ 'airbnb', 'prettier', 'prettier/react' ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: [ 'react', 'prettier', 'autofix' ],
  rules: {
    'prettier/prettier': [ 'error', { endOfLine: 'auto' } ],
    'react/jsx-filename-extension': [ 'warn', { extensions: [ '.jsx', '.js' ] } ],
    'import/prefer-default-export': 'off',
    'autofix/no-unused-vars': 'error',
    'import/no-unresolved': 'off',
    'no-console': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'jsx-a11y/anchor-has-content': 'off'
  }
};
