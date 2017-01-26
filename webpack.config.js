const { resolve } = require('path');
const source = resolve(__dirname, 'src');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const DashboardPlugin = require('webpack-dashboard/plugin');

module.exports = {
  entry: `${source}/index.js`,
  output: {
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/
    }, {
      test: /\.css$/,
      loader: 'style-loader!css-loader?modules,localIdentName=[hash:base64:6]-[name]-[local]',
      exclude: /node_modules/
    }]
  },
  plugins: [new HtmlWebpackPlugin({
    template: `${source}/index.html`
  }), new DashboardPlugin()]
};