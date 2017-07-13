// read env vars from local .env file
const dotenv = require('dotenv');
dotenv.config();

// check for required env vars declared in app.json
const fs = require('fs');
const appJSON = fs.readFileSync('app.json', 'utf8');
const appConf = JSON.parse(appJSON);

Object.keys(appConf.env).forEach((key) => {
  if (process.env[key] === undefined) {
    console.error(key, 'is undefined!');
    console.error('You should set all env vars!');
    console.error('For details check app.json and README');
    process.exit(1);
  }
});

const serverDev = require('./server-dev');
const serverProd = require('./server-prod');
const port = process.env.PORT;
const node_env = process.env.NODE_ENV;

if (node_env === 'production') {
  serverProd.listen(port);
} else {
  serverDev.listen(port);
}
