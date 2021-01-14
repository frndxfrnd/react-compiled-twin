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
    'xwind/babel'
  ]
}
