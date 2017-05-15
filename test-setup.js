/* setup.js */

var jsdom = require('jsdom').jsdom;

global.document = jsdom('');
global.window = document.defaultView;
Object.keys(document.defaultView).forEach((property) => {
  if (typeof global[property] === 'undefined') {
    global[property] = document.defaultView[property];
  }
});

global.window.fetch = require('whatwg-fetch');

global.window.requestAnimationFrame = callback => {
  global.window.setTimeout(callback, 1000 / 60);
};
global.window.cancelAnimationFrame = requestID => {};

global.window.localStorage = global.localStorage = {
  getItem: () => {},
  setItem: () => {},
  removeItem: () => {},
}

global.window.scrollY = 0;
global.window.scrollX = 0;

global.window.scrollTo = (x, y) => {
  global.window.scrollX = x;
  global.window.scrollY = y;
}

global.document.querySelector = () => ({
  clientHeight: 0,
})

global.navigator = {
  userAgent: 'node.js',
  language: 'en-US',
  geolocation: {
    getCurrentPosition: (call) => {
      call({
        coords: {
          latitude: 52.185302899999996,
          longitude: 21.0475334,
        }
      })
    }
  }
}

global.config = require('./config')

// for material-ui event handler
var injectTapEventPlugin = require('react-tap-event-plugin');
injectTapEventPlugin();
