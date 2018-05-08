const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const config = {
  target: 'node',
  mode: 'production',
  entry: path.resolve(__dirname, '../src/App.js'),
  output: {
    path: path.resolve(__dirname,'../dist/SSR'),
    filename: 'index_bundle.js',
    library: 'App',
    libraryTarget: 'commonjs2'
  },
  module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['es2015', 'stage-2', 'react']
              }
            },
          },
          {
            test: /\.(css|scss)/,
            use: ExtractTextPlugin.extract({
              use: [
                {
                  loader: 'css-loader',
                  options: {
                    minimize: true
                  }
                }
              ]
            })
          }
        ]
      },
      plugins: [
        new ExtractTextPlugin('main.css'),
        new CopyWebpackPlugin([
          {
            from: 'public/images/*'
          },
          {
            from: 'public/index.html'
          },
          {
            from: 'public/bootstrap.min.css'
          },
          {
            from: 'public/bootstrap-theme.min.css'
          }
        ]),
        new CleanWebpackPlugin(['dist/SSR'])
      ]
}

module.exports = config
