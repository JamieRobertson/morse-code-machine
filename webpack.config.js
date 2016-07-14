var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = {
  debug: true, 
  entry: './main.js', 
  output: {
    path: __dirname, 
    filename: 'bundle.js'
  }, 
  module: {
    loaders: [
      {
        test: /.js?$/,
        loader: 'babel-loader',
        exclude: /node-modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }, 
      {
        test: /\.sass$/,
        // loader: "css-loader!sass-loader"
        loader: ExtractTextPlugin.extract("style-loader", "css-loader!sass-loader?sourceMap")
        // 'css-loader!sass-loader!style-loader'
        // include: './sass'
      }
    ]
  }, 
  devtool: 'source-map',
  plugins: [
    new ExtractTextPlugin('bundle.css', {
      allChunks: true
    })
  ]
};
