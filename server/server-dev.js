var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('../webpack/webpack.config.dev');

module.exports = {
  listen: function(port) {
    new WebpackDevServer(webpack(config), {
      publicPath: config.output.publicPath,
      hot: true,
      historyApiFallback: {
        rewrites: [
          {
            from: /^\/confirm\/.*$/,
            to: function() { return 'index.html' }
          }
        ]
      },
    }).listen(port, '0.0.0.0', function (err, result) {
      if (err) return console.log(err);

      console.log('Environment: DEV\nListen on port: ' + port);
    });
  }
}

