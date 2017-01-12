'use strict';

var curry = require('../../function/curry');
var reject = require('../reject');
var equals = require('../../relation/equals');

module.exports = curry(function (value, list) {
  return reject(equals(value), list);
});