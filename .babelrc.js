const dev = process.env.NODE_ENV === 'development'
const hot = process.env.HOT !== undefined

module.exports = {
  presets: [
    ['@babel/env', {
      targets: '> 0.25%, not dead',
      bugfixes: true,
      useBuiltIns: 'usage',
      corejs: 3,
      debug: !hot
    }],
    ['@babel/react', {
      runtime: 'automatic'
    }],
    '@babel/typescript'
  ],
  plugins: [
    'macros',
    '@compiled',
    hot && 'react-refresh/babel'
  ].filter(x => x)
}
