const path = require('path');

module.exports = {
  entry: './src/clickable.js',
  mode: 'production',
  module: {
    rules: [
      {
        exclude: /(node_modules)/,
        test: /\.jsx?$/,
        use: 'babel-loader'
      }
    ]
  },
  output: {
    filename: 'clickable.js',
    libraryTarget: 'commonjs2',
    path: path.resolve('dist')
  }
};
