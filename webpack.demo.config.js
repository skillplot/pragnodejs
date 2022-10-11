const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './demo/dist'),
    filename: 'main.js',
  },
  plugins: [],
  optimization: {},
  module: {},
  devServer: {
    port: 9000,
  },
};
