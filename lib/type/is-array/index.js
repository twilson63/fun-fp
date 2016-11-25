'use strict';

var is = require('../is');

module.exports = function (list) {
  return is(Object, list) && list.length > -1;
};