'use strict';

var curry = require('../../function/curry');

module.exports = curry(function (path, value, obj) {
  if (path.length === 0) {
    return value;
  }
  if (path.length > 1) {}
});