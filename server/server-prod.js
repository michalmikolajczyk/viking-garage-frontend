const express = require('express');
const request = require('request');
const path = require('path');
const hbs = require('express-handlebars');
const fs = require('fs');
const log = require('debug')('server');
const render = require('../dist/ssr').default;
const vgLimit = process.env.VG_LIMIT || 8;
const API = process.env.API_URL;
const GA = process.env.GA_TRACKER;

function send(res, content, context) {
  res.render('index', {
    content,
    context,
    GA: `'${GA}'`,
  });
}

function errorHandler(err, req, res, next, msg) {
  log(msg, err);
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

    app.use(function (req, res, next) {
      const httpsAddress = ['https://', req.get('Host'), req.url].join('');
      if (req.headers['x-forwarded-proto'] !== 'https') return res.redirect(httpsAddress);
      return next();
    });

    app.get('/', (req, res, next) => {
      request(API + '/offer', (err, response, body) => {
        if (err || response.statusCode != 200) return errorHandler(err, req, res, next, 'API error');
        const json = JSON.parse(body);
        const data = {
          vgLimit,
          offers: json,
          userAgent: req.headers['user-agent'],
        };
        render(req.url, data)
          .then(app => send(res, app, JSON.stringify(data)))
          .catch(err => errorHandler(err, req, res, next, 'Internal error'));
      })
    });

    app.get('/offer/*', (req, res, next) => {
      const id = req.url.split('/')[2];
      request(API + '/offer/' + id, (err, response, body) => {
        if (err || response.statusCode != 200) return errorHandler(err, req, res, next, 'API error');
        const json = JSON.parse(body);
        const data = {
          vgLimit,
          offer: json,
          userAgent: req.headers['user-agent'],
        };
        render(req.url, data)
          .then(app => send(res, app, JSON.stringify(data)))
          .catch(err => errorHandler(err, req, res, next, 'Internal error'));
      })
    });

    app.get('*', function (req, res) {
      const data = {
        vgLimit,
        userAgent: req.headers['user-agent'],
      };
      render(req.url, data)
        .then(app => send(res, app, JSON.stringify(data)))
        .catch(err => res.send('Internal Server Error'));
    });

    app.listen(port);

    console.log('Environment: ' + process.env.NODE_ENV + '\nListen on port: ' + port);
  }
}
