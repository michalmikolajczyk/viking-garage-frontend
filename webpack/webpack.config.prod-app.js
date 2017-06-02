const webpack = require('webpack');
const common = require('./common.config');

module.exports = {
  entry: [
    './src/ts/app.tsx',
    './src/sass/index.scss',
  ],

  output: Object.assign(common.output, {
    filename: 'app.js',
  }),

  resolve: common.resolve,

  plugins: common.plugins.concat([
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compress: {
        warnings: false
      }
    }),
  ]),

  module: common.module,
}
