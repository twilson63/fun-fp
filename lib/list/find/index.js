'use strict';

var filter = require('../filter');
var head = require('../head');

module.exports = function (fn, list) {
  return head(filter(fn, list));
};