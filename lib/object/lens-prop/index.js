'use strict';

var prop = require('../prop');
var assoc = require('../assoc');
var lens = require('../lens');

module.exports = function (k) {
  return lens(prop(k), assoc(k));
};