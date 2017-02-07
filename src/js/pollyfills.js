// requestAnimFrame shim  with setTimeout fallback
// http://stackoverflow.com/a/13002988/6041704
(function() {
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
})();
