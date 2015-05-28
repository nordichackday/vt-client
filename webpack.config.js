/*eslint-env node*/

'use strict'

var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  progress: true,
  entry: {
    main: './app/entries/main',
    common: './app/entries/common'
  },
  output: {
    path: path.join(__dirname, 'static'),
    filename: '[name].js'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ }//,
    ]
  }
};
