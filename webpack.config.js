const  path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');

let plugins = [];

plugins.push(new VueLoaderPlugin());
plugins.push(new UglifyJsPlugin())

module.exports = {
  mode:"development",
  entry:path.resolve(__dirname, 'src/index'),
  output: {
    path: path.resolve(__dirname, 'lib'),
    library: 'vue-drag-resize-rotate',
    filename: 'vue-drag-resize-rotate.js',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: plugins

};