const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const distPath = path.join(__dirname, 'docs');

module.exports = {
  mode: 'production',
  entry: './src/main.js',
  output: {
    filename: 'main.js',
    path: distPath
  },
  devServer:{
    static:{
      directory: distPath},
      port:8088
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: './src/index.html',
    }),
  ],
};