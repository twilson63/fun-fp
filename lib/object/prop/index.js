'use strict';

var curry = require('../../function/curry');
module.exports = curry(function (name, obj) {
  return obj[name];
});