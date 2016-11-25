'use strict';

var curry = require('../../function/curry');
module.exports = curry(function (a, b) {
  return a < b;
});