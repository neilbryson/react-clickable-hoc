const path = require('path');

module.exports = {
  entry: './src/clickable.js',
  mode: 'production',
  module: {
    rules: [
      {
        exclude: /(node_modules)/,
        test: /\.jsx?$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      }
    ]
  },
  output: {
    filename: 'clickable.js',
    libraryTarget: 'commonjs2',
    path: path.resolve('dist')
  }
};
