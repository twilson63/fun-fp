'use strict';

var curry = require('../../function/curry');
var concat = require('../concat');
module.exports = curry(function (value, list) {
  return concat(list, [value]);
});