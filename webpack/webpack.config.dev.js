const webpack = require('webpack');
const WebpackNotifierPlugin = require('webpack-notifier');
const common = require('./common.config');

module.exports = {
  devtool: 'source-map',

  entry: [
    // Add the react hot loader entry point - in reality, you only want this in your dev Webpack config
    'react-hot-loader/patch',
    'webpack-dev-server/client?https://localhost:3000',
    'webpack/hot/only-dev-server',
    './src/ts/app.tsx',
    './src/sass/index.scss',
  ],

  output: Object.assign(common.output, {
    filename: 'app.js',
    publicPath: '/dist',
  }),

  resolve: common.resolve,

  module: common.module,

  plugins: common.plugins.concat([
    // Add the Webpack HMR plugin so it will notify the browser when the app code changes
    new webpack.HotModuleReplacementPlugin(),
    new WebpackNotifierPlugin({ alwaysNotify: true }),
    new webpack.EnvironmentPlugin(['NODE_ENV', 'API_URL', 'PAYMENTS', 'STRIPE_PUB_KEY', 'USERS'])
  ]),
};
