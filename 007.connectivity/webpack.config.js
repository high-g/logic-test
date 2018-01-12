const webpack = require('webpack');
const extractTextPlugin = require('extract-text-oplugin');

module.export = [
  {
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
      new webpack.optimize.UglifyJsPlugin()
    ]
  },
  {
    context: __dirname,
    entry: './src/entry.js',
    output: {
      path: './public',
      filename: 'bundle.js'
    },
  }
]