var webpack = require('webpack');
var path = require('path');
var WebpackNotifierPlugin = require('webpack-notifier');

module.exports = {
  devtool: 'source-map',
  entry: [
    // Add the react hot loader entry point - in reality, you only want this in your dev Webpack config
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    'index.tsx'
  ],
  output: {
    filename: 'app.js',
    publicPath: '/dist',
    path: path.resolve('dist')
  },
  resolve: {
    extensions: ['', '.ts', '.tsx', '.js', '.jsx'],
    modulesDirectories: ['src/ts', 'src/sass', 'node_modules'],
  },
  module: {
    loaders: [
      { test: /\.tsx?$/, loaders: ['babel', 'ts-loader'] },
      { test: /\.scss$/, loaders: ['style-loader', 'css-loader', 'sass-loader'] },
    ]
  },
  plugins: [
    // Add the Webpack HMR plugin so it will notify the browser when the app code changes
    new webpack.HotModuleReplacementPlugin(),
    new WebpackNotifierPlugin({ alwaysNotify: true }),
  ]
};
