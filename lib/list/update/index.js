'use strict';

var curry = require('../../function/curry');
var addIndex = require('../../function/addindex');
var map = require('../map');

module.exports = curry(function (n, a, list) {
  var mapIndex = addIndex(map);
  return mapIndex(function (v, i) {
    return i === n ? a : v;
  }, list);
});