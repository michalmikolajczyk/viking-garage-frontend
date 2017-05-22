const path = require('path')
const express = require('express')

module.exports = {
  listen: function (port) {
    const app = express()
    const indexPath = path.join(__dirname, 'index.html')
    const publicPath = express.static(path.join(__dirname, 'dist'))

    app.use('/dist', publicPath)
    app.get('/', function (_, res) { res.sendFile(indexPath) })

    app.listen(port);

    console.log('Environment: PROD\nListen on port: ' + port);
  }
}
