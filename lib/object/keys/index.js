'use strict';

var is = require('../../type/is');

module.exports = function (obj) {
  return is(Object, obj) ? Object.keys(obj) : [];
};