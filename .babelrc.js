const dev = process.env.NODE_ENV === 'development'
const hot = process.env.HOT !== undefined

module.exports = {
  presets: [
    '@babel/env',
    ['@babel/react', {
      runtime: 'automatic',
      importSource: '@emotion/react'
    }]
  ],
  plugins: [
    '@emotion',
    'xwind/babel',
    dev && hot && 'react-refresh/babel'
  ].filter(x => x)
}
