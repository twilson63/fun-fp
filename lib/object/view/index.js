'use strict';

var curry = require('../../function/curry');

module.exports = function (_) {
  var Const = function Const(x) {
    return {
      value: x,
      map: function map() {
        return this;
      }
    };
  };

  return curry(function (lens, x) {
    return lens(Const)(x).value;
  });
}();