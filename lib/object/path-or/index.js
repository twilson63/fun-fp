'use strict';

var path = require('../path');
var isNil = require('../../type/is-nil');

module.exports = function (defaultValue, pathList, obj) {
  var pathValue = path(pathList, obj);
  return isNil(pathValue) ? defaultValue : pathValue;
};