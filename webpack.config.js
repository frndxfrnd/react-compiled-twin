const path = require('path')

const webpack = require('webpack')

const TerserPlugin = require('terser-webpack-plugin')
const ProgressBarPlugin = require('simple-progress-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin').CleanWebpackPlugin
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = [
  async (_env, argv) => {
    if (argv.mode) {
      process.env.NODE_ENV = argv.mode
    }

    if (argv.hot) {
      process.env.HOT = argv.hot
    }

    const dev = process.env.NODE_ENV === 'development'
    const hot = process.env.HOT !== undefined

    return {
      context: __dirname,
      entry: [
        './src/index'
      ],
      output: {
        filename: '[name].[contenthash].js',
        chunkFilename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
      },
      target: 'web',
      devtool: dev ? 'eval-source-map' : undefined,
      devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        historyApiFallback: {
          index: 'index.html'
        }
      },
      plugins: [
        new CleanWebpackPlugin(),
        new ProgressBarPlugin({
          format: 'minimal'
        }),
        new HtmlWebpackPlugin({
          template: 'src/template.ejs',
          minify: {
            ignoreCustomComments: [
              /^made with ❤️$/
            ]
          }
        }),
        new MiniCssExtractPlugin(),
        dev && hot && new webpack.HotModuleReplacementPlugin(),
        dev && hot && new ReactRefreshWebpackPlugin()
      ].filter(x => x),
      module: {
        rules: [
          {
            test: /\.[jt]sx?$/,
            exclude: /(node_modules)/,
            use: [
              'babel-loader'
            ]
          },
          {
            test: /\.css$/,
            use: [
              MiniCssExtractPlugin.loader,
              'css-loader'
            ]
          }
        ]
      },
      resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
        alias: {
          '@': [
            path.resolve(__dirname, 'src'),
            path.resolve(__dirname, 'src/components')
          ]
        }
      },
      optimization: {
        minimizer: [
          new TerserPlugin()
        ],
        moduleIds: 'deterministic',
        splitChunks: {
          chunks: 'all',
          maxSize: 244000
        }
      }
    }
  }
]
