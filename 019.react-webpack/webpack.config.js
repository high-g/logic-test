const MODE = 'development';
const enabledSourceMap = (MODE === 'development');

module.exports = {
  mode: MODE,
  devServer: {
    contentBase: './dist',
    inline: true,
    hot: true,
    open: true,
    watchContentBase: true
  },
  entry: ['babel-polyfill', './src/main.js'],
  output: {
    path: `${__dirname}/dist/js`,
    filename: 'main.js'
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
                ['env', {'module': false}],
                'react'
              ]
            }
          }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              url: false,
              sourceMap: enabledSourceMap,
              importLoaders: 2
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: enabledSourceMap
            }
          }
        ]
      }
    ]
  }
};