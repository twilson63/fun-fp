'use strict';

var reverse = require('../../list/reverse');
var reduce = require('../../list/reduce');

module.exports = function () {
  for (var _len = arguments.length, fns = Array(_len), _key = 0; _key < _len; _key++) {
    fns[_key] = arguments[_key];
  }

  return function (value) {
    return reduce(function (acc, fn) {
      return fn(acc);
    }, value, reverse(fns));
  };
};