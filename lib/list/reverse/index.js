'use strict';

var reduce = require('../reduce');
var concat = require('../concat');

module.exports = function (list) {
  return reduce(function (acc, value) {
    return concat([value], acc);
  }, [], list);
};