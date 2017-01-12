'use strict';

var curry = require('../../function/curry');
var equals = require('../../relation/equals');
var find = require('../find');

module.exports = curry(function (value, list) {
  return find(equals(value), list) ? true : false;
});