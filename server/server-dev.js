var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('../webpack/webpack.config.dev');
var fs = require('fs');

module.exports = {
  listen: function(port) {
    new WebpackDevServer(webpack(config), {
      disableHostCheck: true,
      publicPath: config.output.publicPath,
      hot: true,
      https: {
        cert: fs.readFileSync("server/server.crt"),
        key: fs.readFileSync("server/server.key")
      },
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

      console.log('Environment: ' + process.env.NODE_ENV + '\nListen on port: ' + port);
    });
  }
}

