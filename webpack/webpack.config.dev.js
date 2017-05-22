var webpack = require('webpack');
var path = require('path');
var WebpackNotifierPlugin = require('webpack-notifier');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devServer: {
    compress: true,
    disableHostCheck: true
  },
  devtool: 'source-map',
  entry: [
    // Add the react hot loader entry point - in reality, you only want this in your dev Webpack config
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    'index.tsx',
    './src/sass/index.scss',
  ],
  output: {
    filename: 'app.js',
    publicPath: '/dist',
    path: path.resolve('dist'),
  },
  resolve: {
    extensions: ['', '.ts', '.tsx', '.js', '.jsx'],
    modulesDirectories: ['src/ts', 'node_modules'],
  },
  module: {
    loaders: [
      {
        test: /\.tsx?$/,
        loaders: ['babel', 'ts-loader']
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('css?sourceMap!sass?sourceMap'),
      },
    ],
  },
  plugins: [
    // Add the Webpack HMR plugin so it will notify the browser when the app code changes
    new webpack.HotModuleReplacementPlugin(),
    new WebpackNotifierPlugin({alwaysNotify: true}),
    new ExtractTextPlugin('styles.css', {
      allChunks: true,
    }),
  ]
};
