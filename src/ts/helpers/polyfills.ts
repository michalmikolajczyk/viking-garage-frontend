(function() {
  // requestAnimFrame shim  with setTimeout fallback
  // http://stackoverflow.com/a/13002988/6041704
  if (typeof window !== 'undefined') {
    window.requestAnimationFrame =
      window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.oRequestAnimationFrame ||
      window.msRequestAnimationFrame ||
      function (callback) {
          window.setTimeout(callback, 1000 / 60);
      };
  }

  // localStorage polyfill https://gist.github.com/juliocesar/926500
  if (!('localStorage' in window)) {
    window.localStorage = {
      _data       : {},
      setItem     : function(id, val) { return this._data[id] = String(val); },
      getItem     : function(id) { return this._data.hasOwnProperty(id) ? this._data[id] : undefined; },
      removeItem  : function(id) { return delete this._data[id]; },
      clear       : function() { return this._data = {}; }
    };
  }

  // Object.assing() polyfill https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
  if (typeof Object.assign != 'function') {
    Object.assign = function(target, varArgs) { // .length of function is 2
      'use strict';
      if (target == null) { // TypeError if undefined or null
        throw new TypeError('Cannot convert undefined or null to object');
      }
      var to = Object(target);
      for (var index = 1; index < arguments.length; index++) {
        var nextSource = arguments[index];
        if (nextSource != null) { // Skip over if undefined or null
          for (var nextKey in nextSource) {
            // Avoid bugs when hasOwnProperty is shadowed
            if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
              to[nextKey] = nextSource[nextKey];
            }
          }
        }
      }
      return to;
    };
  }
})();
