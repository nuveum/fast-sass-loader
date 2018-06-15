const webpack = require('webpack');
const webpackConfig = require('./webpack.config');

webpack(webpackConfig, (arg) => {
  console.log(arg)
})
