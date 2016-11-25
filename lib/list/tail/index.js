'use strict';

var addindex = require('../../function/addindex');
var filter = require('../filter');
var curry = require('../../function/curry');

module.exports = curry(addindex(filter))(function (v, i) {
  return i !== 0;
});