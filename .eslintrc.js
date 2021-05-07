module.exports = {
  parser: '@babel/eslint-parser',
  extends: [
    'standard',
    'standard-jsx',
    'standard-react'
  ],
  rules: {
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off'
  }
}
