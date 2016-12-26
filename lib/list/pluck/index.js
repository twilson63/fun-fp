'use strict';

var curry = require('../../function/curry');
var map = require('../map');
var prop = require('../../object/prop');

module.exports = curry(function (string, list) {
  return map(prop(string), list);
});