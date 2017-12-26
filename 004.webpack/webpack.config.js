const path = require('path');

module.exports = {
  entry: './src/js/app.js', // エントリーポイント
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'public/js')
  }
};