'use strict';

var _arity = function _arity(n, fn) {
  switch (n) {
    case 0:
      return function () {
        return fn.apply(null, arguments);
      };
    case 1:
      return function (a0) {
        return fn.apply(null, arguments);
      };
    case 2:
      return function (a0, a1) {
        return fn.apply(null, arguments);
      };
    case 3:
      return function (a0, a1, a2) {
        return fn.apply(null, arguments);
      };
    case 4:
      return function (a0, a1, a2, a3) {
        return fn.apply(null, arguments);
      };
    case 5:
      return function (a0, a1, a2, a3, a4) {
        return fn.apply(null, arguments);
      };
    case 6:
      return function (a0, a1, a2, a3, a4, a5) {
        return fn.apply(null, arguments);
      };
    case 7:
      return function (a0, a1, a2, a3, a4, a5, a6) {
        return fn.apply(null, arguments);
      };
    case 8:
      return function (a0, a1, a2, a3, a4, a5, a6, a7) {
        return fn.apply(null, arguments);
      };
    case 9:
      return function (a0, a1, a2, a3, a4, a5, a6, a7, a8) {
        return fn.apply(null, arguments);
      };
    default:
      throw new Error('First argument to _arity function must be a non-negative integer no greater than ten');
  }
};
var _curry = function _curry(length, received, fn) {
  if (length === received.length) {
    return fn.apply(null, received);
  }
  return function () {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var combined = received.concat(args);
    var left = length - combined.length;
    return left <= 0 ? fn.apply(null, combined) : _arity(left, _curry(length, combined, fn));
  };
};

module.exports = function (fn) {
  return function () {
    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return _curry(fn.length, args, fn);
  };
};