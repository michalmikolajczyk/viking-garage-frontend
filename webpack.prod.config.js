const path = require('path')
const webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devtool: 'source-map',

  entry: [
    'index.tsx',
    './src/sass/index.scss',
  ],

  output: {
    filename: 'app.js',
    publicPath: '/dist.',
    path: path.join(__dirname, 'dist'),
  },

  resolve: {
    extensions: ['', '.ts', '.tsx', '.js', '.jsx'],
    modulesDirectories: ['src/ts', 'node_modules'],
  },

  plugins: [
    // new webpack.optimize.DedupePlugin(),
    // new webpack.optimize.UglifyJsPlugin({
    //   minimize: true,
    //   compress: {
    //     warnings: false
    //   }
    // }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new ExtractTextPlugin('styles.css', {
      allChunks: true,
    }),
  ],

  module: {
    loaders: [
      {
        test: /\.tsx?$/,
        loaders: ['babel', 'ts-loader']
      },
      {
        test: /\.scss$/,
        include: path.join(__dirname, 'src', 'sass'),
        loader: ExtractTextPlugin.extract('css?sourceMap!sass?sourceMap'),
      },
      { test: /\.png$/,
        loader: 'file' },
      { test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        loader: 'file'}
    ],
  },

}
