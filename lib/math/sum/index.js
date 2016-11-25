'use strict';

var reduce = require('../../list/reduce');
module.exports = function (list) {
  return reduce(function (acc, v) {
    return acc + v;
  }, 0, list);
};