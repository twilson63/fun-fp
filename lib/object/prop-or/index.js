'use strict';

var prop = require('../prop');
var curry = require('../../function/curry');

module.exports = curry(function (defaultValue, key, obj) {
  return prop(key, obj) || defaultValue;
});