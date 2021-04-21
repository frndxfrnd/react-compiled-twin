module.exports = {
  parser: 'babel-eslint',
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
