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
})();
