const express = require('express');
const request = require('request');
const path = require('path');
const hbs = require('express-handlebars');
const fs = require('fs');
const render = require('../dist/ssr').default;
const API = process.env.API_URL || 'https://viking-garage-api-dev.herokuapp.com';

function send(res, content, context) {
  res.render('index', {
    content,
    context,
  });
}

module.exports = {
  listen: function (port) {
    const app = express();

    app.set('views', path.resolve('src/hbs'));
    app.engine('hbs', hbs({
      extname: 'hbs',
      defaultLayout: 'main.hbs',
      layoutsDir: path.resolve('src/hbs'),
    }));
    app.set('view engine', 'hbs');

    app.use('/dist', express.static(path.resolve('dist')));

    app.get('/', (req, res) => {
      request(API + '/offer', (err, response, body) => {
        if (err) return res.send('API server error ' + err);
        const json = JSON.parse(body);
        const data = { offers: json };
        render(req.url, data)
          .then(app => send(res, app, JSON.stringify(data)))
          .catch(err => res.send('Internal server error'));
      })
    });

    app.get('/offer/*', (req, res) => {
      const id = req.url.split('/')[2];
      request(API + '/offer/' + id, (err, response, body) => {
        if (err) return res.send('API server error ' + err);
        const json = JSON.parse(body);
        const data = { offer: json };
        render(req.url, data)
          .then(app => send(res, app, JSON.stringify(data)))
          .catch(err => res.send('Internal server error'));
      })
    });

    app.get('*', function (req, res) {
      render(req.url)
        .then(app => send(res, app))
        .catch(err => res.send('Internal server error'));
    });

    app.listen(port);

    console.log('Environment: prod\nListen on port: ' + port);
  }
}
