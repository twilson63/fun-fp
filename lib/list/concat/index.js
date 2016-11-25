'use strict';

var reduce = require('../reduce');

module.exports = function () {
  for (var _len = arguments.length, lists = Array(_len), _key = 0; _key < _len; _key++) {
    lists[_key] = arguments[_key];
  }

  return reduce(function (acc, value) {
    return acc.concat(value);
  }, [], lists);
};