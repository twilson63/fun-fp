"use strict";

module.exports = function (iterator) {
  return function (fn, list) {
    var idx = 0;
    var origFn = fn;
    fn = function fn() {
      var result = origFn.apply(null, [arguments[0], idx]);
      idx += 1;
      return result;
    };
    return iterator.apply(null, [fn, list]);
  };
};