'use strict';

var curry = require('../../function/curry');
module.exports = curry(function (index, list) {
  return list[index];
});