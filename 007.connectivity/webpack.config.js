const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

module.export = {
  context: __dirname,
  entry: './src/entry.js',
  output: {
    path: './public',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel',
        query: {
          presets: ['env']
        }
      }
    ]
  },
  plugin: [
    new webpack.optimize.UglifyJsPlugin(),
    new HtmlWebpackPlugin({ template: './src/index.hrml' })
  ]
}