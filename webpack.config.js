const path = require('path')

const TerserPlugin = require('terser-webpack-plugin')
const ProgressBarPlugin = require('progress-bar-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin').CleanWebpackPlugin
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = [
  async (env, argv) => {
    const dev = env.development || env.dev

    return {
      context: __dirname,
      entry: [
        './src/index.js'
      ],
      output: {
        filename: '[name].[contenthash].js',
        chunkFilename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
      },
      target: 'web',
      mode: dev ? 'development' : 'production',
      devtool: dev ? 'eval-source-map' : 'source-map',
      devServer: {
        hot: true,
        contentBase: path.resolve(__dirname, 'dist'),
        historyApiFallback: {
          index: 'index.html'
        }
      },
      plugins: [
        new CleanWebpackPlugin(),
        new ProgressBarPlugin(),
        new HtmlWebpackPlugin({
          title: 'iiwii',
          inject: true,
          template: require('html-webpack-template'),
          appMountId: 'root'
        })
      ],
      module: {
        rules: [
          {
            test: /\.jsx?$/,
            exclude: /(node_modules)/,
            loader: 'babel-loader'
          }
        ]
      },
      resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
        alias: {
          '@': [
            path.resolve(__dirname, 'src'),
            path.resolve(__dirname, 'src/components')
          ],
          'react-dom': '@hot-loader/react-dom'
        }
      },
      optimization: {
        minimizer: [
          new TerserPlugin()
        ],
        moduleIds: 'deterministic',
        runtimeChunk: true,
        splitChunks: {
          chunks: 'all'
        }
      }
    }
  }
]
