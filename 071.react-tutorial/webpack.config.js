var debug = process.env.NODE_ENV !== 'production'
var webpack = require('webpack')
var path = require('path')

module.exports = {
  context: path.join(__dirname, 'src'),
  entry: './js/client.js',
  module: {},
  output: {
    path: __dirname + '/src/',
    filename: 'client.min.js'
  }
}