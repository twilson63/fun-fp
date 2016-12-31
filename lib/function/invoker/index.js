'use strict';

function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }

var reverse = require('../../list/reverse');

module.exports = function (method) {
  return function () {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _reverse = reverse(args),
        _reverse2 = _toArray(_reverse),
        data = _reverse2[0],
        rest = _reverse2.slice(1);

    return data[method].apply(data, reverse(rest));
  };
};