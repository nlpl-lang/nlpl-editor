const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    app: './src/index.js'
  },
  devServer: {
    contentBase: './dist',
    hot: true
  },
  devtool: 'inline-source-map',
  mode: 'development',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};
