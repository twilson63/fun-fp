'use strict';

var reduce = require('../../list/reduce');
var prop = require('../prop');
var is = require('../../type/is');

module.exports = function (list, obj) {
  return reduce(function (acc, value) {
    return is(Object, acc) ? prop(value, acc) : acc;
  }, obj, list);
};