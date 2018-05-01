const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  target: 'web',
  entry: {
    main: path.resolve(__dirname, 'index.js')
  },
  output: {
    path: path.resolve(__dirname,'dist'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015', 'stage-2', 'react']
          }
        }
      },
      {
        test: /\.(css|scss)$/,
        use: ExtractTextPlugin.extract({
          use: [
            {
              loader: 'css-loader',
              options: {
                minimize: true,
                importLoaders: 1
              }
            },
            {
              loader: 'sass-loader'
            }
          ]
        })
      },
      {
        test: /\.json$/,
        use: 'json-loader'
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('css/[name].css'),
    new CopyWebpackPlugin([
      {
        from: 'public/images/*'
      },
      {
        from: 'public/index.html'
      },
      {
        from: 'public/*.css'
      }
    ]),
    new CleanWebpackPlugin(['dist'], {root: __dirname})
  ]
}
