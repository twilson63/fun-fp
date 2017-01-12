'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var curry = require('../../function/curry');
var reduce = require('../reduce');

module.exports = curry(function (fn, list) {
  return reduce(function (acc, value) {
    return !fn(value) ? [].concat(_toConsumableArray(acc), [value]) : acc;
  }, [], list);
});