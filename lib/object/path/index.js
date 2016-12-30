'use strict';

var reduce = require('../../list/reduce');
var prop = require('../prop');
var is = require('../../type/is');
var curry = require('../../function/curry');

module.exports = curry(function (list, obj) {
  return reduce(function (acc, value) {
    return is(Object, acc) ? prop(value, acc) : acc;
  }, obj, list);
});