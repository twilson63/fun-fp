'use strict';

var filter = require('../filter');
var head = require('../head');
var compose = require('../../function/compose');

module.exports = function (fn, list) {
  return head(filter(fn, list));
};

//module.exports = compose(head,filter)