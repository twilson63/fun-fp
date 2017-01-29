'use strict';

var add = require('../../math/add');
var inc = add(1);

module.exports = function (iterator) {
  return function (origFn, list) {
    var idx = -1;
    var fn = function fn(v) {
      idx = inc(idx);
      return origFn.apply(null, [v, idx]);
    };
    return iterator.apply(null, [fn, list]);
  };
};