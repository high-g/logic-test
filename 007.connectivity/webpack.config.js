const webpack = require('webpack');

module.exports = {
  watch: true,
  entry: {
    js: './src/babel/entry.js'
  },
  output: {
    path: `${__dirname}/public/js/`,
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                ['env', {'modules': false}]
              ]
            }
          }
        ],
        exclude: /node_modules/,
      }
    ]
  },
  devtool: 'source-map'
};