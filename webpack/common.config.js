const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  output: {
    path: path.resolve('dist'),
  },

  resolve: {
    extensions: ['', '.ts', '.tsx', '.js', '.jsx'],
    modulesDirectories: ['src/ts', 'node_modules'],
  },

  plugins: [
    new ExtractTextPlugin('styles.css', { allChunks: true }),
  ],

  module: {
    loaders: [
      {
        test: /\.tsx?$/,
        loaders: ['babel', 'ts-loader']
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('css?sourceMap!postcss-loader?sourceMap!sass?sourceMap'),
      },
      {
        test: /\.png$/,
        loader: 'file',
      },
      {
        test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        loader: 'file',
      },
    ],
  },
}
