'use strict';

var reject = require('../reject');
var addIndex = require('../../function/addIndex');
var equals = require('../../relation/equals');

var rejectWithIndex = addIndex(reject);

module.exports = function (list) {
  return rejectWithIndex(function (v, i) {
    return equals(list.length - 1, i);
  }, list);
};