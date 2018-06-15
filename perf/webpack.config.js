'use strict'

const path = require('path')

module.exports = {
  context: path.join(__dirname),
  entry: {
    index: './index.scss'
  },
  output: {
    path: path.join(__dirname),
    filename: 'dist/[name].js'
  },
  module: {
    rules: [
      {
        test: /\.(scss|sass)$/,
        use: [
          'fast-css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.png$/,
        loader: 'file-loader?name=[path][name].[ext]'
      }
    ]
  }
}
