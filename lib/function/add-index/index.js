'use strict';

var add = require('../../math/add');
var inc = add(1);

module.exports = function (iterator) {
  return function (origFn, list) {
    var idx = -1;
    var fn = function fn(v) {
      idx = inc(idx);
      return origFn(v, idx);
    };
    return iterator(fn, list);
  };
};