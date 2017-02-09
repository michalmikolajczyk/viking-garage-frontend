/* setup.js */

var jsdom = require('jsdom').jsdom;

global.document = jsdom('');
global.window = document.defaultView;
Object.keys(document.defaultView).forEach((property) => {
  if (typeof global[property] === 'undefined') {
    global[property] = document.defaultView[property];
  }
});


global.window.requestAnimationFrame = callback => {
  global.window.setTimeout(callback, 1000 / 60);
};

global.navigator = {
  userAgent: 'node.js'
};
