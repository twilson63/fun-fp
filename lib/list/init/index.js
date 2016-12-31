'use strict';

function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }

var tail = require('../tail');
var reverse = require('../reverse');
var compose = require('../../function/compose');

module.exports = function (list) {
  var _reverse = reverse(list),
      _reverse2 = _toArray(_reverse),
      rest = _reverse2.slice(1);

  return reverse(rest);
};