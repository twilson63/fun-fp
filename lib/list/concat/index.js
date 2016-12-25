'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var reduce = require('../reduce');

module.exports = function () {
  for (var _len = arguments.length, lists = Array(_len), _key = 0; _key < _len; _key++) {
    lists[_key] = arguments[_key];
  }

  return reduce(function (acc, value) {
    acc.push.apply(acc, _toConsumableArray(value));
    return acc;
  }, [], lists);
};