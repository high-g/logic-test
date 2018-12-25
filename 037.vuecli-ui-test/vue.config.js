const PrettierPlugin = require('prettier-webpack-plugin')

module.exports = {
  configureWebpack: {
    plugins: [
      new PrettierPlugin({
        singleQuate: true,
        semi: false,
        tabWidth: 2,
        printWidth: 80
      })
    ]
  }
}
