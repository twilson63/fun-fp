'use strict';

var reduce = require('../../list/reduce');

module.exports = function () {
  for (var _len = arguments.length, list = Array(_len), _key = 0; _key < _len; _key++) {
    list[_key] = arguments[_key];
  }

  return reduce(function (a, b) {
    return a * b;
  }, 1, list);
};