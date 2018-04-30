const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const { PORT } = require('./CONFIG.js')

module.exports = {
  target: 'web',
  entry: {
    main: path.resolve(__dirname, 'index.js')
  },
  output: {
    path: path.resolve(__dirname,'dist'),
    publicPath: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    host: '127.0.0.1',
    port: PORT,
    open: true,
    overlay: {
      warnings: true,
      errors: true
    },
    historyApiFallback: true
  },
  devtool: 'eval-source-map',
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
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.json/,
        use: 'json-loader'
      }
    ]
  },
  plugins: [
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
    ])
  ]
}
