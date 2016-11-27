'use strict';

var over = require('../over');
var curry = require('../../function/curry');

module.exports = curry(function (lens, v, x) {
  return over(lens, function (_) {
    return v;
  }, x);
});