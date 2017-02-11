'use strict';

//var curry = require('../../function/curry');
var sum = require('../sum');

module.exports = function (list) {
  return sum(list) / list.length;
};