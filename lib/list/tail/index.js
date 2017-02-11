'use strict';

var addIndex = require('../../function/add-index');
var filter = require('../filter');
var filterWithIndex = addIndex(filter);

module.exports = function (list) {
  return filterWithIndex(function (v, i) {
    return i !== 0;
  }, list);
};