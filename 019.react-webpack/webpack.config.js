module.exports = {
  mode: 'development',
  entry: './src/main.js',
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
      }
    ]
  }
};