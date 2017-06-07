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

function errorHandler(err, req, res, next) {
  return next();
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

    app.get('/', (req, res, next) => {
      request(API + '/offer', (err, response, body) => {
        if (err || response.statusCode != 200) return errorHandler(err, req, response, next);
        const json = JSON.parse(body);
        const data = {
          offers: json,
          userAgent: req.headers['user-agent'],
        };
        render(req.url, data)
          .then(app => send(res, app, JSON.stringify(data)))
          .catch(err => res.send('Internal server error'));
      })
    });

    app.get('/offer/*', (req, res, next) => {
      const id = req.url.split('/')[2];
      request(API + '/offer/' + id, (err, response, body) => {
        if (err || response.statusCode != 200) return errorHandler(err, req, response, next);
        const json = JSON.parse(body);
        const data = {
          offer: json,
          userAgent: req.headers['user-agent'],
        };
        render(req.url, data)
          .then(app => send(res, app, JSON.stringify(data)))
          .catch(err => res.send('Internal server error'));
      })
    });

    app.get('*', function (req, res) {
      const data = { userAgent: req.headers['user-agent'] }
      render(req.url, data)
        .then(app => send(res, app, JSON.stringify(data)))
        .catch(err => res.send('Internal server error'));
    });

    app.listen(port);

    console.log('Environment: ' + process.env.NODE_ENV + '\nListen on port: ' + port);
  }
}
