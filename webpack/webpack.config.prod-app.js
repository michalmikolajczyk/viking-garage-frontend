const webpack = require('webpack');
const common = require('./common.config');
// read env vars from local .env file
const dotenv = require('dotenv');
dotenv.config();

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
    new webpack.EnvironmentPlugin(['NODE_ENV', 'API_URL', 'PAYMENTS', 'STRIPE_PUB_KEY', 'USERS', 'VG_LIMIT', 'GA_TRACKER'])
  ]),

  module: common.module,
}
