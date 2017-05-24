const serverDev = require('./server-dev');
const serverProd = require('./server-prod');
const port = process.env.PORT || 3000;
const env = process.env.NODE_ENV;

if (env === 'production') {
  serverProd.listen(port);
} else {
  serverDev.listen(port);
}
