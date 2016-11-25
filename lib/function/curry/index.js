'use strict';

var concat = require('../../list/concat');
var add = require('../../math/add');

module.exports = function (fn) {
  var n = fn.length;
  var store = [];

  var ifn = function ifn() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    if (add(args.length, store.length) < n) {
      store = concat(store, args);
      return ifn;
    }
    var result = fn.apply(null, concat(store, args));
    store = [];
    return result;
  };

  return ifn;
};