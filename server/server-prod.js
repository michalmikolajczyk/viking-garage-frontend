const express = require('express');
const render = require('../dist/ssr').default;
const path = require('path');
const fs = require('fs');

module.exports = {
  listen: function (port) {
    const app = express()

    app.use('/dist', express.static(path.resolve('dist')));

    app.get('*', function (req, res) {
      render(req.url)
        .then((appString) => {
          const indexFile = fs.readFileSync('index.html', 'utf8');
          const index = indexFile.replace('<div id="mockup"></div>', appString);
          res.send(index);
        })
        .catch((err) => {
          res.send('Internal server error');
        });
    });

    app.listen(port);

    console.log('Environment: prod\nListen on port: ' + port);
  }
}
