'use strict';

var curry = require('../../function/curry');
module.exports = function () {
  var Identity = function Identity(x) {
    return { value: x, map: function map(fn) {
        return Identity(fn(x));
      } };
  };

  return curry(function (lens, fn, obj) {
    return lens(function (y) {
      return Identity(fn(y));
    })(obj).value;
  });
}();