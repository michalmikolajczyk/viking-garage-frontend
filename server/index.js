const Server = require('./server-prod.js')
const port = (process.env.PORT || 3000)
const app = Server.app()

if (process.env.NODE_ENV !== 'production') {
  const webpack = require('webpack')
  const WebpackDevServer = require('webpack-dev-server');
  const config = require('./webpack.config')
//   const webpackDevMiddleware = require('webpack-dev-middleware')
//   const webpackHotMiddleware = require('webpack-hot-middleware')
//   const compiler = webpack(config)

//   app.use(webpackHotMiddleware(compiler))
//   app.use(webpackDevMiddleware(compiler, {
//     noInfo: true,
//     publicPath: config.output.publicPath
//   }))

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
    if (err) {
      return console.log(err);
    }
    console.log('Environment: dev');
  });

} else {
  console.log('Environment: production');
  app.listen(port);
}

console.log(`Listening at port ${port}`)
